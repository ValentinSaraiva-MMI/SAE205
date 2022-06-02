<template>
  <div class>
    <h5 class>Liste des artistes - Simple liste</h5>
  </div>
  <div v-for="artiste in listeArtistes" :key="artiste.id">
    <p>{{ artiste.nom }}</p>
    <img :src="artiste.image" alt="" />

    <BoutonstrokeblackView type="button" @click="deleteArtistes(artiste.id)" title="Supprimer"> Supprimer </BoutonstrokeblackView>
    <button v-if="!affformajout" @click="affformajout = true">ajout</button>
    <div v-if="affformajout">
      <!-- <input type="text" v-model="nom"> -->

      <BoutonstrokeblackView class="mx-2 items-center" type="button" @click="createArtistes()" title="Créé"> Créé </BoutonstrokeblackView>
      <button @click="affformajout = false">cancel</button>
    </div>
  </div>
  <hr />
</template>


<script>
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
import Bouton1View from "../components/Bouton1View.vue";
import BoutonstrokeblackView from "../components/BoutonstrokeblackView.vue";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  data() {
    return {
      listeArtistes: [],
      nom: null,
      affformajout: false,
    };
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "artistes");
      const query = await onSnapshot(dbArtistes, (snapshot) => {
        console.log("query", query);
        this.listeArtistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtistes.forEach(function (artistes) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistes/" + artistes.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              artistes.image = url;
              console.log("artistes", artistes);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        console.log("listeArtistes", this.listeArtistes);
      });
    },

    async createArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "artistes");
      const docRef = await addDoc(dbArtistes, {
        Nom: this.Nom,
      });
      //console.log('document créé avec le id : ', docRef.id);
    },

    async deleteArtistes(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistes", id);
      await deleteDoc(docRef);
    },
  },
  components: { Bouton1View, BoutonstrokeblackView },
};
</script>
