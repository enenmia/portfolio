<!-- components/Footer.vue -->
<template>
  <div class="footer-outer">
    <div class="footer-inner">
      <div class="footer-content">
        <!-- <div class="gap-2">
          <i class="pi pi-linkedin" style="color: grey"></i>
          <i class="pi pi-github" style="color: grey"></i>
        </div> -->
        <p :class="{ typing: isTypingActive }" ref="typingRef">Be playful.</p>
        <p>© 2025 Huien Tan 谭惠恩</p>
        <div class="flex">
          <div class="flex">
            <i class="pi pi-map-marker"></i>
            <p>Guangzhou & Amsterdam</p>
          </div>
          <a href="https://www.linkedin.com/in/huien-tan/" style="color:#3e7a8c" class="flex" target="_blank">
            <i class="pi pi-linkedin" style="color:#3e7a8c"></i>
            <p>LinkedIn</p>
          </a>
          <a href="https://github.com/enenmia" style="color:#3e7a8c" class="flex" target="_blank">
            <i class="pi pi-github" style="color:#3e7a8c"></i>
            <p>Github</p>
          </a>
          <a href="https://www.instagram.com/hui__en__?igsh=Yjd3Z3RvejY0djB0" class="flex" style="color:#3e7a8c" target="_blank">
            <i class="pi pi-instagram" style="color:#3e7a8c"></i>
            <p>Instagram</p>
          </a>
        </div>

        <!-- <p class="typing">Be playful.</p> -->

        <!-- <p ref="typingRef">
          <span v-if="isTypingActive" class="typing">Be playful.</span>
        </p> -->



      </div>

    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.footer-outer {
  position: relative;
  height: 800px;
  clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 100%);
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}

.footer-inner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 800px;
  width: 100%;
  background-color: #f8f4f4;
  /* 可自定义颜色或渐变 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  /* 可自定义文字颜色 */
  font-size: 0.7rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
}

.footer-content {
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
}

.typing {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid black;
  /* 光标效果 */
  width: 0;
  animation: typing 3s steps(10, end) forwards, blink 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 9ch;
    /* 文字长度，一定要和字符数量匹配 */
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
<script setup>
import { ref, onMounted } from 'vue'

const isTypingActive = ref(false)
const typingRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isTypingActive.value = true
        observer.disconnect() // 只触发一次
      }
    },
    {
      threshold: 0.5, // 元素一半出现在视口中就触发
    }
  )

  if (typingRef.value) {
    observer.observe(typingRef.value)
  }
})
</script>