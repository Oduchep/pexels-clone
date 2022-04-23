<template>
  <Header />
  <MainNav />
  <main class="px-6">
    <section class="flex justify-between items-center">
      <h2 class="text-lg font-semibold">Free Stock Photos</h2>
      <button class="relative group flex items-center py-4 h-full">
        <span class="text-sm font-medium"> Trending </span>
        <span class="px-3 text-xs">
          <i class="bi bi-caret-down-fill"></i>
        </span>

        <div
          class="
            absolute
            -bottom-[6.4rem]
            right-0
            z-10
            hidden
            group-hover:block
          "
        >
          <CategoryList />
        </div>
      </button>
    </section>
    <Masonry
      :firstData="firstData"
      :secondData="secondData"
      :thirdData="thirdData"
    />
  </main>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useCountStore } from "@/store/index";
import Header from "../components/Header";
import MainNav from "../components/MainNav";
import CategoryList from "../components/CategoryList";
import Masonry from "../components/Masonry";

export default {
  name: "Home",
  components: {
    Header,
    MainNav,
    CategoryList,
    Masonry,
  },
  setup() {
    const store = useCountStore();
    const perPage = ref(27);
    const page = ref(1);
    const arrayLength = 3;
    let images = ref([[], [], []]);
    let firstData = ref([]);
    let secondData = ref([]);
    let thirdData = ref([]);

    onMounted(() => {
      fetchImages();
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    const fetchImages = async () => {
      const res = await fetch(
        `https://pixabay.com/api/?key=21901923-8a8873e126764c75db02c194b&page=${page.value}&per_page=${perPage.value}&image_type=photo&editors_choice=true`
      );
      const data = await res.json();
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
      console.log(data.hits);
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
        fetchImages();
        console.log("near bottom!", page.value);
      }
    };

    return {
      perPage,
      fetchImages,
      firstData,
      secondData,
      thirdData,
    };
  },
};
</script>
