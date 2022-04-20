<template>
  <TopNav />
  <section>
    <h2>{{ searchText }} is what i searched for</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate
      earum eos! Voluptatem eius quae nulla nam placeat et iure quisquam
      repudiandae harum reiciendis, distinctio, doloribus soluta quis expedita
      nemo.
    </p>
  </section>
  <!-- <Masonry
    :firstData="firstData"
    :secondData="secondData"
    :thirdData="thirdData"
  /> -->
</template>

<script>
import TopNav from "../components/TopNav";
import Masonry from "../components/Masonry";
import { useCountStore } from "@/store/index";
import { ref } from "vue";

export default {
  components: {
    TopNav,
    Masonry,
  },
  setup() {
    const store = useCountStore();
    const searchText = ref(store.searchText);

    return {
      searchText,
    };
  },
};
</script>