<template>
  <div class="relative group bg-gray-400">
    <a href="#">
      <img :src="src" :alt="src" class="w-full h-full" />
    </a>
    <div
      class="
        w-full
        h-16
        flex
        items-center
        absolute
        bottom-0
        group-hover:bg-gradient-to-t group-hover:from-[#242424]
        ease-in-out
        duration-500
        delay-75
      "
    >
      <CardItems :user="user" :userSrc="userSrc" />
    </div>
  </div>
</template>

<script>
import CardItems from "./CardItems";
export default {
  name: "Card",
  components: {
    CardItems,
  },
  props: {
    src: String,
    user: String,
    userSrc: String,
  },
};
</script>