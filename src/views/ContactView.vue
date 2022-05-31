<template>
<div class="bg-noir">



<div class="w-full  relative">
  <img
    src="../../public/images/contact/image77.png"
    class="w-auto h-auto "
  />
  <p
    class="  xl:text-8xl lg:text-6xl xl:pb-4  absolute left-[16.41px] top-[39.34px] text-[33.34638595581055px] font-medium text-left text-[#d4cebd]"
  >
    NOUS CONTACTER
  </p>

</div>


<form class="w-full mr-auto ml-auto   max-w-screen-xl">
  <div class="flex flex-wrap -mx-3 mb-6">

    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-Beige-150 mt-2 text-xs font-bold mb-2" for="grid-first-name">
     Nom*
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-noir mt-2 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Dumont">
      <p class="text-red-500   text-xs italic">Veuillez renseigner ce champs.</p>
    </div>



    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-Beige-150 mt-2 text-xs font-bold mb-2" for="grid-last-name">
        Prenom*
      </label>
<input class="appearance-none block  w-full bg-gray-200 text-noir mt-2 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Valentin">
      <p class="text-red-500   text-xs italic">Veuillez renseigner ce champs.</p>
      
    </div>
  </div>


  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-Beige-150 mt-2 text-xs font-bold mb-2" for="grid-first-name">
     Email*
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-noir mt-2 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="adresseemail123@mail.fr">
      <p class="text-red-500   text-xs italic">Veuillez renseigner ce champs.</p>
    </div>
    
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-Beige-150 mt-2 text-xs font-bold mb-2" for="grid-last-name">
        Objet
      </label>
      
      <input class="appearance-none block w-full bg-gray-200 text-noir  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Objet">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">

    <label for="message" class="block mb-2 text-sm font-medium  dark:text-Beige-150">SUJET </label>
<textarea id="message" rows="4" class="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200   dark:border-gray-600 dark:placeholder-gray-400 dark:text-noir dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Écrivez ici les raisons de votre demande.
Nous tâcherons de vous répondre dans les plus brefs délais."></textarea>
 
 <!--
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text- mt-2 text-xs font-bold mb-2" for="grid-state">
        Objet
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Problème de tickets</option>
          <option>Probléme lié au site</option>
          <option>Easter Egg</option>
           <option>Autre raison </option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    -->



  <BoutonstrokeView>Envoyer </BoutonstrokeView>






   
  </div>
</form>

</div>   



</template>



<script >
import BoutonstrokeView from '../components/BoutonstrokeView.vue';
export default {
    name: "ContactView ",
    components: { BoutonstrokeView }
}
</script>