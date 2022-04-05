<template>
    <nav class="w-full h-14 bg-white flex justify-center border-b-2 border-slate-200">
        <ul class="h-full flex items-center overflow-auto">
            <li class="h-full mx-1 px-4 border-b-[3px] border-[#0064f9]" :key="link.name" v-for="link in links">
                <router-link class="h-full flex items-center font-semibold text-[17px] text-slate-500 hover:text-[#0064f9]" :to="link.link">
                    {{link.name}}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
      return {
          links: [
              {name: 'Home', link: '/'},
              {name: 'Discover', link: '/discover'},
              {name: 'Videos', link: '#'},
              {name: 'Leaderboard', link: '#'},
              {name: 'Challenges', link: '#'},
          ]
        }
  },
}

</script>