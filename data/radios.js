var listRadios = [
  {
    name: "Xone Radio",
    viewers: "476",
    image: "./assest/image/radios/radio1.jpg",
    logo: "./assest/image/radios/num1.jpg",
  },
  {
    name: "On Air",
    viewers: "143",
    image: "./assest/image/radios/radio2.jpg",
    logo: "./assest/image/radios/num2.jpg",
  },
  {
    name: "Chạm",
    viewers: "323",
    image: "./assest/image/radios/radio3.jpg",
    logo: "./assest/image/radios/num3.jpg",
  },
  {
    name: "Acoustic",
    viewers: "665",
    image: "./assest/image/radios/radio4.jpg",
    logo: "./assest/image/radios/num4.jpg",
  },
  {
    name: "Rap Việt",
    viewers: "257",
    image: "./assest/image/radios/radio5.jpg",
    logo: "./assest/image/radios/num5.jpg",
  },

  {
    name: "US-UK",
    viewers: "116",
    image: "./assest/image/radios/radio6.jpg",
    logo: "./assest/image/radios/num6.jpg",
  },
  {
    name: "K-POP",
    viewers: "80",
    image: "./assest/image/radios/radio7.jpg",
    logo: "./assest/image/radios/num7.jpg",
  },
  {
    name: "V-POP",
    viewers: "50",
    image: "./assest/image/radios/radio8.jpg",
    logo: "./assest/image/radios/num8.jpg",
  },
  {
    name: "Bolero",
    viewers: "59",
    image: "./assest/image/radios/radio9.jpg",
    logo: "./assest/image/radios/num9.jpg",
  },
  {
    name: "The One Radio",
    viewers: "44",
    image: "./assest/image/radios/radio10.jpg",
    logo: "./assest/image/radios/num10.jpg",
  },
];

const RADIO_STORAGE = "ZM_RADIO";
localStorage.setItem(RADIO_STORAGE, JSON.stringify(listRadios));

// const listRadio = $(".radio_main");

// listRadios.forEach((radio, index) => {
//   listRadio.innerHTML += `
//                <div class="radio_live col c-2 l-1-7">
//                                             <div class="radio_live_main">
//                                                 <div class="radio_live_top">

//                                                     <div class="radio_card_display">
//                                                         <div class="radio_card"
//                                                             style="background-image: url(${radio.image});">
//                                                         </div>
//                                                     </div>

//                                                     <svg class="svg" width="100%" height="100%" viewBox="0 0 100 100">
//                                                         <circle class="svg-circle-bg" stroke="rgba(255, 255, 255, 0.2)"
//                                                             cx="50" cy="50" r="48.75" stroke-width="2.5">
//                                                         </circle>
//                                                         <circle class="svg-circle" stroke="#ff4b4a" cx="50" cy="50"
//                                                             r="48.75" stroke-width="2.5" stroke-linecap="round"
//                                                             stroke-dasharray="306.3052837250048" stroke-dashoffset="0"
//                                                             style="transition: stroke-dashoffset 850ms ease-in-out 0s;">
//                                                         </circle>
//                                                     </svg>
//                                                     <div class="overlay">
//                                                         <i class="fa-regular fa-circle-play play_radio"></i>
//                                                     </div>
//                                                 </div>
//                                                 <div class="radio_sub_card"
//                                                     style="background-image: url(${radio.logo});">
//                                                 </div>
//                                                 <div class="radio_label">
//                                                     LIVE
//                                                 </div>
//                                                 <div class="radio_live_bot">
//                                                     <div class="radio_live_title">${radio.name}</div>
//                                                     <div class="radio_live_numbers">${radio.viewers} đang nghe</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//   `;
// });

// const btnRadioLeft = $(".zm_radio_left");
// const btnRadioRight = $(".zm_radio_right");
// const radioElement = $(".radio_live");

// btnRadioLeft.onclick = function () {
//   slideShow(-3);
// };
// btnRadioRight.onclick = function () {
//   slideShow(3);
// };

// function slideShow(a) {
//   listRadio.scrollLeft += a * radioElement.clientWidth;
//   if (a > 0) {
//     btnRadioLeft.classList.remove("btn--disable");
//     btnRadioRight.classList.add("btn--disable");
//   } else {
//     btnRadioLeft.classList.add("btn--disable");
//     btnRadioRight.classList.remove("btn--disable");
//   }
// }
