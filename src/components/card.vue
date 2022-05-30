<template>
    <figure class="flex flex-col w-auto h-auto m-4">
        <img
            class="w-full h-48 object-cover rounded-t-lg"
            :src=image
            alt="image de personne" />

  
    </figure>
</template>

<script>

export default {
 name: "card",
 components: {},
 props:{
     image:{
         type: String,
     },
 }
}

</script>
