<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';

export default {
  name: 'App',
  components: {
    Header,
    Content
  }
};
</script>

<template>
  <Header v-if="$route.path !== '/login' && $route.path !== '/register'" />
  <Content />
</template>

<style></style>
