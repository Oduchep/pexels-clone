<template>
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
</template>

<script>
import Card from "./Card";
export default {
  name: "Masonry",
  props: {
    firstData: Array,
    secondData: Array,
    thirdData: Array,
  },
  components: {
    Card,
  },
};
</script>