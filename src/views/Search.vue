<template>
  <TopNav />
  <Masonry
    :firstData="firstData"
    :secondData="secondData"
    :thirdData="thirdData"
  />
</template>

<script>
import TopNav from "../components/TopNav";
import Masonry from "../components/Masonry";
import { useCountStore } from "@/store/index";

export default {
  components: {
    TopNav,
    Masonry,
  },
  setup() {
    const store = useCountStore();
  },
};
</script>