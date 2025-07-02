<script setup>
import { ref, onMounted } from 'vue'
import BackHeader from '../components/BackHeader.vue'
// import Footer from '../components/Footer.vue'
// import Header from '../components/Header.vue'
// import SimpleBackHeader from '../components/SimpleBackHeader.vue'

// 当前激活的项目
const activeProject = ref('7paper')

// 控制背景图是否为黑白
const isBackgroundGrayscale = ref(true)

// 切换项目详情显示
const toggleProject = (projectName) => {
    // 如果点击的是当前激活的项目，则关闭它
    if (activeProject.value === projectName) {
        activeProject.value = null
        isBackgroundGrayscale.value = false
    } else {
        // 否则激活新项目
        activeProject.value = projectName
        isBackgroundGrayscale.value = true
    }
}

// 关闭当前激活的项目详情
const closeActiveProject = () => {
    activeProject.value = null
    isBackgroundGrayscale.value = false
}

// 确保组件挂载后背景图正确加载
onMounted(() => {
    console.log("组件已挂载，背景图应显示为: /41.png")
})
</script>

<template>
    <BackHeader />
    <div class="research-container">
        <!-- 背景图 -->
        <div class="background" :class="{ 'grayscale': isBackgroundGrayscale }"></div>

        <div class="main-content">
            <!-- 图片列在左边 -->
            <div class="image-column">
                <p class="thin year-label" :class="{ 'pink-year': activeProject !== null }">「2023」</p>
                <div class="image-container gray-image" :class="{ 'active': activeProject === '7paper' }">
                    <div class="img-wrapper" @click.stop="toggleProject('7paper')">
                        <img src="/image-7paper.png" class="logo gray" alt="7paper" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="/7papers-FinalVer.pdf" target="_blank" class="view-button">查看文档</a> -->
                    </div>
                </div>
                <p class="thin year-label" :class="{ 'pink-year': activeProject !== null }">「2024」</p>
                <div class="image-container" :class="{ 'active': activeProject === 'fingerPaper' }">
                    <div class="img-wrapper" @click.stop="toggleProject('fingerPaper')">
                        <img src="/fingerPaper.png" class="logo gray" alt="Vue logo" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="/How-well-can-fingers-remember.pdf" target="_blank" class="view-button">查看文档</a> -->
                    </div>
                </div>
                <div class="image-container" :class="{ 'active': activeProject === 'coconut' }">
                    <div class="img-wrapper" @click.stop="toggleProject('coconut')">
                        <img src="/coconut.png" class="logo gray" alt="Vue logo" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="/CC__cocunut.pdf" target="_blank" class="view-button">查看文档</a> -->
                    </div>
                </div>
                <p class="thin year-label" :class="{ 'pink-year': activeProject !== null }">「2025」</p>
                <div class="image-container" :class="{ 'active': activeProject === 'data' }">
                    <div class="img-wrapper" @click.stop="toggleProject('data')">
                        <img src="/data.png" class="logo gray" alt="Vue logo" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="/Final%20paper-The%20ethical%20challenge%20of%20using%20healthcare%20data%20for%20patients%20with%20mental%20health%20issues.pdf"
            target="_blank" rel="noopener noreferrer" class="view-button">查看文档</a> -->
                    </div>
                </div>
                <div class="image-container" :class="{ 'active': activeProject === 'thesis' }">
                    <div class="img-wrapper" @click.stop="toggleProject('thesis')">
                        <img src="/thesis.png" class="logo gray" alt="Vue logo" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="/Placeholder.pdf" target="_blank" class="view-button">查看论文</a> -->
                    </div>
                </div>
            </div>

            <!-- 文字介绍在右边 -->
            <div class="text-column">
                <div v-if="activeProject === '7paper'" class="green-text green-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">Can people's experience in the virtual world influence their self-evaluations
                            in
                            reality?</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Research <span class="bold">#</span>Course: Research
                        Fundamentals</p>
                    <p class="thin">[2023 September]</p>
                    In course Research Fundamentals, I researched about if vitual experience can influence people's
                    self-evalutaion.
                    The
                    answer is yes, it can influence, but in a limited way. It also covers the factors that determine the
                    effects.
                    <br><br>Interestingly, I didn't realize it at the time, but my Master thesis ended up revolving
                    around
                    the very
                    same
                    theme. Looking back, it feels like a beautiful full-circle moment that quietly connected the
                    beginning
                    and the
                    end
                    of my two-year research journey.
                    <br><br>
                    <iframe src="/7papers-FinalVer.pdf" title="7papers" frameborder="0" width="50%"
                        height="600px"></iframe>
                </div>
                <div v-if="activeProject === 'fingerPaper'" class="green-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">How well can fingers remember?</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Research <span class="bold">#</span>Course: Playful &
                        Creative
                        Science
                    </p>
                    <p class="thin">[2024 February, with Josie]</p>
                    Repeatedly writing down things help us remember [1]. Knowing that from the
                    research of previous scholars, we are still curious about how exactly different finger
                    participate in this process. In other words, we have the research question:
                    Do fingers help in the write-to-remember process? Can they conduct the act of
                    “remembering” by themselves? What can they remember?<br><br>
                    In order to investigate in these questions, we decide to hold every finger that is active
                    in writing(thumb, index finger, middle finger) as a pen, and try to recreate a picture
                    that has been generated by computer. The experiment shows that each finger has
                    different task that it is good at or bad at.<br><br>
                    Thumbs: Thumbs tend to follow a specific order when memorizing, such as left-to-
                    right or top-to-bottom, which helps to maintain consistency in memory; During
                    reduction, the thumb shows consistency in order, but sometimes makes errors in the
                    position and orientation of elements, such as inaccurate position or orientation of lines
                    and letters.<br><br>
                    Index Finger: The index finger is memorized in a variety of ways, from left to right or
                    according to the importance of the element. Memorization seems to focus more on the
                    details of the elements than on the overall layout; When reducing, the index finger
                    shows attention to detail, but sometimes at the expense of relative positional
                    relationships between elements, resulting in deviations from the overall layout.<br><br>
                    Middle Finger: The middle finger appears to use a subregional approach when
                    memorizing, such as dividing the image into upper, middle, and lower parts to
                    memorize; When reduced, the performance of the middle finger usually includes
                    elemental accuracy, but sometimes errors in size and position occur, especially in
                    maintaining the correct relative position between elements.
                    <p class="thin not-italic">
                        [1]Naka, M., & Naoi, H. (1995). The effect of repeated writing on memory. Memory &
                        cognition, 23(2), 201–212. https://doi.org/10.3758/bf03197222
                    </p>
                    <br><br>
                    <iframe src="/How-well-can-fingers-remember.pdf" title="7papers" frameborder="0" width="50%"
                        height="600px"></iframe>
                </div>

                <div v-if="activeProject === 'coconut'" class="green-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">Enhancing Live Performances:
                            A Co-Creative VJing System Using Generative AI and Real-Time Inputs
                        </h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Research <span class="bold">#</span>Course: Computational
                        Creativity
                    </p>
                    <p class="thin">[2024 December, with Carita, Nate & Sanne]</p>
                    Recent advancements in AI have created the oppor- tunity to develop co-creative computational
                    systems,
                    where
                    humans and AI can collaborate to create novel artistic output. These developments have potential in
                    various
                    domains in the creative industry, including live performances. As such, VJs and DJs, who require vi-
                    suals to
                    respond live to performance cues, could po- tentially benefit from co-creative systems that enable
                    them
                    to
                    create
                    visuals during live performances. This paper presents a new co-creative VJing system that allows VJs
                    or
                    DJs to
                    collaborate with AI to generate visuals that respond to camera input with the help of
                    StreamDiffusion and TouchDesigner. <br><br>The evaluation demonstrated that the system generates
                    visuals
                    with high novelty and enhances creativity, offering new possibilities for tradi- tional VJ
                    workflows.
                    Despite
                    challenges such as frame rate limitations, prompt dependency, and hardware re- quirements,
                    participants
                    found
                    the
                    system to be both a creative partner and a tool, with future improvements like enhanced user control
                    interfaces
                    promising greater practicality for live performances.
                    <br><br>
                    <iframe src="/CC__cocunut.pdf" title="7papers" frameborder="0" width="50%" height="600px"></iframe>
                </div>
                <div v-if="activeProject === 'data'" class="green-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">The ethical challenge of using healthcare data for patients with mental health
                            issues</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Research <span class="bold">#</span>Course: Data Driven
                        Policy Making
                    </p>
                    <p class="thin">[2025 January]</p>
                    This paper focuses on the ethical challenge of using healthcare data for patients with mental health
                    issues.
                    With the help of principal-agent theory, the essay analyzes how a data breach case can be
                    interpreted
                    using this
                    framework: first, it reviews the development of the theory; next, it introduces the Vastaamo case,
                    and
                    examines
                    how it supports the theory in some aspects and challenges it in others; finally, it proposes
                    potential
                    technical
                    solutions in order to try solving the most critical issues stressed by this case.
                    <br><br>
                    <iframe
                        src="/Final%20paper-The%20ethical%20challenge%20of%20using%20healthcare%20data%20for%20patients%20with%20mental%20health%20issues.pdf"
                        width="50%" height="600px" style="border: none;"></iframe>

                </div>

                <div v-if="activeProject === 'thesis'" class="green-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">Reimagining Chinese Characters: Exploring Self-Perception Through Gendered
                            Radical
                            Interventions</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Research <span class="bold">#</span>Thesis</p>
                    <p class="thin">[2025 July]</p>
                    This study explores whether changing gendered radicals in Chinese character can influence how people
                    see
                    themselves. Synonym replacement (M1) based on word unit and Radical neutralization based character
                    unit
                    (M2) are
                    the modifications for originally negative expressions. Adding female radical (M3) is how originally
                    positive
                    expressions are modified. The study tested how participant evaluate themselves differently under
                    modified and
                    original forms. <br><br>Main findings include: 1) M1 increase negative self-evaluation; 2) the
                    negative
                    impact
                    of
                    M1 is
                    significant among female participants, but not for other genders; 3) the impact of M2 and M3 varied
                    depending on
                    the word’s meaning; 4) participants’ feminism level cannot predict their response to language
                    intervention.
                    In general, the modifications do not have a consistent positive impact on self-perception. This
                    result
                    may be
                    because 1) the questionnaire feels like a neutral and task-based setting and does not invite strong
                    emotional
                    reaction; 2) participant can make sense out of the modified characters because of human’s embedded
                    comprehension
                    mechanism, and interpret them based on their original form; 3) there is a gap between what people
                    believe and
                    how
                    they feel in the moment. Even if someone identifies as a feminist, their reactions to words can
                    happen
                    quickly
                    and
                    automatically based on what they are used to seeing or hearing.<br><br>
                    This is the first study to bring feminist language reform and digital tool design together into the
                    Chinese
                    context. It is hoped that the result of this study can provides a unique perspective of how feminist
                    ideas can
                    affect people’s self-perception, and to show how technology can help spread these ideas. The created
                    input
                    method
                    can also serves as a tool for future researchers or developers who believe in feminism, tech for
                    good,
                    or
                    inclusive language can build on. In doing so, it hopes to make feminist language more visible and
                    more
                    usable in
                    digital spaces.<br><br>
                    The study also triggers a creative output, which is a user-friendly feminist Chinese input method
                    that
                    provides
                    various typing options including original characters and modified characters.
                    <br><br>
                    <iframe
                        src="/Placeholder.pdf"
                        width="100%" height="400px" style="border: none;"></iframe>

                </div>
                <!-- 当没有悬停时显示占位符，保持布局稳定 -->
                <!-- <div v-if="!hoverFirstImage && !hoverSecondImage && !hover7paperImage && !hoverSnakeImage && !hoverCCImage && !hoverHCIImage && !hoverSSIImage && !hoverFingerPaperImage && !hoverFingerImage && !hoverGameImage && !hoverSignwebImage && !hoverCoconutImage && !hoverDataImage && !hoverCompanionImage && !hoverEkeyboardImage && !hoverThesisImage" class="placeholder-text">
        <div>将鼠标悬停在左侧图片上以查看项目详情</div>
      </div> -->
            </div>
        </div>
        <!-- <Footer /> -->
    </div>
