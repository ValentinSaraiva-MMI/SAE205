<template>
  <div class="mt-10"
>

     <p class="text-Beige-150 text-2xl font-bold  text-left">
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