<template>
<div class="mega-menu-container" 
  :class="{'open': isVisible}" 
  @click="toggleMenu" 
  @mouseenter="showMenu" 
  @mouseleave="hideMenu"
  aria-haspopup="true"
  :aria-expanded="isVisible">
  <nuxt-link event="" class="nav-link" :to="localePath(location)">{{ $t(name) }}</nuxt-link>

  <div class="mega-menu">
    <div class="mega-menu-inner">
      <ul class="mega-list">
        <li v-for="item in validItems" :key="item.name" class="mega-item">
          <nuxt-link :to="localePath(item.location)" class="mega-link">
            <div class="mega-icon">
              <div :class="`icon ${item.className}`"></div>
            </div>
            <div class="mega-text">
              <h4>{{ $t(item.name) }}</h4>
              <p>{{ $t(item.description) }}</p>
            </div>
          </nuxt-link>
        </li>

        <li class="mega-item long">
          <nuxt-link :to="localePath(bottomCtaLocation)" class="mega-link">
            <div class="mega-text">
              <h4 class="margin-center">{{ $t(bottomCtaName) }}</h4>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";

interface item {
  name: string,
  description: string,
  location: string,
  className: string
  order?: number
}

export default Vue.extend({
  name: "mega-menu",
    props: {
    name: String,
    location: String,
    items: Array,
    bottomCtaName: String,
    bottomCtaLocation: String
  },
  data() {
    return {
      isVisible: false,
      validItems: [] as item[]
    }
  },
  methods: {
    showMenu() {
      if(this.isMedia()) return;
      this.isVisible = true;
    },
    hideMenu() {
      if(this.isMedia()) return;
      this.isVisible = false;
    },
    toggleMenu() {
      this.isVisible = !this.isVisible;
    },
    isMedia(): boolean {
      return window.matchMedia("only screen and (max-width: 760px)").matches
    }
  },
  mounted() {
    for (const i of this.items) {
      try {
        let validItem = i as item;
        this.validItems.push(validItem);
      } catch(error) {
        console.error(error);
      }
    }
  }
});
</script>

<style scoped lang="scss">
.nav-link {
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  padding: 16px 0;
  margin: 0;
  display: inline-flex;
  position: relative;
  transition: all 200ms ease-in;
}
.nav-link::before {
  height: 20px;
  width: 20px;
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%239595a3' stroke-width='2' d='m5 9 7 7 7-7' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 0 0 no-repeat;
  -webkit-background-size: 20px,20px;
  background-size: 20px,20px;
  content: "";
  margin-top: -8px;
  position: absolute;
  right: 8px;
  top: 50%;
  -webkit-transition: transform .1s ease-in-out;
  transition: transform .1s ease-in-out;
}
.mega-menu-container {
  border-top: 1px solid lightgray;
  width: 100%;
  .mega-menu {
    height: 0;
    visibility: hidden;
    opacity: 0;
    z-index: 5;
  }
  &.open {
    .nav-link::before {
      transform: rotate(180deg);
    }
    .mega-menu {
      height: auto;
      visibility: visible;
      opacity: 1;
      border-top: 1px solid lightgray;
    }
  }
}
.mega-list {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  .mega-item {
    width: 100%;
    transition: all 200ms ease-in;
    &:hover { background-color: #f9f9fa; }
    &.long { width: 100%; grid-column: 1 / span 2; }
  }
}
.mega-link {
  height: 100%;
  width: 100%;
  padding: 16px;
  display: flex;
  text-decoration: none;
}
.mega-text {
  width: 100%;
  h4 {
    width: fit-content;
    word-wrap: break-word;
    border-bottom: 2px solid transparent;
    transition: all 200ms ease-in;
  }
  p {
    font-size: 0.85rem;
    word-wrap: break-word;
    color: #42425a;
  }
}
.margin-center {
  margin: 0 auto;
  text-align: center;
}
.icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: transparent;
  border: 0.25rem solid #dc3545;
  border-radius: 50%;
  margin-right: 0.5rem;
  &.erp { border-color: #794ACF; }
  &.crm { border-color: #3490DC; }
  &.wawi { border-color: teal; }
  &.pps { border-color: #FA7EA8; }
}
@media only screen and (min-width: 760px) {
  .nav-link {
    width: max-content;
    padding: 0;
    margin-right: 16px;
    border-bottom: 2px solid transparent;
  }
  .nav-link::before {
    display: none;
  }
  .mega-menu-container {
    border-top: none;
      .mega-menu {
      position: absolute;
      padding-top: 30px;
      -webkit-transition: opacity 200ms ease-in, visibility 0s ease-in 200ms;
      transition: opacity 200ms ease-in, visibility 0s ease-in 200ms;
      .mega-menu-inner {
        background: #fff;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 16px 24px 2px rgba(29, 17, 51, 0.04), 0 6px 32px 4px rgba(9, 32, 77, 0.12), 0 8px 12px -5px rgba(29, 17, 51, 0.12);
      }
    }
    &.open {
      .nav-link {
        border-bottom: 2px solid #20123a;
      }
      .mega-menu {
        border-top: none;
        visibility: visible;
        opacity: 1;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
      }
      .mega-link:hover h4 {
        border-bottom: 2px solid #20123a;
      }
    }
  }
  .mega-list {
    display: block;
  }
}
@media only screen and (min-width: 1000px) {
  .mega-menu-container {
    .mega-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    
    .mega-item {
      width: 260px;
    }
  }
}
</style>
