<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
// 为每个图片创建独立的悬停状态
const hoverFirstImage = ref(false)
const hoverSecondImage = ref(false)
const hover7paperImage = ref(false)
const hoverSnakeImage = ref(false)
const hoverCCImage = ref(false)
const hoverFingerImage = ref(false)
const hoverHCIImage = ref(false)
const hoverSSIImage = ref(false)
const hoverSignwebImage = ref(false)
const hoverEkeyboardImage = ref(false)
const hoverDataImage = ref(false)
const hoverGameImage = ref(false)
const hoverFingerPaperImage = ref(false)
const hoverCoconutImage = ref(false)
// 控制背景图是否为黑白
const isBackgroundGrayscale = ref(false)

// 确保组件挂载后背景图正确加载
onMounted(() => {
  console.log("组件已挂载，背景图应显示为: /41.png")
})
</script>

<template>
  <Header />
  <!-- 背景图 -->
  <div class="background" :class="{ 'grayscale': isBackgroundGrayscale }"></div>
  <div class="text-container folder-container" :class="{ 'dark-bg': isBackgroundGrayscale }">
    <div class="hover-white">
      <router-link to="/research">
        <img src="/folder.png" class="logo folder-icon" alt="folder" @mouseenter="isBackgroundGrayscale = true"
          @mouseleave="isBackgroundGrayscale = false" />
        <p class="folder-name">Research</p>
      </router-link>
    </div>
    <div class="hover-white">
      <router-link to="/projects">
        <img src="/folder.png" class="logo folder-icon" alt="folder" @mouseenter="isBackgroundGrayscale = true"
          @mouseleave="isBackgroundGrayscale = false" />
        <p class="folder-name">Projects</p>
      </router-link>
    </div>
    <div v-if="!hoverFirstImage && !hoverSecondImage" class="placeholder-text">
      &nbsp;
    </div>
  </div>
  <div class="content">
    <div class="image-scroller">
      <div class="image-track">

      </div>

    </div>

  </div>
  <Footer />
</template>



<style scoped>
.logo {
  height: 2.2em;
  padding: 2.2em;
  will-change: filter;
  /* transition: filter 300ms, transform 300ms; */
  transition: filter 600ms ease, transform 600ms ease;
  /* 添加transform过渡效果 */
  /* 默认状态为黑白 */
  filter: grayscale(100%);
  z-index: 10;
  /* 确保图片在上层 */
  transform: scale(1);
  /* 默认大小 */
}
.folder-name{
  margin-top: -1em;
  color:#42b883aa;
  transition: transform 600ms ease; /* 添加过渡效果 */
}
.folder-name:hover{
  color:white;
}
/* 特别为文件夹图标添加的样式 */
.folder-icon {
  height: 3.5em;
  /* 增大图标基础尺寸 */
  padding: 1em;
  /* 调整内边距 */
  margin: 0 20px;
  /* 两个图标之间的间距 */
  /* transform: scale(1.2); */
  /* 默认就稍微大一点 */
}

.folder-icon:hover {
  transform: scale(1.1);
  /* 悬停时放得更大 */
}

/* 文件夹容器的特殊样式 */
.folder-container {
  display: flex;
}

.logo:hover {
  /* 悬停时变为彩色并添加阴影 - 使用 !important 确保不被背景滤镜覆盖 */
  filter: grayscale(0%) drop-shadow(0 0 2em pink) !important;
  transform: scale(1.1);
  /* 悬停时略微放大 */
}

.logo:hover + .folder-name, 
.folder-name:hover {
  transform: scale(1.3); /* 悬停时文字放大 */
}

.logo.vue:hover {
  /* 悬停时变为彩色并添加阴影 - 使用 !important 确保不被背景滤镜覆盖 */
  filter: grayscale(0%) drop-shadow(0 0 2em #42b883aa) !important;
}

/* 添加router-link样式，确保链接没有默认样式 */
.folder-container a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.thin {
  font-weight: 200;
  font-style: italic;
}

.image-container {
  position: relative;
  /* 确保作为文字的定位父元素 */
  display: inline-block;
  margin: 0px;
  z-index: 10;
  /* 确保图片容器层级正确 */
  border: grey solid 0.5px;
}

/* 基础文字样式 */
.green-text {
  font-size: 12px;
  font-weight: bold;
  margin: 0 auto;
  /* 移除上下边距，因为容器已有内边距 */
  text-align: center;
  width: 80%;
  /* 占据整行 */
  white-space: nowrap;
  animation: fadeIn 0.3s ease-in;
  z-index: 20;
  /* 确保文字在最上层 */
  position: static;
  /* 使用正常文档流定位 */
  /* 默认渐变色 */
  background: linear-gradient(to right, rgb(198, 105, 120), #4bd8b8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(66, 184, 131, 0.5);
  /* 稍微增强发光效果，在深色背景上更明显 */
  white-space: normal;
  word-break: break-word;
  text-align: left;

}

/* Vite图片对应的渐变文字 - 蓝紫色调 */
.vite-text {
  background: linear-gradient(to right, #646cff, #9499ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(100, 108, 255, 0.3);
  overflow-wrap: break-word
}

/* Vue图片对应的渐变文字 - 绿色调 */
.vue-text {
  background: linear-gradient(to right, #42b883, #35495e);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(66, 184, 131, 0.3);
}

.text-container {
  height: 90vh;
  /* 固定高度，防止布局跳动 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 275px; */
  width: 100%;
  padding: 1em;
  /* 添加内边距 */
  border-radius: 8px;
  /* 圆角边框 */
  transition: all 0.3s ease;
  /* 平滑过渡效果 */
}

.folder-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  margin-top: 8em;
  /* 垂直排列文件夹图标 */
}

.folder-icon {
  height: 4em;
  /* 增大文件夹图标大小 */
  width: 4em;
  /* 保持宽高比 */
  margin: 1em 3em 0 3em;
  /* 图标间距 */
}

/* 添加容器来水平排列图片 */
.image-row {
  display: flex;
  justify-content: center;
  flex-direction: row;
  /* 图片水平排列 */
  /* flex-wrap: wrap; */
  /* 允许在小屏幕上换行 */
  /* width: 150%; */
}

.title {
  font-family: "Asset", serif;
  font-weight: 400;
  font-style: normal;
}

.not-italic {
  font-style: normal;
  /* 确保不使用斜体 */
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/42.png');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  z-index: -1;
  transition: filter 0.5s ease;
  filter: grayscale(40%) brightness(0.9) contrast(1.1);
}

.bold {
  font-weight: bold;
  /* 加粗文字 */
}

.background.grayscale {
  /* 增加灰度并添加其他效果 */
  filter: grayscale(300%) brightness(0.4) contrast(1.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
    /* 从稍微上方开始动画 */
  }

  to {
    opacity: 1;
    transform: translateY(0);
    /* 移动到目标位置 */
  }
}


.logo.gray {
  filter: grayscale(100%) brightness(1.2) contrast(0.8) !important;
  opacity: 0.6;
}
.hover-white:hover{
    color: white;
}

.hover-white:hover .folder-name {
    color: white !important;
}
.lightgray-text {
  background: none;
  color: rgba(200, 200, 200, 0.85);
  -webkit-background-clip: unset;
  background-clip: unset;
  text-shadow: none;
}

.logo.gray {
  filter: grayscale(100%) brightness(1.2) contrast(0.8) !important;
  opacity: 0.9;
  box-shadow: 0 0 60px rgba(255, 255, 255, 0.4);
  /* white glow effect */
  transition: box-shadow 0.5s ease;
}

.footer {
  background-color: white;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
