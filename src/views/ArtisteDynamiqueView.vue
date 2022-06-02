<template>
  <div class>
    <h5 class>Liste des artistes - Simple liste</h5>
  </div>
  <div v-for="Artistes in listeArtistes" :key="Artistes.id">
    <p>{{ Artistes.nom }}</p>
    <img :src="Artistes.image" alt="">
  </div>
  <hr />
</template>


<script>
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  data() {
    return {
      listeArtistes: [],
      
    };
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "Artistes");
      const query = await onSnapshot(dbArtistes, (snapshot) => {
        console.log("query", query);
        this.listeArtistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtistes.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistes/" + personne.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.image = url;
              console.log("personne", personne);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        console.log("listeArtistes", this.listeArtistes);
      });
    },
  },
  };

</script>
