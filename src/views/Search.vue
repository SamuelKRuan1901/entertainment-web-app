<template>
  <Recommended pageName="Search" :query="$route.query.query" />
</template>
<script>
import Recommended from '@/components/Recommended.vue';

export default {
  name: 'Search',
  components: {
    Recommended
  }
};
</script>
<style></style>
