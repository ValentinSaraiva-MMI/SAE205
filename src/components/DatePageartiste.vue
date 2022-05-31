<template>
  <div class=" mx-auto  mt-10 "
>

     <p class="text-Beige-150 text-xl font-bold  text-left">
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