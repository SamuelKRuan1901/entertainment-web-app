<template>
  <div class="searchBarContainer">
    <img
      v-bind:src="img"
      alt="searchIcon"
      class="searchIcon"
      @click="handleClickSearchIcon"
    />
    <input
      type="search"
      placeholder="Search for movies or TV series"
      class="searchInput"
      :class="{ active: active }"
      v-model="searchText"
    />
  </div>
</template>
<script>
import searchIcon from '@/assets/icon-search.svg';
import { debounce } from '@/utils/debounce';

export default {
  name: 'SearchBar',

  data() {
    return {
      img: searchIcon,
      active: false,
      searchText: ''
    };
  },
  watch: {
    searchText(newVal) {
      // Debounce the route update to reduce the number of router calls,
      // especially if filtering data is expensive.
      this.debouncedUpdateSearch();
    }
  },
  methods: {
    handleClickSearchIcon() {
      this.active = !this.active;
    },
    updateSearch() {
      // Use replace instead of push to avoid piling up browser history.
      this.$router.replace({
        path: '/search',
        query: { query: this.searchText }
      });
    },
    // Wrap updateSearch with a debounce so the route is only updated after the user
    // pauses typing for 300ms. You can adjust the delay as needed.
    debouncedUpdateSearch: debounce(function () {
      this.updateSearch();
    }, 300)
  }
};
</script>
<style>
.searchBarContainer {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: start;
  align-items: center;
}

.searchIcon {
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.2;
  }
}
.searchInput {
  width: 50%;
  height: 3rem;
  border: none;
  border-radius: 5px;
  margin-left: 1rem;
  padding-left: 1rem;
  font-size: 1.2rem;
  background-color: #161d2f;
  color: #ffff;
  transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 921px) {
  .searchInput {
    width: 100%;
  }
}
</style>
