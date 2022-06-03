
<template>
  <div class="h-screen bg-noir">
    <p class="font-oswald text-xl text-Beige-150">BILLETERIE</p>
    <div class="mb-3 h-2 w-1/4 bg-Beige-150"></div>

    <div class="flex justify-center">
      <BoxBilleterieView2 jour="Forfaits 4 Jours" prix="125 €" />
    </div>
    <div class="grid grid-cols-2">
      <div class="my-5 flex justify-center">
        <BoxBilleterieView class="h-auto w-auto border-2 border-red-500" jour="Vendredi 24 Juin " prix="35 €" />
      </div>
      <div class="my-5 flex justify-center">
        <BoxBilleterieView class="h-full w-full border-2 border-red-500" jour="Dimanche 25 Juin " prix="35 €" />
      </div>
      <div class="flex justify-center">
        <BoxBilleterieView class="h-full w-full border-2 border-red-500" jour="Lundi 26 Juin " prix="35 €" />
      </div>
      <div class="flex justify-center">
        <BoxBilleterieView class="h-full w-full border-2 border-red-500" jour="Mardi 27 Juin " prix="35 €" />
      </div>
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


