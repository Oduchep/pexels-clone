<template>
    <nav :class="pageScrolled ? 'bg-[#232A34]' : 'bg-transparent'" class="fixed w-full px-6 py-3 flex items-center justify-between">
      <router-link class="flex items-center text-white hover:text-gray-200" to="/">
        <svg class="rounded-lg" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 32 32">
          <path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="#05A081"></path>
          <path d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z" fill="#fff"></path>
        </svg>

        <p class="hidden lg:block ml-3 text-lg font-bold"> Pexels </p>
      </router-link>

      <div :class="pageScrolled ? 'block w-9/12 lg:w-1/2' : 'hidden'">
        <Input placeholder="Search for free photos"/>
      </div>

      <div class="flex">
        <ul class="hidden lg:flex items-center">
            <li class="mx-3 text-lg text-white hover:text-gray-200"> Explore </li>
            <li class="mx-3 text-lg text-white hover:text-gray-200"> Licence </li>
            <li class="mx-3 text-lg text-white hover:text-gray-200"> Upload </li>
        </ul>
        
        <button class="hidden mx-5 md:block text-lg text-white">
            <i class="fa-solid fa-ellipsis"></i>
        </button>

        <button class="hidden mx-2 md:block px-8 py-2 rounded font-semibold text-base text-white hover:text-gray-200 bg-btn-green"> Join </button>

        <button class="md:hidden text-lg text-white">
            <i class="fa-solid fa-bars"></i>
        </button>
      </div>      
    </nav>
</template>

<script>
import Input from './Input'
export default {
  name: 'TopNav',
  components: {
    Input,
  },
  data() {
      return {
          pageScrolled: false
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
          if(window.pageYOffset>=120){
              // user is scrolled
             this.pageScrolled = true
          }else{
              // user is at top of page
              this.pageScrolled = false
          }
      }
  }
}
</script>