<template>
<div class="bg-noir">

<!--Hero -->
<div class="w-full  relative">
  <img
    src="public\images\festival\hero_festival_grand.png"
    class="w-auto h-auto "
  />
  <p
    class="  xl:text-8xl  xl:pb-4  absolute left-[16.41px] top-[39.34px] text-[33.34638595581055px] font-medium text-left text-[#d4cebd]"
  >
    LE RAMPAGE
  </p>
  <p
    class="  xl:text-7xl  xl:mt-11   absolute left-[16.41px] top-[76.59px] text-[25.00978660583496px] font-medium text-left text-[#d4cebd]"
  >
    C’EST QUOI ?...
  </p>
</div>

<div class="flex justify-center">
<img  class=" md:w-8   w-5 relative -top-10" src="src\components\icons\flechedown.png" alt=" icone fleche bas ">
</div>

<div class=" flex justify-end">
<div class="w-[188px] h-[47.71px]  xl:w-96  xl relative right-0 ">
  <p
    class=" xl:text-7xl  absolute right-0 top-[1.24px] text-[26.677793502807617px] font-medium text-left text-[#d4cebd]"
  >
    UNE HISTOIRE
  </p>
  <div class="w-[188px] h-[3.77px] absolute right-0 top-[41.13px] bg-[#d4cebd]"></div>
</div>
</div>


<!--Texte (respnsive à revoir)-->
<div class="flex justify-center xl:mt-28  ">
  <p class="w-5/6  text-lg font-medium  lg:text-4xl  text-left text-[#d4cebd]">
  <span class=" text-lg font-medium text-left text-[#d4cebd]"
    >Comme tous bon projet qui se respecte au départ le Rampage c’est avant tout une idée. </span
  ><br /><span class=" text-lg font-medium text-left text-[#d4cebd]"
    >Celle de concevoir un nouveau festival de musique dans notre beau patelin de Franche-Comté en
    partant de rien, juste de la bonne volonté et beaucoup d’huile de coude à revendre </span
  ><br /><span class=" text-lg font-medium text-left text-[#d4cebd]"> </span
  ><br /><span class=" text-lg font-medium text-left text-[#d4cebd]"
    >Au départ ça à été laborieux, mais en réussissant à promouvoir de jeunes artistes talentueux
    auprès de notre public fraîchement acquis, le rampage à réussi à mobiliser durant sa premières
    éditions, pas moins de 10 000 personnes et à même tripler cette effectif l’année suivante. </span
  ><br /><span class=" text-lg font-medium text-left text-[#d4cebd]"> </span
  ><br /><span class=" text-lg font-medium text-left text-[#d4cebd]"
    >Après tout le chemin que nous avons parcourus, cette fois-ci, en réunissant des légendes du
    rock, et du métal telle que Bertrand Cantat où Trust, nous vous attendons encore plus nombreux </span
  ><br /><span class=" text-lg font-medium text-left text-[#d4cebd]"> </span
  ><br /><span class=" text-lg font-medium text-left text-[#d4cebd]"
    >Alors commandez vos places maintenant, et venez écrire l’histoire avec nous </span
  ><br />
</p>
</div>
<BoutonstrokeView class="flex justify-center pb-3">Billeterie</BoutonstrokeView>

<div class="bg-Beige-150 ">
<p class="text-[25.00978660583496px] xl:text-7xl  md:text-5xl sm:text-4xl font-medium text-left">UNE EQUIPE</p>
<div class="w-4/12 mt-1 h-2 z-40 bg-noir"></div>



<!-- Nom et fonction à ajouter-->
 <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] max-w-7xl ">
 
   <card image="public\images\collaborateurs\Rectangle 59-1.png"
job="lol"
        />

           <card image="public\images\collaborateurs\pexels-rene-asmussen-325685 1.png"
        />

           <card image="public\images\collaborateurs\Rectangle 59-2.png"
        />

    <card image="public\images\collaborateurs\Rectangle 59-3.png"
        />

           <card image="public\images\collaborateurs\Rectangle 59-4.png"
        />

           <card image="public\images\collaborateurs\Rectangle 59-5.png"
        />

          <card image="public\images\collaborateurs\Rectangle 59-6.png"
        />

           <card image="public\images\collaborateurs\Rectangle 59-7.png"
        />

           <card image="public\images\collaborateurs\amelie.png"
        />

    </div>
    </div>



 </div>
 

</template>

<script>
import BoutonstrokeView from '../components/BoutonstrokeView.vue';
import card from '../components/card.vue';
import Card1 from '../components/card.vue';
export default {
    name: "FestivalView",
    components: { BoutonstrokeView, card, Card1 }
}

</script>