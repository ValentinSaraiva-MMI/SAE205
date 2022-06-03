
  <template>
  <figure class="mb-9 h-20 w-80 rounded-md bg-Beige-150 text-stone-900">
    <p class="mt-2 text-center text-lg font-bold text-noir">
      {{ jour }}
    </p>
    <div class="lace-content-center grid grid-cols-2 gap-1">
      <p class="pt-1 text-center text-lg font-bold text-noir">
        {{ prix }}
      </p>
      <button class="mt-1 h-7 w-14 rounded border-2 border-noir text-sm font-bold text-noir hover:bg-noir hover:text-white">Acheter</button>
    </div>
  </figure>
</template>


<script>
export default {
  name: "BoxBilleterieView2",
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


