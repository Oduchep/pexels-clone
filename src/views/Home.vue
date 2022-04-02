<template>
  <div class="home">
    <h1> I am the home and I have a button </h1>
    <button class="bg-slate-500">
      <router-link to="/about">Link to the About Page</router-link>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
}
</script>
