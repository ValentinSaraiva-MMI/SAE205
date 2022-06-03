<template>
  <div class="ml-auto mr-auto">
    <button
      class="
        z-50
        rounded-xl
        border-[1px] border-noir
        py-2
        px-7
        font-bold
        text-noir
        transition
        delay-100
        ease-in-out
        hover:-translate-y-1 hover:scale-110 hover:bg-noir hover:text-white
      "
    >
      <slot />
    </button>
  </div>
</template>

<script >
export default {
  name: "boutonstroke2",
};
</script>
