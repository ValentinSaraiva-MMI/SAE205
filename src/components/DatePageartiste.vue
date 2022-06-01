<template>
  <div class=" mb-4 mt-10 "
>

     <p class="text-Beige-150 text-xl font-bold  ml-28 text-left">
    {{texte}}
    </p>
</div>

</template>

<script>



export default {
  name: 'DateVue',
  props:{

  texte: 
    {type: String}
  }
}
</script>