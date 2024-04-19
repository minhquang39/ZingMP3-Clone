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
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/e/1/1/5e114de6a304825cfb2d3ae9f9f1de8c.jpg",
    name: "Tâm Trí Em",
    singers: ["Linh Ka", "RZ Mas"],
    info: "Tâm Trí Em (Single)",
    duration: "03:25",
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
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/e/1/1/5e114de6a304825cfb2d3ae9f9f1de8c.jpg",
    name: "Tâm Trí Em",
    singers: ["Linh Ka", "RZ Mas"],
    info: "Tâm Trí Em (Single)",
    duration: "03:25",
  },
  {
    number: 10,
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
    number: 11,
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
    number: 12,
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
    number: 13,
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
    number: 14,
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
    number: 15,
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
    number: 16,
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
    number: 17,
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
    number: 18,
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
    number: 19,
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
    number: 20,
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
    number: 21,
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
    number: 22,
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
];

const zingList = $(".zing_new_list");
var data = "";
function renderData() {
  songs.forEach((song, index) => {
    data += `
         <div class="zing_new_item zing_new_${++index}">
                              <div class="zing_new_left">
                                  <div class="song_prefix">
                                      <span class="song_number">${
                                        song.number
                                      }</span>
                                      <div class="song_sort"><i class="${
                                        song.status.icon
                                      }"></i>
                                      <div class="song_rank">${
                                        song.status.num == undefined
                                          ? ""
                                          : song.status.num
                                      }</div>
                                      </div>
                                  </div>
  
                                  <div class="song-img">
                                  <img src="${song.image}"
                                      alt="" class="song_thumb" height="40" width="40">
  
                                      <div class="overlay"><i class="fa-solid fa-play"></i></div>
                                  </div>
  
                                  <div class="card_info">
                                      <a class="song_title">${song.name}</a>
                                      <div class="song_artists">
                                       ${song.singers
                                         .map((singer) => {
                                           return `<a>${singer}</a>`;
                                         })
                                         .join(",")}
                          </div>
  
                                  </div>
                              </div>
                              <a class="zing_new_main">${song.info}</a>
                              <div class="zing_new_right">
                              <span class="time"> ${song.duration}</span>
                               <div class="zing_new_right_sub_menu">
                                      <div class="sub_menu_item">
                                          <div class="has_sub_menu">
                                              <i class="bi bi-mic"></i>
                                          </div>
                                          <div class="sub_menu">
                                              Phát cùng lời bài hát
                                          </div>
                                      </div>
                                      <div class="sub_menu_item">
                                          <div class="has_sub_menu">
                                              <i class="bi bi-heart love_sym"></i>
                                          </div>
                                          <div class="sub_menu">
                                              Thêm vào thư viện
                                          </div>
                                      </div>
                                      <div class="sub_menu_item">
                                          <div class="has_sub_menu">
                                              <i class="bi bi-three-dots"></i>
                                          </div>
                                          <div class="sub_menu other">Khác</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          `;
  });
  zingList.innerHTML = data;
}

renderData();

// var isLove = false;
var loveSong = [];
const loves = document.querySelectorAll(".love_sym");
Array.from(loves).forEach((love, index) => {
  love.onclick = function (e) {
    love.classList.toggle("loved");

    const song = love
      .closest(".zing_new_item")
      .querySelector(".song_title").textContent;

    if (love.classList.contains("loved")) {
      love.classList.replace("bi-heart", "bi-suit-heart-fill");
      loveSong.push(song);
      alert(`Bạn đã thêm ${song} vào danh sách yêu thích`);
    } else {
      love.classList.replace("bi-suit-heart-fill", "bi-heart");
      var indexToRemove = loveSong.indexOf(song);
      if (indexToRemove != -1) {
        loveSong.splice(indexToRemove, 1);
      }
      alert(`Bạn đã xóa ${song} vào danh sách yêu thích`);
    }

    console.log(loveSong);
  };
});

// KHi bấm vào biểu tượng trái tim, nó sẽ dc thêm lớp loved
// Nếu trái tim chứa class loved, nó sẽ đổi icon
// Click lần 2, bỏ lớp loved, bỏ trái tim
