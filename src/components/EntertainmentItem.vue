<template>
  <div class="itemContainer">
    <img :src="img" alt="product img" class="productImg" loading="lazy" />
    <BookmarkButton :isBookmarked="bookmarked" @mark="handleMark" />
    <div class="itemTextContainer">
      <p>
        {{ year }} -
        <span class="category">
          <img
            :src="category === 'Movie' ? movie : series"
            alt="category icon"
            class="categoryIcon"
            loading="lazy"
          />
        </span>
        {{ category }} - {{ rating }}
      </p>
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>
<script>
import movie from '@/assets/icon-category-movie.svg';
import series from '@/assets/icon-category-tv.svg';
import BookmarkButton from '@/components/BookmarkButton.vue';

export default {
  name: 'EntertainmentItem',
  props: ['img', 'title', 'year', 'category', 'rating', 'isBookmarked'],
  components: {
    BookmarkButton
  },
  data() {
    return {
      movie: movie,
      series: series,
      bookmarked: this.isBookmarked
    };
  },
  methods: {
    handleMark() {
      this.bookmarked = !this.bookmarked;
    }
  }
};
</script>
<style>
.itemContainer {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.productImg {
  width: 20rem;
  height: 12rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.2;
  }
}

.itemTextContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

p {
  font-size: 1rem;
  color: hsla(0, 0%, 100%, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 1240px) {
  .productImg {
    width: 15rem;
    height: 10rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      scale: 1.2;
    }
  }
  p {
    font-size: 0.8rem;
  }
  h2 {
    font-size: 1rem;
  }
}

@media (max-width: 921px) {
  .productImg {
    width: 13rem;
    height: 9rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      scale: 1.2;
    }
  }
  p {
    font-size: 0.8rem;
  }
  h2 {
    font-size: 1rem;
  }
}

@media (max-width: 522px) {
  .itemContainer {
    padding: 1rem;
  }
  .productImg {
    width: 15rem;
    height: 10rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      scale: 1.1;
    }
  }
  p {
    font-size: 0.6rem;
  }
  h2 {
    font-size: 0.8rem;
  }
}
</style>
