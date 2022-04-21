<template>
  <TopNav />
  <main class="px-8 my-4">
    <h2 class="text-5xl font-semibold my-8 text-[#2c343e]">
      Nice <span class="capitalize">{{ text }}</span> Photos
    </h2>
    <Masonry
      :firstData="firstData"
      :secondData="secondData"
      :thirdData="thirdData"
    />
  </main>
</template>

<script>
import TopNav from "../components/TopNav";
import Masonry from "../components/Masonry";
import { useCountStore } from "@/store/index";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  components: {
    TopNav,
    Masonry,
  },
  setup() {
    const store = useCountStore();
    const text = localStorage.getItem("searchText");
    const arrayLength = 3;
    const perPage = ref(27);
    const page = ref(1);
    let images = ref([[], [], []]);
    let firstData = ref([]);
    let secondData = ref([]);
    let thirdData = ref([]);

    onMounted(() => {
      chunkData();
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    const chunkData = async () => {
      const res = await fetch(
        `https://pixabay.com/api/?key=21901923-8a8873e126764c75db02c194b&q=${text}&page=${page.value}&per_page=${perPage.value}&image_type=photo&editors_choice=true`
      );
      const data = await res.json();
      store.result = data.hits;
      console.log(data.hits);
      console.log(store.result);
      console.log(store.searchText);

      const wordsPerLine = Math.ceil(data.hits.length / 3);

      for (let line = 0; line < arrayLength; line++) {
        for (let i = 0; i < wordsPerLine; i++) {
          const value = data.hits[i + line * wordsPerLine];
          if (!value) continue; //avoid adding "undefined" values
          images.value = [...images.value, images.value[line].push(value)];
        }
      }

      firstData.value = images.value[0];
      secondData.value = images.value[1];
      thirdData.value = images.value[2];
      // console.log(data.hits);
      console.log(images.value);
      return images;
    };

    const handleScroll = () => {
      const update = 1;
      if (
        window.pageYOffset + window.innerHeight >
        document.body.clientHeight - 100
      ) {
        page.value = page.value + update;
        chunkData();
        console.log("near bottom!", page.value);
      }
    };

    return {
      store,
      text,
      firstData,
      secondData,
      thirdData,
    };
  },
};
</script>