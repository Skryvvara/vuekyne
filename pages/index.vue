<template>
<div class="main">
  <section class="darker">
    <div class="text">t</div>
  </section>

  <section class="dark">
    <div class="divider">
      <div class="left"></div> 
      <div class="center"></div>
      <div class="right"></div> 
    </div>
    <div class="text">t</div>

    <a href="#" class="exampleClass">custom</a>

    <div class="p">
      <button class="button">
        <div></div>
        <span>Hover over me</span>
      </button>
    </div>
  </section>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style lang="scss">
.text {
  padding: 20px;
}

section {
  position: relative;
}

.container {
  padding: 0 15px;
}

.divider {
  margin: 0 auto;
  position: relative;
  top: -11px;
  z-index: 98;
}

.left,
.right {
  content: '';
  border-top: 11px solid transparent;
  border-bottom: 11px solid transparent;
  width: 2%;
  height: 0;
  position: absolute;
}

.right {
  border-left: 14px solid hsl(197, 6%, 12%);
  right: 0;
}
.left {
  border-right: 14px solid hsl(197, 6%, 12%);
  left: 0;
}
.center {
  background-color: hsl(197, 6%, 12%);
  height: 22px;
  left: 2%;
  width: 96%;
  margin: 0 auto;
  position: absolute;
}

.dark {
  background-color: hsl(197, 6%, 12%);
  height: 800vh;
}
.darker {
  background-color: hsl(197, 8%, 8%);
}

.button {
	position: relative;
	padding: 1px;
	border-radius: 8px;
  display: flex;

	&:hover div {
		transition-duration: 0.25s;
		opacity: 1;
	}

	div {
		filter: blur(1px);
		border-radius: 8px;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		transition: opacity 1.5s ease;
		background: linear-gradient(91.83deg, rgb(208, 60, 74) 2.26%, rgb(172, 74, 218) 95.81%);
		animation: 10s ease-in-out 0s infinite normal both running pulse;
		opacity: 0.75;
	}

	span {
		padding: 12px 24px;
		background-color: white;
		position: relative;
		color: black;
		border-radius: 8px;
		cursor: pointer;
		transition: transform 250ms cubic-bezier(.2,.8,.4,1);
	}
}

@keyframes pulse {
  0% {
    transform:rotate(0deg);
    filter:blur(8px);
    border-radius:5px
  }
  33% {
    transform:rotate(-0.5deg) translate(1px,-1px) scale(1.01);
    filter:blur(10px);
    border-radius:3px
  }
  67% {
    transform:rotate(1deg) translate(-1px,-1px) scale(0.99);
    filter:blur(14px);
    border-radius:7px
  }
  100% {
    transform:rotate(0deg);
    filter:blur(8px);
    border-radius:5px
  }
}

</style>
