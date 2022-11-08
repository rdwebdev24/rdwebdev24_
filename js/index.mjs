import data from './data.mjs'
const btn = document.querySelector(".btn");
const swipe = document.querySelector(".swipe");
const modal = document.querySelector(".modal");
const card_hover = document.querySelectorAll(".card_hover");
const playaudio = document.querySelector(".playaudio");
const pausebutton = document.querySelector(".pausebutton");
const playbutton = document.querySelector(".playbutton");
const project_card = document.querySelectorAll(".project_card");
const github_livedemo = document.querySelectorAll(".github_livedemo");
const card = document.querySelectorAll(".card");
const wrapper = document.querySelector("#example-element");
let cursor = document.querySelector(".cursor");
let  typeAudio = document.getElementById("myAudio")
let  typeAudio2 = document.getElementById("myAudio2")
typeAudio2.currentTime=2;
typeAudio2.startDelay=3
typeAudio2.play();



playbutton.addEventListener('click',()=>{
  playaudio.style.animation = "glow_audio 2s infinite forwards"
  playbutton.style.display = 'none'
  pausebutton.style.display = 'flex'
  let  typeAudio2 = document.getElementById("myAudio2")
  typeAudio2.play()
})
pausebutton.addEventListener('click',()=>{
  playaudio.style.animation = "none"
  pausebutton.style.display = 'none'
  playbutton.style.display = 'block'
  let  typeAudio2 = document.getElementById("myAudio2")
  typeAudio2.pause()
})


card.forEach((item,index)=>{
  let text = item.children[1].innerHTML;
  item.addEventListener('mouseover',()=>{
    let para1 = item.children[2].innerHTML;
    let para2 = item.children[3].innerHTML;
    card_hover[index].innerHTML = `<h2>${text}</h2>
    <p>${para1}</p>
    <p>${para2}</p>
    `
    item.children[1].style.opacity = 0
    item.children[2].style.opacity = 0
    item.children[3].style.opacity = 0
  })
  item.addEventListener('mouseout',()=>{
    card_hover[index].innerHTML = ''
    item.children[1].style.opacity = 1
    item.children[2].style.opacity = 1
    item.children[3].style.opacity = 1
  })
})


project_card.forEach((item,index)=>{
  item.addEventListener("mouseover",(e)=>{
    github_livedemo[index].style.transform = 'translateY(0)'
  })
  item.addEventListener("mouseout",()=>{
    github_livedemo[index].style.transform = 'translateY(100%)'
  })

  item.addEventListener('click',()=>{
    // modal.style.display = "flex";
    modal.style.visibility = "visible";
    modal.classList.add('class',"flip")
    setTimeout(() => {
      modal.innerHTML = data[index].info
    }, 250);
    modal.style.transform = "translate(-50%, -50%) rotateY(90deg)"
    setTimeout(() => {
      modal.style.transform = "translate(-50%, -50%) rotate(0deg)"
    }, 300);
  })
})


let val = 0;
let typecnt = 0;
btn.addEventListener("click", () => {
  if (val >= 360) val = 0;
  val += 90;
  typecnt++;
  modal.style.display = "none";
  setTimeout(() => {
    modal.style.display = "flex";
  }, 200);
  modal.style.visibility = "hidden";
  wrapper.style.transform = `rotateY(${val}deg)`;
  wrapper.style.perspective = `0`;
  setTimeout(() => {
    wrapper.style.perspective = `1000px`;
  }, 300);

  if (val == 90) {
    swipe.style.display = "block";
  } else {
     swipe.style.display = "none";
     typeAudio.pause();
 }

 if(val==90 && typecnt==1){
  typeAudio.currentTime = 5
  typeAudio.play();
     new TypeIt(".aboutpara1", {
       strings: ["hello i'm rohit dhakad"],
       speed: 50,
       waitUntilVisible: true,
     }).go();
     new TypeIt(".aboutpara2", {
       strings: [
         "i am doing frontend from more than one year, i also know about backend stuff like api integeration databases i use them in my projects",
       ],
       speed: 50,
       startDelay: 2000,
       waitUntilVisible: true,
     }).go();
     
     new TypeIt(".project_para1", {
       strings: ["i created many responsive websites using just html css and js"],
       speed: 50,
       waitUntilVisible: true,
     }).go();
     new TypeIt(".project_para2", {
       strings: ["i also build many react projects"],
       speed: 50,
       startDelay: 2000,
       waitUntilVisible: true,
     }).go();
     
     new TypeIt(".experience_para1", {
       strings: [
         "i have not that much of experience but i worked with the tech team of tecnoesis event in backend part",
       ],
       speed: 50,
       waitUntilVisible: true,
     }).go();
     new TypeIt(".experience_para2", {
       strings: [
         "i spend most of my time in frontend so i know some core concept of how to build a responsice website",
       ],
       speed: 50,
       startDelay: 2000,
       waitUntilVisible: true,
     }).go();
     
  }
});



//******** CURSOR CODE ********//
document.addEventListener("mousemove", (e) => {
  if (val != 90 && val!=270) {
    cursor.style.cssText = `
          top:${e.y - 50}px;
          left:${e.x - 50}px;`
  } else {
    cursor.style.display = "none";
  }
});



let translate = 0;
let card_cnt = 0;
swipe.addEventListener("click", () => {
  if (card_cnt < 3) {
    card_cnt++;
    translate += card[0].getBoundingClientRect().width * 2;
  }
  if (card_cnt > 2) {
    translate = 0;
    card_cnt = 0;
  }
  card.forEach((item) => {
    item.style.transform = `translateX(${translate}px)`;
  });
});