</template>



<style scoped>
template {
    z-index: 100;
}

.close-btn {
    display: none;
}

.main-content {
    display: flex;
    width: 90%;
    max-width: 1200px;
    min-height: 80vh;
    margin: 4rem auto;
    position: relative;
    z-index: 1;
}

.image-column {
    width: 15%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    overflow-y: auto;
    max-height: 90vh;
    position: fixed;
    left: 2%;
}

.text-column {
    width: 75%;
    margin-left: 20%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.logo {
    height: 1em 3em;
    padding: 2em;
    width: calc(100% - 4em);
    object-fit: cover;
    will-change: filter;
    transition: filter 600ms ease, transform 600ms ease;
    filter: grayscale(100%);
    z-index: 10;
    transform: scale(1);
}

.logo:hover {
    filter: grayscale(0%) drop-shadow(0 0 2em pink) !important;
    transform: scale(1.1);
    /* 进一步减小放大比例 */
}

/* 添加激活状态的样式 */
.image-container.active .logo {
    filter: grayscale(0%) drop-shadow(0 0 2em #ffffff) !important;
    transform: scale(1.1);
}

.logo.vue:hover {
    filter: grayscale(0%) drop-shadow(0 0 2em #42b883aa) !important;
}

.thin {
    font-weight: 200;
    font-style: italic;
}

/* 年份标签样式 */
.year-label {
    color: #333;
    /* 默认绿色 */
    transition: color 0.3s ease;
    /* 平滑过渡效果 */
    font-style: normal;
}

/* 当有项目激活时的粉色年份 */
.pink-year {
    color: white !important;
    /* 粉色 */
}

.image-container {
    position: relative;
    display: block;
    margin: 0.8rem 0;
    z-index: 10;
    border: grey solid 0.5px;
    width: 90%;
    max-width: 180px;
    text-align: center;
}

/* 基础文字样式 */
.green-text {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    text-align: left;
    width: 100%;
    animation: fadeIn 0.3s ease-in;
    z-index: 20;
    position: relative;
    background: linear-gradient(to right, rgb(198, 105, 120), #4bd8b8);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 10px rgba(66, 184, 131, 0.5);
    white-space: normal;
    word-break: break-word;
    padding: 2rem;
    min-height: 300px;
    /* border-left: 3px solid rgba(255, 255, 255, 0.1); */
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
    height: auto;
    width: 100%;
    padding: 1em;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.placeholder-text {
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.3);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
    content: "鼠标悬停在左侧图片上以查看项目详情";
}

.title {
    font-family: "Asset", serif;
    font-weight: 400;
    font-style: normal;
}

.not-italic {
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
    background-position: center top;
    z-index: -1;
    transition: filter 0.5s ease;
    filter: grayscale(40%) brightness(0.9) contrast(1.1);
}

.bold {
    font-weight: bold;
}

.background.grayscale {
    filter: grayscale(300%) brightness(0.4) contrast(1.1);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateX(-10px);
        /* 从左侧滑入 */
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.logo.gray {
    filter: grayscale(100%) brightness(1.2) contrast(0.8) !important;
    opacity: 0.9;
    box-shadow: 0 0 60px rgba(255, 255, 255, 0.4);
    transition: box-shadow 0.5s ease;
}

.lightgray-text {
    background: none;
    color: rgba(200, 200, 200, 0.85);
    -webkit-background-clip: unset;
    background-clip: unset;
    text-shadow: none;
}

.footer {
    background-color: white;
    width: 100%;
    margin: 0;
    padding: 0;
}

/* Ensure the research page has a proper background */
.main-content {
    position: relative;
    z-index: 1;
    /* Position above the background */
}

/* Semi-transparent overlay for better text readability */
.research-container {
    background-color: rgba(0, 0, 0, 0.5);
    min-height: 100vh;
    width: 100%;
    position: relative;
    z-index: 1;
}

/* 响应式布局 */
@media (max-width: 900px) {
    .main-content {
        flex-direction: column;
        width: 95%;
        margin: 1rem auto;
    }

    .image-column {
        position: static;
        width: 100%;
        max-height: none;
        overflow-y: visible;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }

    .text-column {
        width: 100%;
        margin-left: 0;
        margin-top: 1rem;
    }

    .image-container {
        margin: 0.5rem;
        width: calc(33.33% - 1rem);
        max-width: 150px;
    }

    .green-text {
        border-left: none;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 1.5rem;
    }

    .placeholder-text {
        border-left: none;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
}

@media (max-width: 600px) {
    .image-container {
        width: calc(50% - 1rem);
    }
}
</style>
