const songs = [
  {
    number: 1,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/4/1/3/34137b256acfb7772782698c5011f814.jpg",
    name: "Đánh Cắp Mặt Trời",
    singers: [
      "Double2T",
      "Tùng Dương",
      "Hồng Nhung",
      "Trung Quân",
      "Phương Mỹ Chi",
    ],
    info: "Đánh cắp mặt trời (Single)",
    duration: "08:21",
  },
  {
    number: 2,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/5/d/8/55d84d3b1d8c045618ff30c35c6efe6a.jpg",
    name: "Hôn Lễ Của Anh",
    singers: ["Tuệ Anh"],
    info: "Hôn Lễ Của Anh (Single)",
    duration: "03:22",
  },
  {
    number: 3,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/8/5/8/88587923c04ae5d51ba47cdf132e1d76.jpg",
    name: "Hóa Ra Lại Hay",
    singers: ["Akira Khoa", "Đông Thiên Đức"],
    info: "Hóa Ra Lại Hay (Single)",
    duration: "04:32",
  },
  {
    number: 4,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/f/a/b/afabcd2a55ac9dd42241ad0774e2c9b5.jpg",
    name: "Mỉm Cười Mà Khóc Trong Lòng",
    singers: ["Lynk Lee"],
    info: "Mỉm Cười Mà Khóc Trong Lòng (Single)",
    duration: "04:20",
  },
  {
    number: 5,
    status: {
      state: "increase",
      icon: "bi bi-caret-up-fill increase",
      num: 2,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/f/d/9/ffd9b78fae7fa10bde459b331fe382f6.jpg",
    name: "Hoa Nở Bên Đường",
    singers: ["Quang Đăng Trần", "ACV"],
    info: "Hoa Nở Bên Đường (Single)",
    duration: "05:16",
  },
  {
    number: 6,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/5/8/5/2585ab419c25a01687c2b6d3b80f63b8.jpg",
    name: "Anh Đã Biết Iu",
    singers: ["VSOUL", "VƯƠNG", "Anfang"],
    info: "Anh Đã Biết Iu (Single)",
    duration: "03:26",
  },
  {
    number: 7,
    status: {
      state: "reduce",
      icon: "bi bi-caret-down-fill reduce",
      num: 2,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/7/9/d/379d971871e7ba140c0ac41ba5a095aa.jpg",
    name: "Đạp Gió",
    singers: ["Trang Pháp"],
    info: "Đạp Gió (Single)",
    duration: "03:45",
  },
  {
    number: 8,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/e/1/1/5e114de6a304825cfb2d3ae9f9f1de8c.jpg",
    name: "Tâm Trí Em",
    singers: ["Linh Ka", "RZ Mas"],
    info: "Tâm Trí Em (Single)",
    duration: "03:25",
  },
  {
    number: 9,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/c/3/4/8c34aece3ad466f98748c78b4c7337cd.jpg",
    name: "G.O.A.T",
    singers: ["$A Milo", "Gxxfy", "Zuy", "Shanhao"],
    info: "OMETÀ",
    duration: "02:33",
  },
  {
    number: 10,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/0/5/5/e0558b94c907bb4006b544063ca50e8c.jpg",
    name: "Đổi Lấy Sự Mập Mờ",
    singers: ["Hồ Quang Hiếu"],
    info: "Đổi Lấy Sự Mập Mờ (Single)",
    duration: "06:57",
  },
  {
    number: 11,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/8/1/c/881cd6ef83e1dbb5eae456140c3af947.jpg",
    name: "Lệ Cay 3 (Rumba)",
    singers: ["Du Thiên"],
    info: "Lệ Cay 3 (Remix) (EP)",
    duration: "04:55",
  },
  {
    number: 12,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/1/8/5/f18591d9865bc290a246425260a51465.jpg",
    name: "Chúng Ta Mai Sau",
    singers: ["Lê Vũ"],
    info: "Chúng Ta Mai Sau (Single)",
    duration: "03:44",
  },
  {
    number: 13,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/4/0/4/5/404556def273798ee54b6c337c7d30e0.jpg",
    name: "Cảm Ơn Đã Cùng Anh Đi Qua Bao Sóng Gió",
    singers: ["Huấn Hoa Hồng"],
    info: "Cảm Ơn Đã Cùng Anh Đi Qua Bao Sóng Gió (Single)",
    duration: "01:22",
  },
  {
    number: 14,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/a/8/7/9a8754c612d8ccbb2bc7a70c05108616.jpg",
    name: "Trưởng Thành",
    singers: ["DIMZ"],
    info: "Tâm Trí Em (Single)",
    duration: "03:42",
  },
  {
    number: 15,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/5/3/7/55373c7fbebdb9cfe1b239935cdf5289.jpg",
    name: "Tội Cho Em",
    singers: ["Hà Nhi"],
    info: "Tội Cho Em (Single)",
    duration: "04:25",
  },
  {
    number: 16,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/1/5/2/615225ae96696264b01bd3f25ad2348d.jpg",
    name: "Nhạt Nhòa",
    singers: ["HK-RAY", "Phát Huy T4"],
    info: "Nhạt Nhòa (Single)",
    duration: "04:45",
  },
  {
    number: 17,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/4/f/8/54f8c750d8320d96e8332646129d640b.jpg",
    name: "Gió Nổi Lên Rồi (From 'Dickson Lofi')",
    singers: ["DICKSON"],
    info: "Gió Nổi Lên Rồi (From 'Dickson Lofi') (Single)",
    duration: "04:13",
  },
  {
    number: 18,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/7/b/7/6/7b765f3dc2921e3e98e91255c7d270c0.jpg",
    name: "Đau Lòng Chữ Tưởng",
    singers: ["Thành Đạt", "Dương Hùng Sơn"],
    info: "Đau Lòng Chữ Tưởng (Single)",
    duration: "05:38",
  },
  {
    number: 19,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/0/3/5/10353ce510707729ada1ec6180b7ed79.jpg",
    name: "Trao Cả Đời Cho Anh",
    singers: ["Phạm Hoàng Anh", "Rum", "DT Tập Rap"],
    info: "Trao Cả Đời Cho Anh (Single)",
    duration: "02:59",
  },
  {
    number: 20,
    status: {
      state: "normal",
      icon: "fa-solid fa-minus",
      num: null,
    },
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/7/d/0/7/7d07f5f1816a512edb0098246d8fa9c0.jpg",
    name: "Nếu Em Muốn Chia Tay",
    singers: ["Châu Khải Phong", "ACV"],
    info: "Nếu Em Muốn Chia Tay (Single)",
    duration: "04:49",
  },
];

const RANK_STORAGE = "ZM_RANK";
localStorage.setItem(RANK_STORAGE, JSON.stringify(songs));

// localStorage.clear();
// const zingList = $(".zing_new_list");
// var data = "";
// songs.forEach((song, index) => {
//   data += `
//          <div class="zing_new_item zing_new_${++index}">
//                               <div class="zing_new_left">
//                                   <div class="song_prefix">
//                                       <span class="song_number">${
//                                         song.number
//                                       }</span>
//                                       <div class="song_sort"><i class="${
//                                         song.status.icon
//                                       }"></i>
//                                       <div class="song_rank">${
//                                         song.status.num == undefined
//                                           ? ""
//                                           : song.status.num
//                                       }</div>
//                                       </div>
//                                   </div>

//                                   <div class="song-img">
//                                   <img src="${song.image}"
//                                       alt="" class="song_thumb" height="40" width="40">

//                                       <div class="overlay"><i class="fa-solid fa-play"></i></div>
//                                   </div>

//                                   <div class="card_info">
//                                       <a class="song_title">${song.name}</a>
//                                       <div class="song_artists">
//                                        ${song.singers
//                                          .map((singer) => {
//                                            return `<a>${singer}</a>`;
//                                          })
//                                          .join(",")}
//                           </div>

//                                   </div>
//                               </div>
//                               <a class="zing_new_main">${song.info}</a>
//                               <div class="zing_new_right">
//                               <span class="time"> ${song.duration}</span>
//                                <div class="zing_new_right_sub_menu">
//                                       <div class="sub_menu_item">
//                                           <div class="has_sub_menu">
//                                               <i class="bi bi-mic"></i>
//                                           </div>
//                                           <div class="sub_menu">
//                                               Phát cùng lời bài hát
//                                           </div>
//                                       </div>
//                                       <div class="sub_menu_item">
//                                           <div class="has_sub_menu">
//                                               <i class="bi bi-heart love_sym"></i>
//                                           </div>
//                                           <div class="sub_menu">
//                                               Thêm vào thư viện
//                                           </div>
//                                       </div>
//                                       <div class="sub_menu_item">
//                                           <div class="has_sub_menu">
//                                               <i class="bi bi-three-dots"></i>
//                                           </div>
//                                           <div class="sub_menu other">Khác</div>
//                                       </div>
//                                   </div>
//                               </div>
//                           </div>
//                           `;
// });
// zingList.innerHTML = data;

// var loveSong = [];
// const loves = document.querySelectorAll(".love_sym");
// Array.from(loves).forEach((love, index) => {
//   love.onclick = function (e) {
//     love.classList.toggle("loved");

//     const song = love
//       .closest(".zing_new_item")
//       .querySelector(".song_title").textContent;

//     if (love.classList.contains("loved")) {
//       love.classList.replace("bi-heart", "bi-suit-heart-fill");
//       loveSong.push(song);
//       alert(`Bạn đã thêm ${song} vào danh sách yêu thích`);
//     } else {
//       love.classList.replace("bi-suit-heart-fill", "bi-heart");
//       var indexToRemove = loveSong.indexOf(song);
//       if (indexToRemove != -1) {
//         loveSong.splice(indexToRemove, 1);
//       }
//       alert(`Bạn đã xóa ${song} vào danh sách yêu thích`);
//     }

//     console.log(loveSong);
//   };
// });
