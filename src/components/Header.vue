<template>
  <header>
    <RouterLink to="/" class="elementContainer">
      <img
        :src="nav[0].img"
        :alt="nav[0].name"
        class="logo"
        @click="handleChoseElement(item)"
      />
    </RouterLink>
    <div id="nav">
      <RouterLink
        :to="item.url"
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
      </RouterLink>
    </div>

    <div class="elementContainer" @click="handleOpenModal(nav[nav.length - 1])">
      <img
        :src="nav[nav.length - 1].img"
        :alt="nav[nav.length - 1].name"
        class="logo"
      />
    </div>

    <router-link
      v-if="nav[nav.length - 1].active === true"
      class="avatarBox"
      to="/login"
      @click="handleOpenModal(nav[nav.length - 1])"
      >Login</router-link
    >
  </header>
</template>

<script>
import { navItems } from '@/lib/nav';
import { RouterLink } from 'vue-router';

export default {
  name: 'Header',
  components: { RouterLink },
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
        item[2].active = true;
        item[1].active = true;
      }
      item.active = true;
    },
    handleOpenModal(item) {
      item.active = !item.active;
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

.avatarBox {
  width: 10rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 10px;
  background-color: #161d2f;
  position: absolute;
  bottom: 0;
  right: -12rem;
  font-size: 1.5rem;
  font-weight: semibold;
  color: #fff;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
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

  .avatarBox {
    bottom: -6rem;
    right: 0;
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
