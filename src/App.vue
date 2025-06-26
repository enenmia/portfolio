<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

// 为每个图片创建独立的悬停状态
const hoverFirstImage = ref(false)
const hoverSecondImage = ref(false)
// 控制背景图是否为黑白
const isBackgroundGrayscale = ref(false)

// 确保组件挂载后背景图正确加载
onMounted(() => {
  console.log("组件已挂载，背景图应显示为: /42.png")
})
</script>

<template>
  <!-- 背景图 -->
  <div class="background" :class="{ 'grayscale': isBackgroundGrayscale }"></div>
  <div class="text-container" :class="{ 'dark-bg': isBackgroundGrayscale }">
    <div v-if="hoverFirstImage" class="green-text vite-text">
      A mushroom is a fungi that grows above ground, it comes in a variety of sizes, shapes and colors. Some of them are
      consumable and some are poisonous for humans, the distinction is hard for humans to make. <br><br>In this relation, we
      thought the mushroom would be a great allegory for toxic characteristics and personality found in humans. In this
      immersive installation, we invite you to position yourself in a direct, intimate communication with our creature—a
      dialogue that at first glance seems inviting and warm. Yet, as you unravel the layers of this metaphorical
      journey, its true nature is revealed. <br><br>As you step into dialogue with Mushi, our little peculiar entity, be
      prepared to venture beyond the surface, to delve into the complexities that lie beneath. The appearance might not
      be what it seems! Like mushrooms that conceal their toxicity until provoked, this being reveals layers of
      intricacy, challenging preconceptions and inviting contemplation. <br><br>In this space of exploration, we confront the
      subtleties of toxicity— such as narcissistic behavior, and manipulation. Here we explore the interplay of
      vulnerability and strength, of power dynamics and manipulation in human connections.
    </div>
    <div v-if="hoverSecondImage" class="green-text vue-text">
      Together created with Jiaxin Zhang and Bart Han, this project explored the dynamic relationship between individual and collective perspectives. We developed an interactive installation where a camera tracked the viewer's eye gaze as they read projected text, causing the text to blur. This blurred text was then processed by GPT to generate new sentences, which viewers could print if they liked them. The project was exhibited at V2_, Lab for the Unstable Media 
    </div>
    <!-- 当没有悬停时显示占位符，保持布局稳定 -->
    <div v-if="!hoverFirstImage && !hoverSecondImage" class="placeholder-text">
      &nbsp;
    </div>
  </div>
  <div class="content">

    <!-- 图片行 -->
    <div class="image-row">
      <div class="image-container">
        <!-- <a href="https://vite.dev" target="_blank"> -->
        <img src="/image.png" class="logo" alt="Vite logo"
          @mouseenter="hoverFirstImage = true; isBackgroundGrayscale = true"
          @mouseleave="hoverFirstImage = false; isBackgroundGrayscale = false" />
        <!-- </a> -->
      </div>

      <div class="image-container">
        <!-- <a href="https://vuejs.org/" target="_blank"> -->
        <img src="/image2.png" class="logo vue" alt="Vue logo"
          @mouseenter="hoverSecondImage = true; isBackgroundGrayscale = true"
          @mouseleave="hoverSecondImage = false; isBackgroundGrayscale = false" />
        <!-- </a> -->
      </div>
    </div>

    <!-- 文字行 - 单独区域显示当前悬停图片的文字 -->

  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms, transform 300ms;
  /* 添加transform过渡效果 */
  /* 默认状态为黑白 */
  filter: grayscale(100%);
  z-index: 10;
  /* 确保图片在上层 */
  transform: scale(1);
  /* 默认大小 */
}

.logo:hover {
  /* 悬停时变为彩色并添加阴影 - 使用 !important 确保不被背景滤镜覆盖 */
  filter: grayscale(0%) drop-shadow(0 0 2em #646cffaa) !important;
  transform: scale(1.05);
  /* 悬停时略微放大 */
}

.logo.vue:hover {
  /* 悬停时变为彩色并添加阴影 - 使用 !important 确保不被背景滤镜覆盖 */
  filter: grayscale(0%) drop-shadow(0 0 2em #42b883aa) !important;
}

.image-container {
  position: relative;
  /* 确保作为文字的定位父元素 */
  display: inline-block;
  margin: 10px;
  z-index: 10;
  /* 确保图片容器层级正确 */
}

/* 基础文字样式 */
.green-text {
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto;
  /* 移除上下边距，因为容器已有内边距 */
  text-align: center;
  width: 100%;
  /* 占据整行 */
  white-space: nowrap;
  animation: fadeIn 0.3s ease-in;
  z-index: 20;
  /* 确保文字在最上层 */
  position: static;
  /* 使用正常文档流定位 */
  /* 默认渐变色 */
  background: linear-gradient(to right, #42b883, #646cff);
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
  height: 40px;
  /* 固定高度，防止布局跳动 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  width: 100%;
  padding: 10px 20px;
  /* 添加内边距 */
  border-radius: 8px;
  /* 圆角边框 */
  transition: all 0.3s ease;
  /* 平滑过渡效果 */
}


.placeholder-text {
  height: 18px;
  /* 与文字高度一致 */
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  flex-direction: column;
  /* 改为列布局，让文字可以自然地出现在图片下方 */
  padding: 2rem;
}

/* 添加容器来水平排列图片 */
.image-row {
  display: flex;
  justify-content: center;
  flex-direction: row;
  /* 图片水平排列 */
  flex-wrap: wrap;
  /* 允许在小屏幕上换行 */
  width: 100%;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 110%;
  height: 100%;
  background-image: url('/53.png');
  /* 使用42.png作为背景图片 */
  background-size: cover;
  background-position: right center;
  /* 左侧对齐 */
  background-repeat: no-repeat;
  z-index: -1;
  transition: filter 0.5s ease;
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
</style>
