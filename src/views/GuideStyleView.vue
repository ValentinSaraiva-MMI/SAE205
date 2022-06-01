<template>
  <h1
    class="
      text-big text-center text-white
      bg-gradient-to-r
      from-cyan-500
      to-blue-500
    "
  >
    TP1 Guide de Style
  </h1>
  <div class="ml-2.5">
    <h2 class="text-2xl mb-3 mt-3 underline underline-offset-4">Main Colors</h2>
    <h1 class="w-20 h-10 rounded-xl mr-2.5 bg-gray-900 inline-block"></h1>
    <h2 class="w-20 h-10 rounded-xl mr-2.5 bg-indigo-500 inline-block"></h2>
    <h3 class="w-20 h-10 rounded-xl mr-2.5 bg-blue-900 inline-block"></h3>
    <h3 class="w-20 h-10 rounded-xl mr-2.5 bg-tonic inline-block"></h3>

    <h2 class="text-xl mb-3">Shades of Purple</h2>
    <h1 class="w-20 h-10 rounded-l-xl bg-indigo-25 inline-block"></h1>
    <h2 class="w-20 h-10 bg-indigo-100 inline-block"></h2>
    <h3 class="w-20 h-10 bg-indigo-200 inline-block"></h3>
    <h3 class="w-20 h-10 bg-indigo-300 inline-block"></h3>
    <h3 class="w-20 h-10 rounded-r-xl bg-indigo-400 inline-block"></h3>

    <h2 class="text-xl mb-3">Greyscale</h2>
    <h1 class="w-20 h-10 rounded-l-xl bg-gray-50 inline-block"></h1>
    <h2 class="w-20 h-10 bg-gray-100 inline-block"></h2>
    <h3 class="w-20 h-10 bg-gray-200 inline-block"></h3>
    <h3 class="w-20 h-10 bg-gray-300 inline-block"></h3>
    <h3 class="w-20 h-10 rounded-r-xl bg-gray-400 inline-block"></h3>
    <br />
    <h2 class="w-20 h-10 rounded-l-xl mt-2 bg-gray-500 inline-block"></h2>
    <h3 class="w-20 h-10 bg-gray-600 inline-block"></h3>
    <h3 class="w-20 h-10 bg-gray-700 inline-block"></h3>
    <h3 class="w-20 h-10 bg-gray-800 inline-block"></h3>
    <h3 class="w-20 h-10 rounded-r-xl bg-gray-900 inline-block"></h3>
    <div class="mb-10"></div>

    <h2 class="text-2xl mb-3 underline underline-offset-4">
      Polices et taille du guide de style
    </h2>

    <h2 class="text-xl font-roboto mb-2">Roboto</h2>
    <p class="text-xl font-roboto">
      Ceci est un texte de remplissage écrit en gros
    </p>
    <p class="text-base font-roboto">
      Ceci est un texte de remplissage écrit en taille moyenne
    </p>
    <p class="text-xs font-roboto">
      Ceci est un texte de remplissage écrit en petit
    </p>
    <p class="font-bold font-roboto mt-1">Ceci est un texte écrit en gras</p>
    <p class="font-light font-roboto mt-1">Ceci est un texte écrit en light</p>
    <p class="italic font-roboto mt-1">Ceci est un texte écrit en italic</p>

    <h2 class="text-xl font-lato mt-3">Lato</h2>
    <p class="text-xl font-lato">
      Ceci est un texte de remplissage écrit en gros
    </p>
    <p class="text-base font-lato">
      Ceci est un texte de remplissage écrit en taille moyenne
    </p>
    <p class="text-xs font-lato">
      Ceci est un texte de remplissage écrit en petit
    </p>
    <p class="font-bold font-lato mt-1">Ceci est un texte écrit en gras</p>
    <p class="font-light font-lato mt-1">Ceci est un texte écrit en light</p>
    <p class="italic font-lato mt-1">Ceci est un texte écrit en italic</p>

    <h2 class="text-2xl underline underline-offset-4 mt-5">Icones</h2>
    <ArchiveIcon class="w-12 mr-4 mt-4 inline-block"></ArchiveIcon>
    <BeakerIcon class="w-12 mr-4 mt-4 inline-block"></BeakerIcon>
    <CakeIcon class="w-12 mr-4 mt-4 inline-block"></CakeIcon>
    <BanIcon class="w-12 mr-4 mt-4 inline-block"></BanIcon>
    <FireIcon class="w-12 mr-4 mt-4 inline-block"></FireIcon>
    <GlobeIcon class="w-12 mr-4 mt-4 inline-block"></GlobeIcon>
    <RssIcon class="w-12 mr-4 mt-4 inline-block"></RssIcon>

    <h2 class="text-2xl underline underline-offset-4 mt-5">Composants</h2>
    <Bouton class="mt-3 block mb-5"></Bouton>
    <Combo class="mt-4"></Combo>
    <Check class="mt-3"></Check>
  </div>

  <div
    class="
      bg-gradient-to-r
      from-cyan-500
      to-blue-500
      pb-4
      text-white text-lg
      mt-5
    "
  >
    <div class="ml-3">
      <p class="font-medium mt-5">Valentin Saraiva</p>
      <p class="font-medium inline-block">C1</p>
      <img
        class="w-10 inline-block float-right mr-2 animate-bounce"
        src="./images/logo_mmi_blanc.png"
        alt="logoMMI"
      />
    </div>
  </div>
</template>




<script >
import Bouton from "./bouton.vue";
import Combo from "./combob.vue";
import Check from "./checkb.vue";

import {
  RssIcon,
  ArchiveIcon,
  BeakerIcon,
  CakeIcon,
  BanIcon,
  FireIcon,
  GlobeIcon,
} from "@heroicons/vue/outline";

export default {
  name: "App",
  components: {
    Check,
    Combo,
    Bouton,
    RssIcon,
    ArchiveIcon,
    BeakerIcon,
    CakeIcon,
    BanIcon,
    FireIcon,
    GlobeIcon,
  },
};
</script>

