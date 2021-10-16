<template>
<header class="main-header">
  <base-wrapper class="main-header-container">
    <div class="top-bar">
      <div class="logo">
        <nuxt-link class="brand-logo" :to="localePath('/')">{{ $t("utils.brand-name") }}</nuxt-link>
      </div>
      <button @click="isVisible = !isVisible" 
        class="mobile-menu-toggle" 
        :class="{'open': isVisible}" 
        type="button"
        aria-label="Toggle mobile navigation menu"
        aria-haspopup="true"
        :aria-expanded="isVisible">
        <img height="24" width="24" src="~/assets/img/menu.svg" class="burger" alt="Burger menu icon">
        <img height="24" width="24" src="~/assets/img/close.svg" class="cross" alt="Close icon">
      </button>
    </div>
    <nav class="main-nav" :class="{'open' :isVisible}">
      <mega-menu
        :name="'pages.products'" :location="'/products'"
        :items="products"
        :bottomCtaName="'products.custom.cta'"
        :bottomCtaLocation="'/contact'">
      </mega-menu>

      <mega-menu
        :name="'pages.about'" :location="'/about'"
        :items="products"
        :bottomCtaName="'products.custom.cta'"
        :bottomCtaLocation="'/contact'">
      </mega-menu>

      <mega-menu
        :name="'pages.contact'" :location="'/contact'"
        :items="products"
        :bottomCtaName="'products.custom.cta'"
        :bottomCtaLocation="'/contact'">
      </mega-menu>
    </nav>
  </base-wrapper>
</header>
</template>

<script lang="ts">
import Vue from "vue";
import MegaMenu from './mega-menu.vue';

export default Vue.extend({
  name: "main-header",
  components: { MegaMenu },
  data() {
    return {
      products: [
        { name: 'products.erp.short-name', description: 'products.erp.mega-description', className: 'erp', location: '/products/erp' },
        { name: 'products.pps.short-name', description: 'products.pps.mega-description', className: 'pps', location: '/products/pps' },
        { name: 'products.wawi.short-name', description: 'products.wawi.mega-description', className: 'wawi', location: '/products/wawi' },
        { name: 'products.crm.short-name', description: 'products.crm.mega-description', className: 'crm', location: '/products/crm' }
      ],
      isVisible: false
    }
  }
});
</script>

<style scoped lang="scss">
.main-header {
  width: 100%;
  background: #fff;
  box-shadow: 0 0 1px 1px rgba(29, 17, 51, 0.04), 0 0 3px 2px rgba(9, 32, 77, 0.12), 0 0 2px -3px rgba(29, 17, 51, 0.12);
  position: sticky;
  top: 0;
  left: 0;
}
.main-header-container {
  display: block;
}
.mobile-menu-toggle {
  content: ' ';
  height: 42px;
  width: 42px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: all 300ms;
  .burger { display: block }
  .cross { display: none }
  &.open {
    .burger { display: none }
    .cross { display: block }
  }
}
.mobile-menu-toggle:hover {
  background: #ededf0;
}
.top-bar {
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-nav {
  display: none;
  &.open { display: block; }
}
.brand-logo {
  height: 100%;
  width: 100%;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  position: relative;
  border-bottom: 2px solid transparent;
  z-index: 2;
}
.logo {
  position: relative;
  padding: 8px 16px;
  margin-right: 16px;
}
.logo::after {
  content: '';
  color: transparent;
  background: #191919;
  transform: skewX(-10deg);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
@media only screen and (min-width: 760px) {
  .main-header-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .mobile-menu-toggle {
    display: none;
  }
  .main-nav {
    display: flex;
    
    &.open { display: flex; }
  }
}
</style>
