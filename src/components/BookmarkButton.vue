<template>
  <div class="bookmarkContainer" @click="toggleBookmark">
    <img
      :src="isBookmarked ? bookmarkFull : bookmarkEmpty"
      alt="bookmark"
      class="bookmarkIcon"
    />
  </div>
</template>
<script>
import bookmarkFull from '../assets/icon-bookmark-full.svg';
import bookmarkEmpty from '../assets/icon-bookmark-empty.svg';

export default {
  name: 'BookmarkButton',
  props: ['isBookmarked'],
  data() {
    return {
      bookmarkFull: bookmarkFull,
      bookmarkEmpty: bookmarkEmpty
    };
  },
  methods: {
    toggleBookmark() {
      this.$emit('mark');
    }
  }
};
</script>
<style>
.bookmarkContainer {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: auto;
  height: auto;
  padding: 1rem;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 3%, 26%, 0.374);
  z-index: 5;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.2;
  }
}
.bookmarkIcon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
