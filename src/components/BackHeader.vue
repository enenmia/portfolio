<!-- components/BackHeader.vue -->
<template>
    <div class="header-container">
        <div class="header-content">
            <div class="back-container" @click="goHome">
                <h2 class="back-text">←</h2>
            </div>
            <div class="nav-container" @click="goToOtherPage">
                <h2 class="nav-text">{{ navText }}</h2>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const goHome = () => {
    router.push('/')
}

const navText = computed(() => {
    if (route.name === 'Projects') {
        return 'Go to Research'
    } else if (route.name === 'Research') {
        return 'Go to Projects'
    }
    return ''
})

const goToOtherPage = () => {
    if (route.name === 'Projects') {
        router.push('/research')
    } else if (route.name === 'Research') {
        router.push('/projects')
    }
}
</script>

<style scoped>
.header-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.2);
    /* Translucent white */
    backdrop-filter: blur(5px);
    /* Create frosted glass effect */
    z-index: 100;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}

.back-container {
    cursor: pointer;
    transition: opacity 0.3s ease;
}

.back-container:hover {
    opacity: 0.7;
}

.nav-container {
    cursor: pointer;
    transition: opacity 0.3s ease;
    margin-right: 10px;
}

.nav-container:hover {
    opacity: 0.7;
}

.back-text {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-text {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 400;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    white-space: nowrap;
}

.back-container:hover .back-text {
    color: white;
}

.nav-container:hover .nav-text {
    color: white;
}
</style>
