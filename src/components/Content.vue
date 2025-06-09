<template>
  <main>
    <SearchBar v-if="$route.path !== '/login' && $route.path !== '/register'" />
    <RouterView />
  </main>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'Content',
  components: {
    SearchBar,
    RouterView
  }
};
</script>
<style>
main {
  width: 95%;
  height: 100vh;
  margin-left: 6rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 921px) {
  main {
    width: 100%;
    margin-top: 6rem;
    margin-left: 0;
  }
}
@media screen and (max-width: 486px) {
  main {
    margin-top: 4.5rem;
  }
}
</style>
