
<template>
  <div class="h-screen bg-noir">
    <BoxBilleterieView2 jour="Forfaits 4 Jours" prix="125 €" />
    <div class="grid grid-cols-2 gap-4">
      <BoxBilleterieView jour="Vendredi 24 Juin " prix="35 €" />
      <BoxBilleterieView jour="Dimanche 25 Juin " prix="35 €" />
      <BoxBilleterieView jour="Lundi 26 Juin " prix="35 €" />
      <BoxBilleterieView jour="Mardi 27 Juin " prix="35 €" />
    </div>
  </div>
</template>




<script>
import BoxBilleterieView from "../components/BoxBilleterieView.vue";
import BoxBilleterieView2 from "../components/BoxBilleterieView2.vue";

export default {
  components: { BoxBilleterieView, BoxBilleterieView2 },
};
</script>


