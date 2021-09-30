<template>
<nav id="main-nav">
  <div class="wrapper">
    <div class="nav-bar">
      <div class="left">
        <a class="title" href="https://darkyne.com">Darkyne</a>
      </div>
      <div class="right">
        <button class="nav-menu-button" aria-label="Toggle mobile navigation menu" @click="visible = !visible"><menu-icon></menu-icon></button>
        <ul class="main-nav-list" :class="`main-nav-list-${visible ? 'show' : 'hidden'}`">
          <li class="main-nav-item"><a href="#home" class="main-nav-link"><home-icon></home-icon> Home</a></li>
          <li class="main-nav-item"><a href="#projects" class="main-nav-link"><code-icon></code-icon> Work</a></li>
          <li class="main-nav-item"><a href="#about" class="main-nav-link"><information-circle-icon></information-circle-icon> About</a></li>
          <li class="main-nav-item"><a href="#contact" class="main-nav-link"><chat-icon></chat-icon> Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MenuIcon, HomeIcon, CodeIcon, InformationCircleIcon, ChatIcon, } from "@heroicons/vue/solid";

export default defineComponent({
	name: "MainNavigation",
  components: {
    MenuIcon,
    HomeIcon,
    CodeIcon,
    InformationCircleIcon,
    ChatIcon,
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
    background: var(--colour-gray-800);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0.1rem 0.1rem 0.35rem rgba(0, 0, 0, .65);
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
      color: var(--colour-green);
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
    top: 95%;
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
      min-width: 150px;
      color: var(--colour-gray-50);
      font-size: 1.25rem;
      padding: 4px 4px;
      margin: 2px 0;
      border-radius: 4px;
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: all 300ms ease-in-out;

      &:hover {
        background: var(--colour-gray-600);
      }

      svg {
        height: 20px;
        margin-right: 4px;
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
          color: var(--colour-green);
          background: transparent;
        }

        svg { display: none; }
      }
    }
  }
}
</style>
