<template>
  <header>
    <div class="elementContainer">
      <img :src="nav[0].img" :alt="nav[0].name" class="logo" />
    </div>
    <div id="nav">
      <div
        class="elementContainer"
        v-for="item in nav"
        :key="item.id"
        :class="{ active: item.active }"
        @click="handleChoseElement(item)"
      >
        <img
          v-if="item.id !== 1 && item.id !== nav.length"
          :src="item.img"
          :alt="item.name"
          class="navElement"
        />
      </div>
    </div>

    <div class="elementContainer">
      <img
        :src="nav[nav.length - 1].img"
        :alt="nav[nav.length - 1].name"
        class="logo"
      />
    </div>
  </header>
</template>

<script>
import { navItems } from '@/lib/nav';

export default {
  name: 'Header',
  data() {
    return {
      nav: navItems
    };
  },
  methods: {
    handleChoseElement(item) {
      this.nav.forEach((element) => {
        element.active = false;
      });
      if (item.id === 1) {
        item[1].active = true;
      }
      item.active = true;
    }
  }
};
</script>

<style>
header {
  background: #161d2f;
  color: #fff;
  padding: 2rem 1rem;
  width: 5rem;
  height: 95%;
  position: fixed;
  top: 15px;
  left: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  gap: 2rem;
  transition: all 0.3s ease-in-out;
  z-index: 50;
}

#nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
}

.elementContainer {
  width: auto;
  height: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navElement {
  width: 1.7rem;
  height: 1.7rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.3;
  }
}
.logo {
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.3;
  }
}

.active {
  transition: all 0.3s ease-in-out;
  filter: invert(1);
}

@media (max-width: 921px) {
  header {
    width: 95%;
    height: 5rem;
    left: 17px;
    flex-direction: row;
    gap: 2rem;
  }

  .navElement {
    width: 1.7rem;
    height: 1.7rem;
  }

  #nav {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
}

@media (max-width: 486px) {
  header {
    width: 100%;
    height: 5rem;
    flex-direction: row;
    gap: 0.5rem;
    top: 0;
    left: 0;
    border-radius: 0;
  }

  #nav {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .navElement {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
