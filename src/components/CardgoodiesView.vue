<template>
    <div class="w-40 h-40 relative">
        <div>
             <img :src=image1 class=" z-50 relative  w-20"
    alt="image goodies ">
        </div>
       
   
    <img :src=image2 class="z-50  relative -top-20 left-10  w-24 "
    alt="image goodies ">

  <div class="w-[104.12px] h-[127.9px]">
    <div class="w-[85.5px] h-[92.47px] absolute left-[-0.13px] top-[35.3px] bg-[#d4cebd]"></div>
    <div class="w-[56.02px] h-[12.87px]">
      <div
        class="w-[49.05px] h-[5.36px] absolute left-[15.83px] top-[113.44px] bg-neutral-800"
      ></div>
      <div
        class="w-[50.39px] h-[4.82px] absolute left-[20.11px] top-[118.26px] bg-neutral-800"
      ></div>
      <div
        class="w-[46.1px] h-[4.29px] absolute left-[14.49px] top-[122.02px] bg-neutral-800"
      ></div>
    </div>
    <p
      class="w-[30.02px] h-[8.84px] absolute left-[25.46px] top-[115.3px] text-[6.7006072998046875px] text-left text-white"
    >
      <slot/>
    </p>

    
  </div>
</div>
</template>


<script >
export default {
 name: "CardgoodiesView",
 props:{
    image1: String,
  image2: String
  }
}
</script>

