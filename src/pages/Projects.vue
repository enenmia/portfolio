<script setup>
import { ref, onMounted } from 'vue'
import BackHeader from '../components/BackHeader.vue'
// import Footer from '../components/Footer.vue'
// import Header from '../components/Header.vue'

// 当前激活的项目
const activeProject = ref('snake')

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
    <div class="projects-container">
        <!-- 背景图 -->
        <div class="background" :class="{ 'grayscale': isBackgroundGrayscale }"></div>

        <div class="main-content">
            <!-- 图片列在左边 -->
            <div class="image-column">
                <p class="thin year-label" :class="{ 'pink-year': activeProject !== null }">「2023」</p>
                <div class="image-container gray-image" :class="{ 'active': activeProject === 'snake' }">
                    <div class="img-wrapper" @click.stop="toggleProject('snake')">
                        <img src="/snakegame.jpg" class="logo vue" alt="snakegame" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="/Video.mp4" target="_blank" class="view-button">观看视频</a> -->
                    </div>
                </div>
                <div class="image-container gray-image" :class="{ 'active': activeProject === 'hci' }">
                    <div class="img-wrapper" @click.stop="toggleProject('hci')">
                        <img src="/hci.jpg" class="logo" alt="cc" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="https://github.com/enenmia/characterLearning" target="_blank" class="view-button">查看代码</a> -->
                    </div>
                </div>
                <p class="thin year-label" :class="{ 'pink-year': activeProject !== null }">「2024」</p>
                <div class="image-container gray-image" :class="{ 'active': activeProject === 'cc' }">
                    <div class="img-wrapper" @click.stop="toggleProject('cc')">
                        <img src="/cc.png" class="logo" alt="cc" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="https://github.com/enenmia/feelYourBodyHair" target="_blank" class="view-button">查看代码</a> -->
                    </div>
                </div>
                <div class="image-container" :class="{ 'active': activeProject === 'finger' }">
                    <div class="img-wrapper" @click.stop="toggleProject('finger')">
                        <img src="/finger.png" class="logo" alt="Vite logo" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="https://github.com/enenmia/fakeLinkedIn" target="_blank" class="view-button">查看代码</a> -->
                    </div>
                </div>
                <div class="image-container" :class="{ 'active': activeProject === 'mushi' }">
                    <div class="img-wrapper" @click.stop="toggleProject('mushi')">
                        <img src="/image.png" class="logo vue" alt="Vite logo" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="https://sites.google.com/view/artificialcreatures2024/student-portfolios/carita-muhli/final-project-toxicity?authuser=0"
            target="_blank" class="view-button">项目网站</a> -->
                    </div>
                </div>
                <div class="image-container" :class="{ 'active': activeProject === 'ssi' }">
                    <div class="img-wrapper" @click.stop="toggleProject('ssi')">
                        <img src="/ssi.png" class="logo" alt="Vite logo" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="/ssi_demo.mp4" target="_blank" class="view-button">观看视频</a> -->
                    </div>
                </div>
                <div class="image-container" :class="{ 'active': activeProject === 'quest' }">
                    <div class="img-wrapper" @click.stop="toggleProject('quest')">
                        <img src="/quest.png" class="logo vite" alt="Vue logo" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="https://huiennn.itch.io/the-quest-of-truth" target="_blank" class="view-button">玩游戏</a> -->
                    </div>
                </div>
                <div class="image-container" :class="{ 'active': activeProject === 's2e' }">
                    <div class="img-wrapper" @click.stop="toggleProject('s2e')">
                        <img src="/image2.png" class="logo vue" alt="Vue logo" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="https://github.com/enenmia/s2e-gaze" target="_blank" class="view-button">查看代码</a> -->
                    </div>
                </div>
                <div class="image-container" :class="{ 'active': activeProject === 'signweb' }">
                    <div class="img-wrapper" @click.stop="toggleProject('signweb')">
                        <img src="/signweb.png" class="logo vue" alt="Vue logo" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="https://portfolio.ludev.nl/projects/2023/21/project.php" target="_blank" class="view-button">项目网站</a> -->
                    </div>
                </div>
                <p class="thin year-label" :class="{ 'pink-year': activeProject !== null }">「2025」</p>
                <div class="image-container" :class="{ 'active': activeProject === 'companion' }">
                    <div class="img-wrapper" @click.stop="toggleProject('companion')">
                        <img src="/companion.png" class="logo" alt="Vue logo" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="https://www.figma.com/design/y9pFNuK5gRVCz4LKF4Q0e2/New-purchase-process-design-AI-in-society?node-id=0-1&p=f"
            target="_blank" class="view-button">Figma设计</a> -->
                    </div>
                </div>
                <div class="image-container" :class="{ 'active': activeProject === 'ekeyboard' }">
                    <div class="img-wrapper" @click.stop="toggleProject('ekeyboard')">
                        <img src="/e-keyboard.png" class="logo" alt="Vue logo" />
                    </div>
                    <div class="link-overlay">
                        <!-- <a href="/PlaceholderEkeyboard.pdf" target="_blank" class="view-button">查看文档</a> -->
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
                </div>
                <div v-if="activeProject === 'snake'" class="green-text lightgray-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">Calm me down</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Arduino & Python <span class="bold">#</span>Course:
                        Hardware
                        &
                        Physical
                        Computing</p>
                    <p class="thin">[2023 September, with Amber & Josie & Tijmen]</p>
                    A snake game was created where the speed of the snake was dependent on the heart rate. This creates
                    a
                    game which
                    gets more challenging dependent on excitement and stress. The idea was for one person to play the
                    snake
                    game,
                    while a second person wore the heart rate monitor and to answer quiz questions. They then had to
                    keep
                    calm in
                    order for the game to be as easy as possible for the first player.<br><br>
                    In short, the calmer you are, the slower the snake moves.
                    <video controls width="80%" style="margin-top: 16px;">
                        <source src="http://localhost:5173/Video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div v-if="activeProject === 'hci'" class="green-text lightgray-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">Symnese</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Javascript <span class="bold">#</span>Research <span
                            class="bold">#</span>Course: Human Computer
                        Interaction & Information Visualisation</p>
                    <p class="thin">[2023 December]</p>
                    Creating your own Chinese character can help you remember the way it actually looks!<br><br>
                    The traditional way (repeating and deconstructing) of character learning
                    can be lack of fun. Also, although Chinese is logograph, it has evolved so much and become not
                    intuitive
                    enough
                    for learner to associate its original meaning to the way it looks now.
                    <br><br> Therefore, a new way of remembering characters is explored.It is called integrate
                    subjectivity
                    into
                    memorizing process. This technique suggests
                    that stressing the learner’s own ideas could add benefit to their learning journey..<br><br>
                    In order to provide a possible solution to this problem, Symnese, a webbased character learning
                    tool,
                    was
                    created.
                    It aimed to discover whether people
                    can learn characters more efficiently when trying to figure out the symbolic
                    relationship between character and the real counterpart they represent. This is
                    done using a two phase process. In phase one, the user gets to create their own
                    character using the real Chinese components. Whereas in the second phase they
                    evaluate on this process.
                    <br><br>
                    <img src="/learnCharacter.gif" alt="Symnese demo" style="width: 100%; max-width: 500px;" />
                </div>
                <div v-if="activeProject === 'cc'" class="green-text lightgray-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">Feel your hair</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Processing <span class="bold">#</span>Course: Creative
                        Programming
                    </p>
                    <p class="thin">[2024 January]</p>
                    Interactive program that intends to change the way we interact with our body hair, turning the often
                    awkward
                    conversation about body hair into a playful and artistic experience.I set out to create a tool that
                    changes how
                    we
                    interact with body hair, turning the often awkward conversation about body hair into a playful and
                    artistic
                    experience. With four modes - Pat, Care, Trim, and Dye - users can engage with virtual hair in
                    different
                    ways.
                    <br><br>
                    Pat Mode:
                    In this mode, users interact with their hair using their hands in front of the webcam. The video
                    detects
                    hand
                    movements, and the virtual hair reacts as if it's being gently touched. This mode is designed to
                    mimic
                    the
                    comforting feeling of running fingers through hair, with each stroke making the hair to sway and
                    move
                    softly.
                    <br><br>
                    Care Mode:
                    Here, the interaction shifts to the use of the mouse. Users can care for their hair by clicking and
                    dragging the
                    mouse over the hair, after which the hair will have less splits in its end. This mode resembles the
                    effect of
                    applying oil or conditioner.
                    <br><br>
                    Trim Mode:
                    Trim Mode brings the feeling of cutting and grooming. Users use their hand movements, captured
                    through
                    the
                    webcam,
                    to simulate trimming the hair. When the hair is touched by hand, it drops as if being cut.
                    <br><br>
                    Dye Mode:
                    Dye Mode is a playful exploration of color. Users select a dye color by holding a colored object
                    close
                    to the
                    webcam. The tool then captures this color. As the user moves the mouse over the hair, it changes to
                    the
                    selected
                    color, mimicking the process of dyeing hair.
                    <br><br>
                    <img src="/feelYourBodyHairDemo.gif" alt="Feel your hair demo"
                        style="width: 100%; max-width: 500px;" />
                </div>
                <div v-if="activeProject === 'mushi'" class="green-text lightgray-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">MUSHI</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Arduino & Python <span class="bold">#</span>Course:
                        Artificial
                        Creatures</p>
                    <p class="thin">[2024 April, with Carita]</p>
                    We have created an artificial creature called Mushi that explores the notions of toxicity.<br><br>

                    We started out with the idea of power relations and feminism for our project, in essence, we wanted
                    to
                    explore
                    this quality in humans, how power structures are formed. As we delved further into the research, we
                    noticed
                    patterns of toxic behavior as a recurring theme. This took us to explore this as a type of power
                    structure.
                    How toxic behavior presents itself, such as through narcissism and manipulation.<br><br>

                    We thought of a creature that could embody this characteristic, where you're not able to distinguish
                    this
                    quality
                    from the outside but it comes across as you get to know it better. This is where we arrived at the
                    mushroom.<br><br>

                    A mushroom is a fungi that grows above ground, it comes in a variety of sizes, shapes and colors.
                    Some
                    of them
                    are
                    consumable and some are poisonous for humans, the distinction is hard for humans to make. In this
                    relation, we
                    thought the mushroom would be a great allegory for toxic characteristics and personality found in
                    humans.

                    <br><br> In this immersive installation, we invite you to position yourself in a direct, intimate
                    communication
                    with our creature—a
                    dialogue that at first glance seems inviting and warm. Yet, as you unravel the layers of this
                    metaphorical
                    journey, its true nature is revealed.
                    <br><br>
                    <div class="video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/8QFxOFvs1n4"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/_OrkzOB17x8"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div v-if="activeProject === 'ssi'" class="green-text lightgray-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">Purifier: The Power of Breath</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Plug Data <span class="bold">#</span>Course: Sound Space
                        &
                        Interaction
                    </p>
                    <p class="thin">[2024 April]</p>
                    The project is called ‘Purifier’. It aims to convey the audience that everyone is able to purify
                    their
                    own
                    space.
                    The concept is to develop a tool that makes the audience realise the power they naturally carry to
                    expel
                    the
                    noise
                    and guard their peaceful inner place. It uses a sample of people talking to represent external
                    voices
                    (opinions
                    ,
                    discussions,...); uses the sound of birds to represent the pure inner land; the bubbling magical
                    sound
                    to
                    present
                    the purifying process; and designed an interaction via which participants can feel the strength of
                    themselves.
                    <br><br>
                    This project was implemented in several key stages. I first developed the purifying sound effect,
                    inspired by
                    the
                    image of a fairy performing magic. To capture that feeling, I designed a bubbling sound with slight
                    randomness
                    to
                    make the experience more organic and immersive. Next, I built an Arduino setup to capture pressure
                    data,
                    allowing
                    the pitch of the purifying sound to respond dynamically—the greater the pressure, the higher the
                    pitch.
                    I then
                    implemented a logic system where each attempt records the highest pitch reached. If it surpasses the
                    previous
                    record, the system updates the 'max' value and lowers the background noise volume accordingly—so the
                    more effort
                    put into purifying, the quieter the noise becomes.
                    <br><br>
                    To add a sense of resistance, I designed the noise to return if the purification isn’t completed—it
                    gradually
                    gets
                    louder again, mimicking how inner peace often takes repeated effort. Only when the noise volume
                    drops
                    below 0.05
                    does it stop entirely, triggering bird sounds to mark a successful purification. The interaction
                    method
                    went
                    through multiple iterations: I started by trying to sonify breath using chest or stomach movements,
                    but
                    found it
                    too inconsistent across users. I then moved to voice input using `adc~` and `env~`, allowing users
                    to
                    blow into
                    the mic to control the sound, but it only worked well in very quiet environments. Finally, I settled
                    on
                    using
                    hand
                    pressure via a sensor, which gave the most stable and responsive interaction.
                    <br><br>
                    <div class="video-container">
                        <iframe src="/ssi_report.pdf" width="50%" height="600px" style=" border: none;">
                        </iframe>
                        <video controls width="50%" height="600px">
                            <source src="/ssi_demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <!-- 插入 PDF 报告 -->

                    </div>

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
                </div>
                <div v-if="activeProject === 'finger'" class="green-text lightgray-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">FingedIn</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Javascript
                        <span class="bold">#</span>Course:
                        Creative & Playful Science
                    </p>
                    <p class="thin">[2024 February]</p>
                    A fake LinkedIn website to showcase the scientific results of finger's strength. Built everything
                    from scratch to creatively present the research findings of how different fingers perform
                    differently under all kinds of tasks.
                    <br><br>
                    <img src="/LinkedInDemo.gif" alt="FingedIn demo" style="width: 100%; max-width: 500px;" />
                </div>
                <div v-if="activeProject === 's2e'" class="green-text lightgray-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">Point of View</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Javascript & Node.js & Arduino <span
                            class="bold">#</span>Exihibition
                        <span class="bold">#</span>Course:
                        Science to Experience
                    </p>
                    <p class="thin">[2024 June, with Bart & Josie]</p>
                    This project explored the dynamic relationship between individual
                    and collective perspectives. We developed an interactive installation where a camera tracked the
                    viewer's eye
                    gaze
                    as they read projected text, causing the text to blur. This blurred text was then processed by GPT
                    to
                    generate
                    new
                    sentences, which viewers could print if they liked them. The project was exhibited at V2_, Lab for
                    the
                    Unstable
                    Media
                    <br><br>
                    <iframe src="/S2Edocumentation.pdf" width="100%" height="800px" style="border: none;"></iframe>
                </div>
                <div v-if="activeProject === 'quest'" class="green-text lightgray-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">The Quest of Truth</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Bitsy <span class="bold">#</span>Game
                        <span class="bold">#</span>Course:
                        Sciences & Humanities
                    </p>
                    <p class="thin">[2024 June]</p>
                    The game tells the story of a little girl holding a pearl, searching for the moon—a metaphor for
                    scientists
                    seeking
                    truth through theory. Along her journey, she meets four prophets, each representing a different
                    historical view
                    of
                    science (from objectivism to subjectivism).<br> <br> I’m especially happy with the romantic ending I
                    crafted for
                    this
                    little exploration game. It represents how scientists pass knowledge to the next generations and how
                    the
                    fantastic
                    journey of quest can start over again.
                    <br><br>
                    <iframe height="100%" frameborder="0" src="https://itch.io/embed/2966917" width="552"><a
                            href="https://huiennn.itch.io/the-quest-of-truth">The quest of truth by huien</a></iframe>
                </div>
                <div v-if="activeProject === 'signweb'" class="green-text lightgray-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">Signweb</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Flask & HTML & CSS & Javascript <span
                            class="bold">#</span>Course:
                        Software Engineering</p>
                    <p class="thin">[2024 July, with Amy, Imke, Joris, Niels & Thomas]</p>
                    In order to research American Sign Language (ASL) it is beneficial to be able to quickly search
                    various
                    keywords
                    or phrases and see it being spoken. This product is an improvement upon a design that was first made
                    by
                    another
                    student. Providing more privacy by introducing a login page, an improved and more modern user
                    interface,
                    and
                    lenient searching making sure more relevant results are shown. This product has been dockerized in
                    order
                    to
                    easily
                    host the website on a server. Several smaller features are also included such as being able to
                    download
                    captions,
                    the video itself, or the movements from the speaker which can be useful in researching ASL.<br><br>
                    This was a significant collaborative project organized by LUDev. Our team of six worked together to
                    upgrade a
                    sign
                    language resource database. I focused primarily on the front-end design and development. <a
                        href="https://portfolio.ludev.nl/projects/2023/21/project.php" target="_blank">Click here to see
                        the
                        project website</a>.<br><br>
                    <br><br>
                    <iframe src="https://portfolio.ludev.nl/projects/2023/21/project.php" width="100%" height="600px"
                        style="border: none; background-color: white;"></iframe>

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
                </div>
                <div v-if="hoverDataImage" class="green-text">
                    <h2 class="title">The ethical challenge of using healthcare data for patients with mental health
                        issues
                    </h2>
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
                </div>
                <div v-if="activeProject === 'companion'" class="green-text lightgray-text project-detail">
                    <!-- <h2 class="title">New Workflow for Buying AI Companion Online</h2> -->
                    <div class="detail-header">
                        <h2 class="title">New Workflow for Buying AI Companion Online</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Figma <span class="bold">#</span>Course: AI in Society
                    </p>
                    <p class="thin">[2025 January]</p>
                    I imagined a future process of buying AI products, where we live in a time filled with a wide
                    variety of AI products. In this future, people can easily choose AI companion products for the
                    elderly, just like shopping on Amazon. The process stresses the factors we now ignore such as
                    respecting
                    the
                    elderly's autonomy, and ensuring transparency and explanability.
                    <br><br>
                    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450"
                        src="https://embed.figma.com/design/y9pFNuK5gRVCz4LKF4Q0e2/New-purchase-process-design-AI-in-society?node-id=0-1&embed-host=share"
                        allowfullscreen></iframe>
                </div>
                <div v-if="activeProject === 'ekeyboard'" class="green-text lightgray-text project-detail">
                    <div class="detail-header">
                        <h2 class="title">Feminist Chinese Input Method</h2>
                        <button class="close-btn" @click="closeActiveProject">×</button>
                    </div>
                    <p class="thin"><span class="bold">#</span>Rime & Font Creator <span class="bold">#</span>Thesis</p>
                    <p class="thin">[2025 July]</p>
                    A user-friendly feminist Chinese input method is implemented based on user’s feedback and
                    suggestions on the basis of conducted interviews. It provides various typing options including
                    original
                    characters
                    and modified characters and serves as a technical tool for exploring more female-friendly
                    expressions in
                    every
                    day’s digital communication.
                    <br><br>
                    <iframe src="/PlaceholderEkeyboard.pdf" width="90%" height="400px" style="border: none;"></iframe>
                </div>

            </div>
        </div>
        <!-- <Footer /> -->
    </div>
</template>



<style scoped>
.close-btn {
    display: none;
}

.main-content {
    display: flex;
    width: 90%;
    max-width: 1200px;
    min-height: 80vh;
    margin: 2rem auto;
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
    left: 4%;

    padding-top:3em;
}

.text-column {
    width: 75%;
    margin-left: 20%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 3%;;
}


.logo {
    height: 1em 3em;
    padding: 2em;
    width: calc(100% - 6em);
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
    filter: grayscale(0%) drop-shadow(0 0 2em pink) !important;
    transform: scale(1.1);
}

/* Vue标志激活时的样式 */
.image-container.active .logo.vue {
    filter: grayscale(0%) drop-shadow(0 0 2em #42b883aa) !important;
    transform: scale(1.1);
}

.logo.vue:hover {
    filter: grayscale(0%) drop-shadow(0 0 2em #42b883aa) !important;
}

.thin {
    font-weight: 200;
    font-style: italic;
}

.video-container {
    display: flex;
    gap: 2em;
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

/* Ensure the project page has a proper background */
.main-content {
    position: relative;
    z-index: 1;
    /* Position above the background */
}

/* Semi-transparent overlay for better text readability */
.projects-container {
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
