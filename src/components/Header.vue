<!-- components/Header.vue -->
<template>
  <div class="header-container">
    <div class="header-content">
      <div class="name-container" @mouseover="showNavigation = true" @mouseleave="showNavigation = false">
        <h2 class="name">Huien's Portfolio</h2>
        <div class="dropdown-menu" :class="{ 'show': showNavigation }">
          <div class="menu-item">About me</div>
          <div class="menu-item">Contact</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showNavigation = ref(false);
</script>

<style scoped>
template{
    z-index: 1;
}
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2); /* Translucent white */
  backdrop-filter: blur(5px); /* Create frosted glass effect */
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;
}

.header-content {
  width: 100%;
  display: flex;
  /* flex:auto; */
  justify-content: center; /* Changed from flex-end to center */
}

.name-container {
  position: relative;
  cursor: pointer;
}

.name {
  color: #b8cdc8;
  font-weight: 200;
  font-size: 1.5rem;
  margin: 0;
  transition: color 0.3s ease;
}

.name-container:hover .name {
  color: white;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8); /* Translucent white */
  backdrop-filter: blur(10px);
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 150px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(10px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.menu-item {
  color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 300;
  transition: all 0.2s ease;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
}
</style>