<template>
  <Trending />
  <Recommended pageName="Recommended for you" query="all" />
</template>
<script>
import Recommended from '@/components/Recommended.vue';
import Trending from '@/components/Trending.vue';

export default {
  name: 'Home',
  components: {
    Recommended,
    Trending
  }
};
</script>
<style></style>
