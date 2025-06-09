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
      ref="searchInput"
      class="searchInput"
      :class="{ active: active }"
    />
  </div>
</template>
<script>
import searchIcon from '@/assets/icon-search.svg';
export default {
  name: 'SearchBar',
  data() {
    return {
      img: searchIcon,
      active: false
    };
  },
  methods: {
    handleClickSearchIcon() {
      console.log('click');
      this.active = !this.active;
      //   if (this.refs.searchInput === null) this.$refs.searchInput.focus();
      // }
    }
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
