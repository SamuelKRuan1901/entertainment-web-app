<template>
  <div class="itemContainer">
    <img :src="img" alt="product img" class="productImg" />
    <div>
      <h2>{{ title }}</h2>
      <p>
        {{ item.year }} -
        <span class="category"
          ><img
            :src="item.category === 'Movie' ? movie : series"
            alt="category"
            class="categoryIcon"
        /></span>
        {{ item.category }} - {{ item.rating }}
      </p>
    </div>
  </div>
</template>
<script>
import movie from '@/assets/icon-category-movie.svg';
import series from '@/assets/icon-category-tv.svg';

export default {
  name: 'EntertainmentItem',
  props: ['img', 'title', 'year', 'category', 'rating'],
  data() {
    return {
      movie: movie,
      series: series
    };
  }
};
</script>
<style>
.itemContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
}

.productImg {
  width: 5rem;
  height: 5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.2;
  }
}
</style>
