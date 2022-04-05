<template>
  <header class="bg-[url('https://picsum.photos/1200/1000?random=3')] bg-cover bg-no-repeat">
    <div class="fixed z-20 w-full">
      <TopNav :pageScrolled="pageScrolled"/>
    </div>

    <div class="w-4/5 md:w-3/4 lg:w-2/5 mx-auto py-32 md:py-44">
      <h1 class="text-white font-bold text-2xl lg:text-4xl leading-10 my-2">
        The best free stock photos, royalty free images & videos shared by creators.
      </h1>

      <Input placeholder="Search for free photos and videos"/>

      <p class="text-white text-sm my-2">
        Suggested: <span class="text-slate-200"> ramadan kareem  islamic  4k  dark  islam  landscape  more </span>
      </p>
    </div>
    
  </header>
</template>

<script>
import TopNav from './TopNav'
import Input from './Input'

export default {
  name: 'Header',
  components: {
    TopNav,
    Input,
  },
  data() {
    return {
      pageScrolled: false,
    }
  },
    // a beforeMount call to add a listener to the window
  beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
      // the function to call when the user scrolls, added as a method
      handleScroll(){
          // when the user scrolls, check the pageYOffset
          if (window.pageYOffset>=120){
              // user is scrolled
             this.pageScrolled = true
          } else {
              // user is at top of page
              this.pageScrolled = false
          }

          return this.pageScrolled
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
