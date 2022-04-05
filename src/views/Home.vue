<template>
    <Header/>
    <MainNav/>
    <main class="px-4">
      <div class="flex justify-between flex-wrap">
        <Card :key="image.id" v-for="image in images.hits" :src="image.webformatURL" :user="image.user" :userSrc="image.userImageURL"/>
      </div>
      
  </main>
</template>

<script>
import Header from '../components/Header'
import MainNav from '../components/MainNav'
import Card from '../components/Card'

export default {
  name: 'Home',
  components: {
    Header,
    MainNav,
    Card,
  },
  data() {
    return {
      images: []
    }
  },
  mounted() {
    this.fetchImages()
  },
  methods: {
      async fetchImages() {
      const res = await fetch('https://pixabay.com/api/?key=21901923-8a8873e126764c75db02c194b&per_page=12&orientation=vertical&image_type=photo&editors_choice=true')
      const data = await res.json()
      this.images = data
      console.log(this.images)
      console.log({...this.images.hits})
      return this.images
    },
  }
}
</script>
