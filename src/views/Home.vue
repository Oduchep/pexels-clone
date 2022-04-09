<template>
    <Header/>
    <MainNav/>
    <main class="px-6">
      <section class="flex justify-between items-center">
        <h2 class="text-lg font-semibold"> Free Stock Photos </h2>
        <button class="relative group flex items-center py-4 h-full">
          <span class="text-sm font-medium"> Trending </span>
          <span class="px-3 text-xs">
            <i class="bi bi-caret-down-fill"></i>
          </span>

          <div class="absolute -bottom-[6.4rem] right-0 z-10 hidden group-hover:block">
          <CategoryList/>
          </div>
        </button>
      </section>
      <section class="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="flex flex-1 flex-col gap-4">
          <Card :key="data.id" v-for="data in firstData" :src="data.webformatURL" :user="data.user" :userSrc="data.userImageURL"/>
        </div>
        <div class="flex flex-1 flex-col gap-4">
          <Card :key="data.id" v-for="data in secondData" :src="data.webformatURL" :user="data.user" :userSrc="data.userImageURL"/>
        </div>
        <div class="col-span-2 lg:col-auto lg:flex flex-1 flex-col gap-4 grid grid-cols-2">
          <Card :key="data.id" v-for="data in thirdData" :src="data.webformatURL" :user="data.user" :userSrc="data.userImageURL"/>
        </div>
      </section>
      
  </main>
</template>

<script>
import Header from '../components/Header'
import MainNav from '../components/MainNav'
import Card from '../components/Card'
import CategoryList from '../components/CategoryList.vue'

export default {
  name: 'Home',
  components: {
    Header,
    MainNav,
    Card,
    CategoryList
  },
  data() {
    return {
      arrayLength: 3,
      images: [[], [], []],
      firstData: [],
      secondData: [],
      thirdData: [],
    }
  },
  mounted() {
    this.fetchImages()
  },
  methods: {
      async fetchImages() {
      const res = await fetch('https://pixabay.com/api/?key=21901923-8a8873e126764c75db02c194b&per_page=27&orientation=vertical&image_type=photo&editors_choice=true')
      const data = await res.json()
      const wordsPerLine = Math.ceil(data.hits.length / 3)

      for (let line = 0; line < this.arrayLength; line++) {
        for (let i = 0; i < wordsPerLine; i++) {
          const value = data.hits[i + line * wordsPerLine]
          if (!value) continue //avoid adding "undefined" values
          this.images[line].push(value)
        }
      }

      this.firstData = this.images[0]
      this.secondData = this.images[1]
      this.thirdData = this.images[2]
      console.log(typeof this.images)
      console.log(data.hits)
      console.log(this.images)
      return this.images
    },
  }
}
</script>
