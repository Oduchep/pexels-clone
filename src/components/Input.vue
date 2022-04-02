<template>
    <form class="w-full flex items-center justify-between rounded-lg bg-white">
        <input class="w-10/12 rounded-lg pl-5 py-3 focus:outline-none text-base text-black font-medium placeholder:text-zinc-700 placeholder:text-base placeholder:font-medium" type="text" name="search" :placeholder="placeholder" />
        <button class="w-2/12 md:1/12 rounded-lg px-5 py-3 text-lg font-light text-slate-500">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
</template>

<script>
export default {
  name: 'Input',
  props: {
      placeholder: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
