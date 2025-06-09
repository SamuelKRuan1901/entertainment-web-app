<template>
  <main>
    <SearchBar />
    <Trending />
    <Recommended />
  </main>
</template>

<script>
import Trending from '@/components/Trending.vue';
import SearchBar from '@/components/SearchBar.vue';
import Recommended from '@/components/Recommended.vue';

export default {
  name: 'Content',
  components: {
    SearchBar,
    Trending,
    Recommended
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
