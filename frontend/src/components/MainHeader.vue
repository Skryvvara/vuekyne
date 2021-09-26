<template>
<nav id="main-nav">
  <div class="wrapper">
    <div class="nav-bar">
      <div class="left">
        <a class="title" href="https://darkyne.com">Darkyne</a>
      </div>
      <div class="right">
        <button class="nav-menu-button" @click="visible = !visible"><menu-icon></menu-icon></button>
        <ul class="main-nav-list" :class="`main-nav-list-${visible ? 'show' : 'hidden'}`">
          <li class="main-nav-item"><a href="#home" class="main-nav-link">Home</a></li>
          <li class="main-nav-item"><a href="#projects" class="main-nav-link">Work</a></li>
          <li class="main-nav-item"><a href="#about" class="main-nav-link">About</a></li>
          <li class="main-nav-item"><a href="#contact" class="main-nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MenuIcon } from "@heroicons/vue/solid";

export default defineComponent({
	name: "MainNavigation",
  components: {
    MenuIcon
  },
  data() {
    return {
      visible: false
    }
  }
});
</script>

<style scoped lang="scss">
#main-nav {
  height: 4rem;
  background: var(--colour-gray-800);
  position: fixed;
  left: 0;
  right: 0;
  box-shadow: 0 0.15rem 0.15rem rgba(0, 0, 0, .5);
  z-index: 999;

  .nav-menu-button {
    height: fit-content;
    background: var(--colour-gray-900);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    svg {
      height: 48px;
      color: var(--colour-gray-200);
      fill: var(--colour-gray-200);
    }
  }

  .nav-bar {
    height: 100%;
    display: flex;

    .left {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .right {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .title {
    color: var(--colour-gray-100);
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.10ch;
    text-decoration: none;
    transition: color 250ms ease-in-out;

    &:hover {
      color: var(--colour-app-green);
    }
  }

  .main-nav-list {
    height: auto;
    width: fit-content;
    padding: 8px;
    background: var(--colour-gray-900);
    display: flex;
    flex-direction: column;
    list-style: none;
    border-radius: 6px;
    position: absolute;
    top: 90%;
    z-index: 1;

    &.main-nav-list-show {
      display: flex;
    }
    &.main-nav-list-hidden {
      display: none;
    }

    .main-nav-item {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &:not(:last-child)::after {
        content: '';
        margin: 0;
      }
    }

    .main-nav-link {
      min-width: 100px;
      color: var(--colour-gray-50);
      font-size: 1.25rem;
      padding: 4px 4px;
      margin: 2px 0;
      border-radius: 4px;
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        background: var(--colour-gray-600);
      }
    }
  }
}

@media only screen and (min-width: 600px) {
  #main-nav {
    .nav-menu-button {
      display: none;
    }

    .main-nav-list {
      background: transparent;
      flex-direction: row;
      position: static;

      &.main-nav-list-hidden {
        display: flex;
      }

      .main-nav-item {
        &:not(:last-child)::after {
          content: '/';
          color: var(--colour-gray-600);
          margin: 0 8px;
        }
      }

      .main-nav-link {
        min-width: fit-content;
        background: transparent;
        padding: 0;
        margin: 0;

        &:hover {
          color: var(--colour-app-green);
          background: transparent;
        }
      }
    }
  }
}
</style>
