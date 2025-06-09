<template>
  <div class="trendingContainer">
    <h1>Trending</h1>
    <div class="contentContainer">
      <div v-for="item in trending" :key="item.id" class="imgContainer">
        <img
          :src="item.thumbnail.trending"
          :alt="item.title"
          class="trendingImg"
          loading="lazy"
        />
        <BookmarkButton
          :isBookmarked="item.isBookmarked"
          @mark="handleMark(item)"
        />
        <div class="textContainer">
          <p>
            {{ item.year }} -
            <span class="category"
              ><img
                :src="item.category === 'Movie' ? movie : series"
                alt="category"
                class="categoryIcon"
                loading="lazy"
            /></span>
            {{ item.category }} - {{ item.rating }}
          </p>
          <h2>{{ item.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { data } from '@/lib/data';
import movie from '@/assets/icon-category-movie.svg';
import series from '@/assets/icon-category-tv.svg';
import BookmarkButton from '@/components/BookmarkButton.vue';

export default {
  name: 'Trending',
  components: {
    BookmarkButton
  },
  data() {
    return {
      trending: data.filter((item) => item.isTrending === true),
      movie: movie,
      series: series
    };
  },
  methods: {
    handleMark(item) {
      item.isBookmarked = !item.isBookmarked;
    }
  }
};
</script>

<style>
.trendingContainer {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
}

h1 {
  font-size: 2rem;
}

.contentContainer {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 3rem;
  overflow-x: auto;
  padding: 2rem;
}

.trendingImg {
  width: 30rem;
  height: 15rem;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.2;
  }
}

.imgContainer {
  min-width: 30rem;
  min-height: 15rem;
  position: relative;
}
.textContainer {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
  z-index: 5;
}

.category {
  display: flex;
  justify-content: center;
  align-items: center;
}

.categoryIcon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.2rem;
}

@media (max-width: 486px) {
  .contentContainer {
    height: auto;
    gap: 2rem;
  }
  h1 {
    font-size: 1.5rem;
  }
  .imgContainer {
    min-width: 20rem;
    min-height: 10rem;
  }
  .trendingImg {
    width: 20rem;
    height: auto;
  }
}
</style>
