<template>
  <div class="w-full flex items-center justify-between rounded-lg bg-white">
    <input
      class="
        w-10/12
        md:w-11/12
        rounded-lg
        pl-5
        py-[10px]
        focus:outline-none
        text-base text-zinc-500
        focus:text-black
        font-medium
        placeholder:text-zinc-400 placeholder:text-base placeholder:font-normal
      "
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      name="search"
      :placeholder="placeholder"
    />
    <button
      @click="onSubmit"
      class="
        w-2/12
        md:w-1/12
        rounded-lg
        py-[10px]
        text-lg
        font-light
        text-slate-500
      "
    >
      <i class="bi bi-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: String,
    modelValue: String,
    onSubmit: Function,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
