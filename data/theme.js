const themes = [
  {
    header: "Dynamic",
    displays: [
      {
        name: "London",
        image: "./assest/image/theme/pic1.png",
        data_theme: "blue",
        background: "./assest/image/theme_background/pic1.jpg",
      },
      {
        name: "Sáng tối",
        image: "./assest/image/theme/pic2.jpg",
        data_theme: "dark",
      },
      {
        name: "Xanh da trời",
        image: "./assest/image/theme/pic3.jpg",
        data_theme: "blue",
      },
      {
        name: "Hồng",
        image: "./assest/image/theme/pic4.jpg",
        data_theme: "pink",
      },
      {
        name: "Nâu",
        image: "./assest/image/theme/pic5.jpg",
        data_theme: "brown",
      },
    ],
  },
  {
    header: "Chủ đề",
    displays: [
      {
        name: "XONE",
        image: "./assest/image/theme/pic6.jpg",
        data_theme: "dark",
        background: "./assest/image/theme_background/pic2.jpg",
      },
      {
        name: "Zing music awards",
        image: "./assest/image/theme/pic7.jpg",
        data_theme: "purple",
        background:
          "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/zma.svg",
      },
      {
        name: "Tháp Eiffel",
        image: "./assest/image/theme/pic8.jpg",
        data_theme: "dark",
        background: "./assest/image/theme_background/pic4.jpg",
      },
    ],
  },
  {
    header: "Nghệ sĩ",
    displays: [
      {
        name: "Jack",
        image: "./assest/image/theme/pic9.jpg",
        data_theme: "brown",
        background: "./assest/image/theme_background/pic5.jpg",
      },
      {
        name: "IU",
        image: "./assest/image/theme/pic10.jpg",
        data_theme: "gray",
        background: "./assest/image/theme_background/pic6.jpg",
      },
      {
        name: "Ji Chang Wook",
        image: "./assest/image/theme/pic11.jpg",
        data_theme: "green-light",
        background: "./assest/image/theme_background/pic11.jpg",
      },
      {
        name: "Lisa",
        image: "./assest/image/theme/pic12.jpg",
        data_theme: "pink-light",
        background: "./assest/image/theme_background/pic7.jpg",
      },
      {
        name: "Jennie Kim",
        image: "./assest/image/theme/pic13.jpg",
        data_theme: "gray",
        background: "./assest/image/theme_background/pic8.jpg",
      },
      {
        name: "Jisoo",
        image: "./assest/image/theme/pic14.jpg",
        data_theme: "light",
        background: "./assest/image/theme_background/pic9.jpg",
      },
      {
        name: "Rosé",
        image: "./assest/image/theme/pic15.jpg",
        data_theme: "blue",
        background: "./assest/image/theme_background/pic10.jpg",
      },
    ],
  },
  {
    header: "Màu tối",
    displays: [
      {
        name: "Tối",
        image: "./assest/image/theme/pic16.jpg",
        data_theme: "dark",
      },
      {
        name: "Tím",
        image: "./assest/image/theme/pic17.jpg",
        data_theme: "purple",
      },
      {
        name: "Xanh đậm",
        image: "./assest/image/theme/pic18.jpg",
        data_theme: "blue",
      },
      {
        name: "Xanh biển",
        image: "./assest/image/theme/pic19.jpg",
        data_theme: "blue-light",
      },
      {
        name: "Xanh lá",
        image: "./assest/image/theme/pic20.jpg",
        data_theme: "green",
      },
      {
        name: "Nâu",
        image: "./assest/image/theme/pic21.jpg",
        data_theme: "brown",
      },
      {
        name: "Hồng",
        image: "./assest/image/theme/pic22.jpg",
        data_theme: "pink",
      },
      {
        name: "Đỏ",
        image: "./assest/image/theme/pic23.jpg",
        data_theme: "red",
      },
    ],
  },
  {
    header: "Màu sáng",
    displays: [
      {
        name: "Sáng",
        image: "./assest/image/theme/pic24.jpg",
        data_theme: "light",
      },
      {
        name: "Xám",
        image: "./assest/image/theme/pic25.jpg",
        data_theme: "gray",
      },
      {
        name: "Xanh nhạt",
        image: "./assest/image/theme/pic26.jpg",
        data_theme: "green-light",
      },
      {
        name: "Hồng cánh sen",
        image: "./assest/image/theme/pic27.jpg",
        data_theme: "pink-light",
      },
    ],
  },
];

const THEME_STORAGE = "ZM_THEME";
localStorage.setItem(THEME_STORAGE, JSON.stringify(themes));

// const themeHeader = [...$$(".theme_type")];
// const themeWraper = [...$$(".theme_wrapper")];

// themes.forEach((theme, index) => {
//   themeHeader[index].innerHTML = theme.header;
//   theme.displays.forEach((display, idx) => {
//     themeWraper[index].innerHTML += `
//                 <div class="theme_item">
//                             <div class="theme_header">
//                                 <figure>
//                                     <img src="${display.image}" alt="" class="theme_img">
//                                     <div class="overlay">
//                                         <button class="apply theme-btn">
//                                             Áp dụng
//                                         </button>
//                                         <button class="preview theme-btn">Xem trước</button>
//                                     </div>
//                                 </figure>
//                             </div>
//                             <div class="theme_title">${display.name}</div>
//                         </div>
//             `;
//   });
// });

// const closeModalBtn = $(".close_modal");
// const modalTheme = $("#modal_theme_overlay");
// const modalThemeContainer = $(".theme_modal");
// const themePrev = $(".modal_theme_top");
// const themePopup = $(".theme_popup");
// closeModalBtn.onclick = function (e) {
//   modalTheme.style.display = "none";
// };

// themePopup.onclick = function () {
//   modalTheme.style.display = "flex";
// };

// themePrev.onclick = function () {
//   modalTheme.style.display = "flex";
// };

// modalTheme.onclick = function () {
//   modalTheme.style.display = "none";
// };

// modalThemeContainer.onclick = function (e) {
//   e.stopPropagation();
// };
