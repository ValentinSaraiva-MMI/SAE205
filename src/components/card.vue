<template>
    <figure class="flex flex-col w-auto h-auto m-4">
        <img
            class="w-44   h-44 object-cover rounded-t-lg"
            :src=image
            alt="image de personne" />
            <p :src=Nom />
            <p :src=job />


  
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

       Nom:{
         type: String,
     },
        job:{
         type: String,
     },
 }
}

</script>
