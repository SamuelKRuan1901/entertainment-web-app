<template>
  <div class="recommendedContainer">
    <h1>Recommended for you</h1>
    <div v-for="item in data" :key="index">
      <EntertainmentItem
        img="item.thumbnail.regular"
        title="item.title"
        year="item.year"
        category="item.category"
        rating="item.rating"
      />
    </div>
  </div>
</template>
<script>
import EntertainmentItem from '@/components/EntertainmentItem.vue';
import { data } from '@/lib/data';

export default {
  name: 'Recommended',
  components: {
    EntertainmentItem
  },
  data() {
    return {
      recommended: data
    };
  }
};
</script>
<style>
.recommendedContainer {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
}
</style>
