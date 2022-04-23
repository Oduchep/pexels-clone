<template>
  <header
    class="
      bg-[url('https://picsum.photos/1200/1000?random=3')]
      bg-cover bg-no-repeat
    "
  >
    <div class="fixed z-20 w-full">
      <TopNav :pageScrolled="pageScrolled" :bgTrue="bgColor" />
    </div>

    <div class="w-4/5 md:w-3/4 lg:w-2/5 mx-auto py-32 md:py-44">
      <h1 class="text-white font-bold text-2xl lg:text-4xl leading-10 my-2">
        The best free stock photos, royalty free images & videos shared by
        creators.
      </h1>

      <form @submit.prevent="search">
        <Input
          placeholder="Search for free photos and videos"
          v-model="store.headerSearch"
        />
      </form>

      <p class="text-white text-sm my-2">
        Suggested:
        <span class="text-slate-200">
          ramadan kareem islamic 4k dark islam landscape more
        </span>
      </p>
    </div>
  </header>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useCountStore } from "@/store/index";
import { useRouter } from "vue-router";
import TopNav from "./TopNav";
import Input from "./Input";

export default {
  name: "Header",
  components: {
    TopNav,
    Input,
  },

  setup() {
    onBeforeMount(() => {
      window.addEventListener("scroll", handleScroll);
    });

    const pageScrolled = ref(false);
    const bgColor = "bg-[#232A34]";
    const store = useCountStore();
    const router = useRouter();

    const handleScroll = () => {
      window.pageYOffset >= 120
        ? (pageScrolled.value = true)
        : (pageScrolled.value = false);
      return pageScrolled;
    };

    const search = () => {
      localStorage.setItem("searchText", store.headerSearch);
      router.push(`/search/${localStorage.getItem("searchText")}`);
      return store.result;
    };

    return {
      store,
      handleScroll,
      pageScrolled,
      bgColor,
      search,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
