<template>
  <div class="recommendedContainer">
    <h1>{{ pageName }}</h1>
    <div class="recommendedContentContainer">
      <div v-for="(item, index) in queryData" :key="index">
        <EntertainmentItem
          :img="item.thumbnail.regular"
          :title="item.title"
          :year="item.year"
          :category="item.category"
          :rating="item.rating"
          :isBookmarked="item.isBookmarked"
        />
      </div>
    </div>
  </div>
</template>
<script>
import EntertainmentItem from '@/components/EntertainmentItem.vue';
import { data } from '@/lib/data';

export default {
  name: 'Recommended',
  props: {
    pageName: {
      type: String,
      default: ''
    },
    query: {
      type: String,
      default: ''
    }
  },
  components: {
    EntertainmentItem
  },
  computed: {
    queryData() {
      const q = this.query.toLowerCase();
      return data.filter((item) => {
        // Check for special cases:
        if (q === 'all') return true;
        if (q === 'movie') return item.category === 'Movie';
        if (q === 'series') return item.category === 'TV Series';
        if (q === 'bookmark') return item.isBookmarked;
        // Generic search filtering:
        return (
          item.category.toLowerCase().includes(q) ||
          item.title.toLowerCase().includes(q) ||
          item.year.toString().includes(q) ||
          item.rating.toLowerCase().includes(q)
        );
      });
    }
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

.recommendedContentContainer {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  gap: 2rem;
  overflow-x: auto;
}

@media (max-width: 921px) {
  .recommendedContentContainer {
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }
}
</style>
