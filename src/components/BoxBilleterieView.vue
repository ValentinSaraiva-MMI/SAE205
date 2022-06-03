
  <template>
  <figure class="h-14 w-28 rounded-md bg-Beige-150 text-stone-900">
    <p class="mt-2 text-center text-3xl font-bold text-white">
      {{ jour }}
    </p>
    <p class="text-center text-xs font-bold text-white">
      {{ prix }}
    </p>
  </figure>
</template>


<script>
export default {
  name: "BoxBilleterieView",
  props: {
    jour: {
      type: String,
    },
    prix: {
      type: Number,
    },
  },
};
</script>


