<template>
  <div class="ml-9 mt-20 flex flex-col">
    <div class="z-20 w-1/2">
      <h1 class="stroke-custom font-montserrat text-[5.313rem] text-noir">
        COMMENÇONS <br />
        UN <br />
        PROJET
      </h1>
    </div>

    <div class="z-20 w-1/3">
      <p class="font-montserrat text-xl font-medium text-white">
        Vous recherchez un intégrateur front-end pour l’un de vos projet ? <br />
        N’hesitez pas a me contacter.
      </p>
    </div>
    <a
      href="https://www.google.ca/maps/place/25300+Doubs,+France/@48.5819728,3.2019397,5.67z/data=!4m5!3m4!1s0x478dbd2dbd17c7e3:0x7bd189a64a80664b!8m2!3d46.9276!4d6.349001?hl=fr"
    >
      <img class="absolute top-[15.4vh] right-0 z-10 w-[75vw]" src="public\images\map.webp" alt="map Doubs " />
    </a>

    <div class="ml-[6vw]">
      <h2 class="mt-[38vh] font-montserrat text-8xl font-medium text-white">Contact</h2>

      <!--Corriger
      <form action="https://api.web3forms.com/submit" method="POST" class="mr-auto ml-auto w-full max-w-screen-xl">
        <input type="hidden" name="access_key" value="60e7cf85-4b5c-4ee1-ab1f-6cf8fd02b92b" />
        <input type="hidden" name="redirect" value="https://web3forms.com/success" />
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <input
              class="mt-2 mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-noir focus:bg-white focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="Nom "
            />
            <p class="text-xs italic text-red-500">Veuillez renseigner ce champs.</p>
          </div>

          <div class="w-full px-3 md:w-1/2">
            <input
              class="mt-2 mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-noir focus:bg-white focus:outline-none"
              id="email"
              type="text"
              placeholder="Email "
            />
            <p class="text-xs italic text-red-500">Veuillez renseigner ce champs.</p>
          </div>
        </div>

        <div class="-mx-3 mb-2 flex flex-wrap">
          <label for="message" class="mx-3 mb-2 block text-sm font-medium text-Beige-150">SUJET </label>
          <textarea
            id="message"
            rows="1"
            class="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-200 dark:text-noir dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Détailles de projet "
          ></textarea>
        </div>

        <button
          class="btn-ctc h-10 border-2 border-white px-10 text-lg text-white transition-[color,box-shadow] duration-[400ms,450ms] hover:border-noir hover:text-noir hover:shadow-[inset_14rem_0_0_0] hover:shadow-white"
          type="submit"
        >
          Submit Form
        </button>
      </form>
-->

      <form action="https://api.web3forms.com/submit" class="mr-auto ml-auto w-full max-w-screen-xl" method="POST">
        <input type="hidden" name="access_key" value="60e7cf85-4b5c-4ee1-ab1f-6cf8fd02b92b" />

        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <input
              type="text"
              placeholder="Nom "
              class="mt-2 mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-noir focus:bg-white focus:outline-none"
              name="name"
              required
            />
            <input
              type="email"
              class="mt-2 mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-noir focus:bg-white focus:outline-none"
              placeholder="Email "
              name="email"
              required
            />
          </div>

          Message :<textarea name="message" required></textarea>
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />

          <button
            class="btn-ctc h-10 border-2 border-white px-10 text-lg text-white transition-[color,box-shadow] duration-[400ms,450ms] hover:border-noir hover:text-noir hover:shadow-[inset_14rem_0_0_0] hover:shadow-white"
            type="submit"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "ContactView ",
};
</script>
