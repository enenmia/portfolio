<!-- components/Header.vue -->
<template>
    <div class="header-container">
        <div class="header-content">
            <div class="name-container" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
                <h2 class="name">Huien's Workspace</h2>
                <div class="bio-tooltip" v-show="showBio" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
                    <p>I am a software developer working in creative field. With a passion for language, arts and tech
                        for good, I have worked with various projects stretching their limits. I am graduating
                        from Leiden University, MSc in Creative Intelligence and Technology (Old name: Media
                        Technology). Feel free to contact me if you also want to do fun projects about language, coding and aesthetics. <a href="/CV.pdf" class="cv-link">Check my CV here</a>.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showBio = ref(false);
let hideTimer = null;

function handleMouseOver() {
  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }
  showBio.value = true;
}

function handleMouseLeave() {
  hideTimer = setTimeout(() => {
    showBio.value = false;
  }, 200);
}
</script>

<style scoped>
template {
    z-index: 1;
}

.header-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-color: rgba(255, 255, 255, 0.7);
    /* Translucent white */
    backdrop-filter: blur(5px);
    /* Create frosted glass effect */
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
    justify-content: center;
    /* Changed from flex-end to center */
}

.name-container {
    position: relative;
    cursor: pointer;
}

.name {
    font-family: "Montserrat", sans-serif;
    color: #9eafab;
    font-weight: 300;
    font-size: 1.3rem;
    margin: 0;
    transition: color 0.3s ease;
}

.name-container:hover .name {
    color: #c8dbd7;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    /* Translucent white */
    backdrop-filter: blur(10px);
    border-radius: 4px;
    padding: 0.5rem 0;
    min-width: 120px;
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

.bio-tooltip {
    position: absolute;
    top: 120%;
    left: 60%;
    transform: translateX(20px);
    width: 210px;
    background-color: rgba(255, 255, 255, 0.95);
    /* backdrop-filter: blur(10px);  */
    /* border-radius: 8px; */
    padding: 18px;
    /* box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); */
    z-index: 200;
    font-size: 0.7rem;
    line-height: 1.6;
    color: #333;
    text-align: left;
    animation: fadeIn 0.3s ease;
}

.bio-tooltip p {
    margin: 0;
}

.cv-link {
    color: #3e7a8c;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
}

.cv-link:hover {
    color: #23464f;
    text-decoration: underline;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateX(20px) translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateX(20px) translateY(0);
    }
}
</style>