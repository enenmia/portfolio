<script setup>
import { ref, onMounted } from 'vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
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
  <div class="text-container" :class="{ 'dark-bg': isBackgroundGrayscale }">
    <div v-if="hover7paperImage" class="green-text green-text">
      <h2 class="title">Can people’s experience in the virtual world influence their self-evaluations in reality?</h2>
      <p class="thin"><span class="bold">#</span>Research <span class="bold">#</span>Course: Research Fundamentals</p>
      <p class="thin">[2023 September]</p>
      In course Research Fundamentals, I researched about if vitual experience can influence people's self-evalutaion.
      The
      answer is yes, it can influence, but in a limited way. It also covers the factors that determine the effects.
      <br><br>Interestingly, I didn’t realize it at the time, but my Master thesis ended up revolving around the very
      same
      theme. Looking back, it feels like a beautiful full-circle moment that quietly connected the beginning and the end
      of my two-year research journey.
    </div>
    <div v-if="hoverSnakeImage" class="green-text lightgray-text">
      <h2 class="title">Calm me down</h2>
      <p class="thin"><span class="bold">#</span>Arduino & Python <span class="bold">#</span>Course: Hardware & Physical
        Computing</p>
      <p class="thin">[2023 September, with Amber & Josie & Tijmen]</p>
      A snake game was created where the speed of the snake was dependent on the heart rate. This creates a game which
      gets more challenging dependent on excitement and stress. The idea was for one person to play the snake game,
      while a second person wore the heart rate monitor and to answer quiz questions. They then had to keep calm in
      order for the game to be as easy as possible for the first player.<br><br>
      In short, the calmer you are, the slower the snake moves.
    </div>
    <div v-if="hoverHCIImage" class="green-text lightgray-text">
      <h2 class="title">Symnese</h2>
      <p class="thin"><span class="bold">#</span>Javascript <span class="bold">#</span>Research <span
          class="bold">#</span>Course: Human Computer
        Interaction & Information Visualisation</p>
      <p class="thin">[2023 December]</p>
      Creating your own Chinese character can help you remember the way it actually looks!<br><br>
      As the traditional methods (repeating and deconstructing) of character learning
      both have unignorable drawbacks such as lack of fun or not intuitive enough, we
      aim to improve the memorizing issue of character. Transitioning from rote character memorization to diverse
      memorization strategies reveals another way out.<br><br>
      This technique, common in recall, is rarely applied in character memorization.
      The method is called integrate subjectivity into memorizing process[8]. To
      specify the term, integrating subjectivity can be understood as finding personal
      connections between language learners and the language. This technique suggests
      that stressing the learner’s own ideas could add benefit to their learning journey.
      With this in mind, we decide to integrate subjectivity in the learning process
      with Symnese.<br><br>
      In order to provide a possible solution to this problem, Symnese, a webbased character learning tool, was created.
      It aimed to discover whether people
      can learn characters more efficiently when trying to figure out the symbolic
      relationship between character and the real counterpart they represent. This is
      done using a two phase process. In phase one, the user gets to create their own
      character using the real Chinese components. Whereas in the second phase they
      evaluate on this process.
    </div>
    <div v-if="hoverCCImage" class="green-text lightgray-text">
      <h2 class="title">Feel your hair</h2>
      <p class="thin"><span class="bold">#</span>Processing <span class="bold">#</span>Course: Creative Programming</p>
      <p class="thin">[2024 January]</p>
      Interactive program that intends to change the way we interact with our body hair, turning the often awkward
      conversation about body hair into a playful and artistic experience.I set out to create a tool that changes how we
      interact with body hair, turning the often awkward conversation about body hair into a playful and artistic
      experience. With four modes - Pat, Care, Trim, and Dye - users can engage with virtual hair in different ways.
      <br><br>
      Pat Mode:
      In this mode, users interact with their hair using their hands in front of the webcam. The video detects hand
      movements, and the virtual hair reacts as if it's being gently touched. This mode is designed to mimic the
      comforting feeling of running fingers through hair, with each stroke making the hair to sway and move softly.
      <br><br>
      Care Mode:
      Here, the interaction shifts to the use of the mouse. Users can care for their hair by clicking and dragging the
      mouse over the hair, after which the hair will have less splits in its end. This mode resembles the effect of
      applying oil or conditioner.
      <br><br>
      Trim Mode:
      Trim Mode brings the feeling of cutting and grooming. Users use their hand movements, captured through the webcam,
      to simulate trimming the hair. When the hair is touched by hand, it drops as if being cut.
      <br><br>
      Dye Mode:
      Dye Mode is a playful exploration of color. Users select a dye color by holding a colored object close to the
      webcam. The tool then captures this color. As the user moves the mouse over the hair, it changes to the selected
      color, mimicking the process of dyeing hair.
    </div>
    <div v-if="hoverFirstImage" class="green-text lightgray-text">
      <h2 class="title">MUSHI</h2>
      <p class="thin"><span class="bold">#</span>Arduino & Python <span class="bold">#</span>Course: Artificial
        Creatures</p>
      <p class="thin">[2024 April, with Carita]</p>
      We have created an artificial creature called Mushi that explores the notions of toxicity.<br><br>

      We started out with the idea of power relations and feminism for our project, in essence, we wanted to explore
      this quality in humans, how power structures are formed. As we delved further into the research, we noticed
      patterns of toxic behavior as a recurring theme. This took us to explore this as a type of power structure.
      How toxic behavior presents itself, such as through narcissism and manipulation.<br><br>

      We thought of a creature that could embody this characteristic, where you're not able to distinguish this quality
      from the outside but it comes across as you get to know it better. This is where we arrived at the mushroom.<br><br>

      A mushroom is a fungi that grows above ground, it comes in a variety of sizes, shapes and colors. Some of them are
      consumable and some are poisonous for humans, the distinction is hard for humans to make. In this relation, we
      thought the mushroom would be a great allegory for toxic characteristics and personality found in humans.

      <br><br> In this immersive installation, we invite you to position yourself in a direct, intimate communication with our creature—a
      dialogue that at first glance seems inviting and warm. Yet, as you unravel the layers of this metaphorical
      journey, its true nature is revealed.
    </div>
    <div v-if="hoverSSIImage" class="green-text lightgray-text">
      <h2 class="title">Purifier: The Power of Breath</h2>
      <p class="thin"><span class="bold">#</span>Plug Data <span class="bold">#</span>Course: Sound Space & Interaction
      </p>
      <p class="thin">[2024 April]</p>
      Developed using Plug Data, purifier allows users to push a star button to clear away noise. The message behind
      this project is that everyone has the ability to filter out external opinions and keep a small, pure space in
      their heart.
    </div>
    <div v-if="hoverFingerImage" class="green-text lightgray-text">
      <h2 class="title">FingedIn</h2>
      <p class="thin"><span class="bold">#</span>Javascript
        <span class="bold">#</span>Course:
        Creative & Playful Science
      </p>
      <p class="thin">[2024 May]</p>
      A fake LinkedIn website to showcase the scientific results of finger's strength.
    </div>
    <div v-if="hoverSecondImage" class="green-text lightgray-text">
      <h2 class="title">Point of View</h2>
      <p class="thin"><span class="bold">#</span>Javascript & Node.js & Arduino <span class="bold">#</span>Exihibition
        <span class="bold">#</span>Course:
        Science to Experience
      </p>
      <p class="thin">[2024 June, with Bart & Josie]</p>
      This project explored the dynamic relationship between individual
      and collective perspectives. We developed an interactive installation where a camera tracked the viewer's eye gaze
      as they read projected text, causing the text to blur. This blurred text was then processed by GPT to generate new
      sentences, which viewers could print if they liked them. The project was exhibited at V2_, Lab for the Unstable
      Media
    </div>
    <div v-if="hoverGameImage" class="green-text lightgray-text">
      <h2 class="title">The Quest of Truth</h2>
      <p class="thin"><span class="bold">#</span>Bitsy <span class="bold">#</span>Game
        <span class="bold">#</span>Course:
        Sciences & Humanities
      </p>
      <p class="thin">[2024 June]</p>
      The game tells the story of a little girl holding a pearl, searching for the moon—a metaphor for scientists
      seeking
      truth through theory. Along her journey, she meets four prophets, each representing a different historical view of
      science (from objectivism to subjectivism). I’m especially happy with the romantic ending I crafted for this
      little exploration game.
    </div>
    <div v-if="hoverSignwebImage" class="green-text lightgray-text">
      <h2 class="title">Signweb</h2>
      <p class="thin"><span class="bold">#</span>Flask & HTML & CSS & Javascript <span class="bold">#</span>Course:
        Software Engineering</p>
      <p class="thin">[2024 July, with Amy, Imke, Joris, Niels & Thomas]</p>
      In order to research American Sign Language (ASL) it is beneficial to be able to quickly search various keywords
      or phrases and see it being spoken. This product is an improvement upon a design that was first made by another
      student. Providing more privacy by introducing a login page, an improved and more modern user interface, and
      lenient searching making sure more relevant results are shown. This product has been dockerized in order to easily
      host the website on a server. Several smaller features are also included such as being able to download captions,
      the video itself, or the movements from the speaker which can be useful in researching ASL.<br><br>
      This was a significant collaborative project organized by LUDev. Our team of six worked together to upgrade a sign
      language resource database. I focused primarily on the front-end design and development.
    </div>
    <div v-if="hoverDataImage" class="green-text">
      <h2 class="title">The ethical challenge of using healthcare data for patients with mental health issues</h2>
      <p class="thin"><span class="bold">#</span>Research <span class="bold">#</span>Course: Data Driven Policy Making
      </p>
      <p class="thin">[2025 January]</p>
      This paper focuses on the ethical challenge of using healthcare data for patients with mental health issues.
      With the help of principal-agent theory, the essay analyzes how a data breach case can be interpreted using this
      framework: first, it reviews the development of the theory; next, it introduces the Vastaamo case, and examines
      how it supports the theory in some aspects and challenges it in others; finally, it proposes potential technical
      solutions in order to try solving the most critical issues stressed by this case.
    </div>
    <div v-if="hoverCompanionImage" class="green-text lightgray-text">
      <h2 class="title">New Workflow for Buying AI Companion Online</h2>
      <p class="thin"><span class="bold">#</span>Figma <span class="bold">#</span>Course: AI in Society</p>
      <p class="thin">[2025 January]</p>
      I imagined a future process of buying AI products, where we live in a time filled with a wide
      variety of AI products. In this future, people can easily choose AI companion products for the
      elderly, just like shopping on Amazon. The process stresses the factors we now ignore such as respecting the
      elderly's autonomy, and ensuring transparency and explanability.
    </div>
    <div v-if="hoverEkeyboardImage" class="green-text lightgray-text">
      <h2 class="title">Feminist Chinese Input Method</h2>
      <p class="thin"><span class="bold">#</span>Rime & Font Creator <span class="bold">#</span>Thesis</p>
      <p class="thin">[2025 July]</p>
      A user-friendly feminist Chinese input method is implemented based on user’s feedback and
      suggestions on the basis of conducted interviews. It provides various typing options including original characters
      and modified characters and serves as a technical tool for exploring more female-friendly expressions in every
      day’s digital communication.
    </div>
    <div v-if="hoverThesisImage" class="green-text">
      <h2 class="title">Reimagining Chinese Characters: Exploring Self-Perception Through Gendered Radical Interventions
      </h2>
      <p class="thin"><span class="bold">#</span>Research <span class="bold">#</span>Thesis</p>
      <p class="thin">[2025 July]</p>
      According to linguistic relativity, the language we use can shape how we see the world (Whorf, 1957). This study
      explores whether changing the radicals (the building blocks of Chinese characters) can affect how people see
      themselves.<br><br>
      For Chinese words that have negative meanings and include the “女” (meaning: female) radical, we applied two
      changes: replacing them with synonyms that don’t contain the female radical (M1), and replacing the female radical
      with a more neutral one (M2). For positive words that originally don’t include the “女” (female) radical, we added
      it in (M3). Participants were asked to rate sentences that described personal traits, some with the original
      characters, the rest with modified versions, and indicate how well each sentence matched the way they perceive
      themselves.
    </div>
    <!-- 当没有悬停时显示占位符，保持布局稳定 -->
    <div v-if="!hoverFirstImage && !hoverSecondImage" class="placeholder-text">
      &nbsp;
    </div>
  </div>
  <div class="content">

    <!-- 图片行 -->
    <!-- <div class="image-row"> -->
    <div class="image-scroller">
      <div class="image-track">
        <div class="image-container gray-image">
          <a href="/7papers-FinalVer.pdf" target="_blank">
            <img src="/image-7paper.png" class="logo gray" alt="7paper"
              @mouseenter="hover7paperImage = true; isBackgroundGrayscale = true"
              @mouseleave="hover7paperImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
        <div class="image-container gray-image">
          <a href="/Video.mp4" target="_blank">
            <img src="/snakegame.jpg" class="logo vue" alt="snakegame"
              @mouseenter="hoverSnakeImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverSnakeImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
        <div class="image-container gray-image">
          <a href="https://github.com/enenmia/characterLearning" target="_blank">
            <img src="/hci.jpg" class="logo" alt="cc" @mouseenter="hoverHCIImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverHCIImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
        <div class="image-container gray-image">
          <a href="https://github.com/enenmia/feelYourBodyHair" target="_blank">
            <img src="/cc.png" class="logo" alt="cc" @mouseenter="hoverCCImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverCCImage = false; isBackgroundGrayscale = false" />

          </a>
        </div>
        <div class="image-container">
          <a href="https://sites.google.com/view/artificialcreatures2024/student-portfolios/carita-muhli/final-project-toxicity?authuser=0"
            target="_blank">
            <img src="/image.png" class="logo vue" alt="Vite logo"
              @mouseenter="hoverFirstImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverFirstImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
        <div class="image-container">
          <a href="/ssi_demo.mp4" target="_blank">
            <img src="/ssi.png" class="logo" alt="Vite logo"
              @mouseenter="hoverSSIImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverSSIImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
        <div class="image-container">
          <a href="https://github.com/enenmia/fakeLinkedIn" target="_blank">
            <img src="/finger.png" class="logo" alt="Vite logo"
              @mouseenter="hoverFingerImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverFingerImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
        <div class="image-container">
          <a href="https://huiennn.itch.io/the-quest-of-truth" target="_blank">
            <img src="/quest.png" class="logo vite" alt="Vue logo"
              @mouseenter="hoverGameImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverGameImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
        <div class="image-container">
          <a href="https://github.com/enenmia/s2e-gaze" target="_blank">
            <img src="/image2.png" class="logo vue" alt="Vue logo"
              @mouseenter="hoverSecondImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverSecondImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
        <div class="image-container">
          <a href="https://portfolio.ludev.nl/projects/2023/21/project.php" target="_blank">
            <img src="/signweb.png" class="logo vue" alt="Vue logo"
              @mouseenter="hoverSignwebImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverSignwebImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
        <div class="image-container">
          <a href="/Final%20paper-The%20ethical%20challenge%20of%20using%20healthcare%20data%20for%20patients%20with%20mental%20health%20issues.pdf"
            target="_blank" rel="noopener noreferrer">
            <img src="/data.png" class="logo gray" alt="Vue logo"
              @mouseenter="hoverDataImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverDataImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
        <div class="image-container">
          <a href="https://www.figma.com/design/y9pFNuK5gRVCz4LKF4Q0e2/New-purchase-process-design-AI-in-society?node-id=0-1&p=f"
            target="_blank">
            <img src="/companion.png" class="logo" alt="Vue logo"
              @mouseenter="hoverCompanionImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverCompanionImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
        <div class="image-container">
          <a href="/Placeholder.pdf" target="_blank">
            <img src="/e-keyboard.png" class="logo" alt="Vue logo"
              @mouseenter="hoverEkeyboardImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverEkeyboardImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
        <div class="image-container">
          <a href="/Placeholder.pdf" target="_blank">
            <img src="/thesis.png" class="logo gray" alt="Vue logo"
              @mouseenter="hoverThesisImage = true; isBackgroundGrayscale = true"
              @mouseleave="hoverThesisImage = false; isBackgroundGrayscale = false" />
          </a>
        </div>
      </div>

    </div>

  </div>
  <Footer />
</template>



<style scoped>
.logo {
  height: 2.6em;
  padding: 2.6em;
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

.logo:hover {
  /* 悬停时变为彩色并添加阴影 - 使用 !important 确保不被背景滤镜覆盖 */
  filter: grayscale(0%) drop-shadow(0 0 2em pink) !important;
  transform: scale(1.75);
  /* 悬停时略微放大 */
}

.logo.vue:hover {
  /* 悬停时变为彩色并添加阴影 - 使用 !important 确保不被背景滤镜覆盖 */
  filter: grayscale(0%) drop-shadow(0 0 2em #42b883aa) !important;
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
  font-size: 14px;
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
  height: 40px;
  /* 固定高度，防止布局跳动 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
  width: 100%;
  padding: 1em;
  /* 添加内边距 */
  border-radius: 8px;
  /* 圆角边框 */
  transition: all 0.3s ease;
  /* 平滑过渡效果 */
}


.placeholder-text {
  height: 14px;
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
  /* padding: 4rem; */

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
