<template>
  <router-view/>
</template>

<script>
import { provide } from "vue"
import store from "@/store"

export default {
  setup() {
    provide('store', store)
  }
}
</script>

<style>
#app {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}
</style>
