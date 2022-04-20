<template>
  <nav
    :class="pageScrolled ? 'bg-[#232A34]' : 'bg-transparent'"
    class="
      relative
      w-full
      px-6
      py-3
      flex
      items-center
      justify-between
      z-20
      top-0
      left-0
    "
  >
    <router-link
      class="flex items-center text-white hover:text-gray-200"
      to="/"
    >
      <svg
        class="rounded-lg"
        xmlns="http://www.w3.org/2000/svg"
        width="40px"
        height="40px"
        viewBox="0 0 32 32"
      >
        <path
          d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
          fill="#05A081"
        ></path>
        <path
          d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
          fill="#fff"
        ></path>
      </svg>

      <p class="hidden lg:block ml-3 text-lg font-bold">Pexels</p>
    </router-link>

    <div :class="pageScrolled ? 'block w-9/12 lg:w-1/2' : 'hidden'">
      <form @submit.prevent="search">
        <Input placeholder="Search for free photos" v-model="searchText" />
      </form>
    </div>

    <div class="flex">
      <ul class="hidden lg:flex items-center">
        <li class="mx-3 text-lg text-white hover:text-gray-200">Explore</li>
        <li class="mx-3 text-lg text-white hover:text-gray-200">Licence</li>
        <li class="mx-3 text-lg text-white hover:text-gray-200">Upload</li>
      </ul>

      <button class="hidden mx-5 md:block text-lg text-white">
        <i class="fa-solid fa-ellipsis"></i>
      </button>

      <button
        class="
          hidden
          mx-2
          md:block
          px-8
          py-2
          rounded
          font-semibold
          text-base text-white
          hover:text-gray-200
          bg-btn-green
        "
      >
        Join
      </button>

      <button @click="toggleMenu" class="md:hidden text-lg text-white">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>

    <div
      :class="menuOpen ? 'block' : 'hidden'"
      class="absolute w-full left-0 top-[3.8rem] bg-[#232A34] py-2 px-4"
    >
      <ul class="font-semibold text-xl text-gray-300 hover:text-white">
        <li class="py-3">Home</li>
        <hr class="bg-gray-500 my-4" />
        <li class="my-2">Discover Photos</li>
        <li class="my-2">Popular Searches</li>
        <li class="my-2">Free Videos</li>
        <li class="my-2">Challenges</li>
        <li class="my-2">Leaderboard</li>
        <li class="my-2">Pexels Blog</li>
      </ul>

      <ul class="text-lg text-gray-300 hover:text-white">
        <hr class="bg-gray-500 my-4" />
        <li class="my-2">Login</li>
        <li class="my-2">Join</li>
        <li class="my-2">Change Language</li>
        <li class="my-2">License</li>
        <hr class="bg-gray-500 my-4" />
        <li class="my-2">Apps And PS Plugin</li>
        <li class="my-2">FAQ</li>
        <li class="my-2">About Us</li>
        <li class="my-2">Imprint And Terms</li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Input from "./Input";
import { ref } from "vue";
import { useCountStore } from "@/store/index";

export default {
  name: "TopNav",
  components: {
    Input,
  },
  props: {
    pageScrolled: Boolean,
  },

  setup() {
    const store = useCountStore();
    const perPage = ref(27);
    const page = ref(1);
    const menuOpen = ref(false);
    const searchText = ref(store.searchText);
    const searchResult = ref(store.result);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
      console.log(menuOpen.value);
      return menuOpen.value;
    };

    // i stopped here. Please check the form
    const search = async () => {
      const res = await fetch(
        `https://pixabay.com/api/?key=21901923-8a8873e126764c75db02c194b&q=${searchText.value}&page=${page.value}&per_page=${perPage.value}&orientation=vertical&image_type=photo&editors_choice=true`
      );
      const data = await res.json();
      searchResult.value = data.hits;
      window.location.href = "/search";
      console.log(data.hits);
      console.log(searchResult.value);
      console.log(searchText.value);
      return searchResult;
    };

    return {
      menuOpen,
      searchText,
      toggleMenu,
      search,
    };
  },
};
</script>