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
    <section class="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="flex flex-1 flex-col gap-4">
        <Card
          v-for="data in firstData"
          :key="data.id"
          :src="data.webformatURL"
          :user="data.user"
          :userSrc="data.userImageURL"
        />
      </div>
      <div class="flex flex-1 flex-col gap-4">
        <Card
          v-for="data in secondData"
          :key="data.id"
          :src="data.webformatURL"
          :user="data.user"
          :userSrc="data.userImageURL"
        />
      </div>
      <div
        class="
          col-span-2
          lg:col-auto lg:flex
          flex-1 flex-col
          gap-4
          grid grid-cols-2
        "
      >
        <Card
          v-for="data in thirdData"
          :key="data.id"
          :src="data.webformatURL"
          :user="data.user"
          :userSrc="data.userImageURL"
        />
      </div>
    </section>
  </main>
</template>

<script>
import { ref, inject, onMounted, onBeforeMount } from "vue";
import Header from "../components/Header";
import MainNav from "../components/MainNav";
import Card from "../components/Card";
import CategoryList from "../components/CategoryList.vue";

export default {
  name: "Home",
  components: {
    Header,
    MainNav,
    Card,
    CategoryList,
  },
  setup() {
    const store = inject("store");
    const perPage = ref(24);
    const arrayLength = 3;
    let images = ref([[], [], []]);
    let firstData = ref([]);
    let secondData = ref([]);
    let thirdData = ref([]);

    onMounted(() => {
      fetchImages();
    });

    onBeforeMount(() => {
      window.addEventListener("scroll", handleScroll);
    });

    const fetchImages = async () => {
      const res = await fetch(
        `https://pixabay.com/api/?key=21901923-8a8873e126764c75db02c194b&per_page=${perPage.value}&orientation=vertical&image_type=photo&editors_choice=true`
      );
      const data = await res.json();
      const wordsPerLine = Math.ceil(data.hits.length / 3);

      for (let line = 0; line < arrayLength; line++) {
        for (let i = 0; i < wordsPerLine; i++) {
          const value = data.hits[i + line * wordsPerLine];
          if (!value) continue; //avoid adding "undefined" values
          images.value[line].push(value);
        }
      }

      firstData.value = images.value[0];
      secondData.value = images.value[1];
      thirdData.value = images.value[2];
      console.log(data.hits);
      // console.log(images);
      // console.log(firstData);
      // console.log(secondData);
      // console.log(thirdData);
      return images;
    };

    const handleScroll = () => {
      const update = 18;
      if (
        window.pageYOffset + window.innerHeight >
        document.body.clientHeight - 100
      ) {
        perPage.value = perPage.value + update;
        fetchImages();
        console.log("near bottom!", perPage.value);
      }
    };

    return {
      store,
      perPage,
      fetchImages,
      firstData,
      secondData,
      thirdData,
    };
  },
};
</script>
