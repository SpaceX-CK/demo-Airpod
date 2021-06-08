const intro = document.getElementById("intro");
// const intro = document.querySelector(".intro");
const video = document.getElementById("video1");
const text = document.getElementsByClassName('text1');
console.log("🚀🌈 ~ file: app.js ~ line 6 ~ text", text)

//set fade in text timing
const timeline = new TimelineMax();
timeline
.fromTo(".text1",10, { opacity: 0 }, { opacity: 1, duration: 3 ,delay: 14},);

//END SECTION
// const section = document.querySelector('section');
// const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();
//Scenes
const scene = new ScrollMagic.Scene({
    duration: 7100,
    // triggerElement: intro,
    triggerHook: 0
})

//call out timline
.setTween(timeline)
// .addIndicators()
.setPin(intro)
.addTo(controller);

//video Animation
let accelamount = 0.1;
let scrollpos= 0;
let delay = 0;

scene.on("update", e =>{
    scrollpos = e.scrollPos /500;
    console.log("🚀🌈 ~ file: app.js ~ line 29 ~ e", e)
    
})
setInterval(()=>{
    delay += (scrollpos -delay)*accelamount;
    // console.log("🚀🌈 ~ file: app.js ~ line 34 ~ setInterval ~ scrollpos", scrollpos, delay);
    video.currentTime = scrollpos;
},93.33);

