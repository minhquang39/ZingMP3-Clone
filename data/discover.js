const songss = [
  {
    name: "Anh sẽ tốt mà",
    path: "./assest/music/anh_se_tot_ma.mp3",
    image: "../assest/image/songs/pic1.jpeg",
    singer: "Thuỳ Chi",
  },
  {
    name: "Cha và con gái",
    path: "../assest/music/cha_va_con_gai.mp3",
    image: "../assest/image/songs/pic2.jpg",
    singer: "Thuỳ Chi",
  },
  {
    name: "Chờ ngày anh nhận ra em",
    path: "../assest/music/cho_ngay_anh_nhan_ra_em.mp3",
    image: "../assest/image/songs/pic3.jpeg",
    singer: "Thuỳ Chi",
  },
  {
    name: "Giấc mơ trưa",
    path: "./assest/music/giac_mo_trua.mp3",
    image: "../assest/image/songs/pic4.jpg",
    singer: "Thuỳ Chi",
  },
  {
    name: "Hơn em chỗ nào",
    path: "./assest/music/hon_em_cho_nao.mp3",
    image: "../assest/image/songs/pic5.jpg",
    singer: "Thuỳ Chi",
  },
  {
    name: "Phiến lá tĩnh lặng",
    path: "./assest/music/phien_la_tinh_lang.mp3",
    image: "../assest/image/songs/pic6.jpg",
    singer: "Thuỳ Chi",
  },
  {
    name: "Thần thoại",
    path: "./assest/music/than_thoai.mp3",
    image: "../assest/image/songs/pic7.png",
    singer: "Thuỳ Chi",
  },
  {
    name: "Xe đạp",
    path: "./assest/music/xe_dap.mp3",
    image: "../assest/image/songs/pic8.jpg",
    singer: "Thuỳ Chi",
  },
];

const SONG_STORAGE = "ZM_SONG";
localStorage.setItem(SONG_STORAGE, JSON.stringify(songss));

const discoverPlaylists = [
  {
    header: "Những ngày đầu hạ",
    playlists: [
      {
        image: "./assest/image/discover_playlist/pic1.jpg",
        content: "V-POP nhẹ nhàng như những tia nắng mỏng manh của ..",
      },
      {
        image: "./assest/image/discover_playlist/pic2.jpg",
        content: "Hạnh phúc trong tình yêu là được bên nhau mỗi ngày",
      },
      {
        image: "./assest/image/discover_playlist/pic3.jpg",
        content: "Nhẹ nhàng chữa lành trái tim bằng giai điệu tích cực",
      },
      {
        image: "./assest/image/discover_playlist/pic4.jpg",
        content: "Đắm mình trong bán đảo V-POP đậm chất nhiệt đới",
      },
    ],
  },
  {
    header: "Remix là lên luôn",
    playlists: [
      {
        image: "./assest/image/discover_playlist/pic5.jpg",
        content: "Đặc sản EDM làng nhạc Việt",
      },
      {
        image: "./assest/image/discover_playlist/pic6.jpg",
        content: "Remix Việt nóng nhất hiện nay, có tại đây",
      },
      {
        image: "./assest/image/discover_playlist/pic7.jpg",
        content: "Quẩy cực sung khi nghe những bản nhạc HIT EDM được Remix",
      },
      {
        image: "./assest/image/discover_playlist/pic8.jpg",
        content: "Sôi động hết cỡ với Series Dance Việt ngày nay",
      },
    ],
  },
  {
    header: "Chill",
    playlists: [
      {
        image: "./assest/image/discover_playlist/pic9.jpg",
        content: "Thả mình vào những giai điệu Lofi Chill nghe là nghiện",
      },
      {
        image: "./assest/image/discover_playlist/pic10.jpg",
        content: "Va vào những giai điệu thư giãn của V-Pop",
      },
      {
        image: "./assest/image/discover_playlist/pic11.jpg",
        content: "Ở đây có những bản hit cực chill, vừa nghe vừa feel",
      },
      {
        image: "./assest/image/discover_playlist/pic12.jpg",
        content: "Khi có những bản nhạc cũ được làm mới một cách thú vị",
      },
    ],
  },
  {
    header: "Tâm trạng tan chậm",
    playlists: [
      {
        image: "./assest/image/discover_playlist/pic13.jpg",
        content: "Thả nỗi buồn vào những âm thanh Lofi nhẹ nhàng",
      },
      {
        image: "./assest/image/discover_playlist/pic14.jpg",
        content: "Người ấy làm trái tim bạn tan vỡ, ấy vậy mà bạn vẫn yêu..",
      },
      {
        image: "./assest/image/discover_playlist/pic15.jpg",
        content: "Chẳng có nơi nào yên bình được như ta bên nhau",
      },
      {
        image: "./assest/image/discover_playlist/pic16.jpg",
        content: "Đóng băng thời gian, tan chầm chậm theo cảm xúc",
      },
    ],
  },
];

const DISCOVER_STORAGE = "ZM_DISCOVER";
localStorage.setItem(DISCOVER_STORAGE, JSON.stringify(discoverPlaylists));

// const listNewPlaylists = [
//   {
//     num: 1,
//     image: "./assest/image/new_playlist/pic1.jpg",
//     name: "MOONLIGHT",
//     singers: ["LUNAS"],
//     time: "20.05.2024",
//   },
//   {
//     num: 2,
//     image: "./assest/image/new_playlist/pic2.jpg",
//     name: "Đau lòng chữ tưởng",
//     singers: ["Thành Đạt", "Dương Hùng Sơn"],
//     time: "17.05.2024",
//   },
//   {
//     num: 3,
//     image: "./assest/image/new_playlist/pic3.jpg",
//     name: "Saigon và em 5 (và mưa)",
//     singers: ["Minh Huy", "IT'S Huy"],
//     time: "20.05.2024",
//   },
//   {
//     num: 4,
//     image: "./assest/image/new_playlist/pic4.jpg",
//     name: "Hứa đợi nhưng chẳng tới",
//     singers: ["Lâm Tuấn", "Vương Thiên Tuấn"],
//     time: "12.05.2024",
//   },
//   {
//     num: 5,
//     image: "./assest/image/new_playlist/pic5.jpg",
//     name: "Mọi thứ để anh lo",
//     singers: ["Hồ Việt Trung"],
//     time: "17.05.2024",
//   },
//   {
//     num: 6,
//     image: "./assest/image/new_playlist/pic6.jpg",
//     name: "Mưa đá",
//     singers: ["Quang Hùng MasterD"],
//     time: "14.05.2024",
//   },
//   {
//     num: 7,
//     image: "./assest/image/new_playlist/pic7.jpg",
//     name: "Họ yêu ai mất rồi (Piano Version)",
//     singers: ["Doãn Hiếu"],
//     time: "18.05.2024",
//   },
//   {
//     num: 8,
//     image: "./assest/image/new_playlist/pic8.jpg",
//     name: "Lệ cay 3",
//     singers: ["Du Thiên"],
//     time: "10.05.2024",
//   },
// ];

// const discover = $(".discover_playlist");
// songss.forEach((song) => {
//   discover.innerHTML += `
//      <div class="col c-4 l-4 m-4">
//                                         <div class="media">
//                                             <div class="media_left">
//                                                 <div class="song_thumb">
//                                                     <img src="${song.image}" alt=""
//                                                         class="discover_img" width="60px" height="60px">
//                                                     <div class="overlay">
//                                                     <i class="fa-solid fa-play play_btn"></i>
//                                                     </div>
//                                                 </div>
//                                                 <div class="song_info">
//                                                     <h3 class="song_title_main">${song.name}</h3>
//                                                     <h3 class="song_singer">${song.singer}</h3>
//                                                     <p class="song_time_release">2 ngày trước</p>
//                                                 </div>
//                                             </div>
//                                             <div class="media_right">
//                                                 <div class="sub_menu_item">
//                                                     <div class="has_sub_menu">
//                                                         <i class="bi bi-three-dots"></i>
//                                                     </div>
//                                                     <div class="sub_menu other">Khác</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//   `;
// });

// const zingDiscovers = Array.from($$(".zm_discover_section"));
// const zingDiscoverHeaders = Array.from($$(".discover_playlist_header"));
// const zingDiscoverWrappers = Array.from($$(".zm_discover_list"));

// discoverPlaylists.forEach((discoverPlaylist, index) => {
//   zingDiscoverHeaders[index].innerHTML = `${discoverPlaylist.header}`;
//   discoverPlaylist.playlists.forEach((playlist) => {
//     zingDiscoverWrappers[index].innerHTML += `
//           <div class="zm_carousel_item col c-3">
//               <div class="playlist_wrapper ">
//                     <div class="zm_card">
//                            <div class="playlist_img" style="background-image: url(${playlist.image});"></div>
//                         <div class="overlay"></div>

//                             <div class="playlist_sub_menu">
//                                             <div class="sub_menu_item">
//                                                 <div class="has_sub_menu">
//                                                      <i class="bi bi-heart love_sym"></i>
//                                                 </div>
//                                                 <div class="sub_menu">
//                                             Thêm vào thư viện
//                                                 </div>
//                                             </div>
//                                             <div class="sub_menu_item">
//                                                 <div class="has_sub_menu playlist_play">
//                                                     <i class="fa-regular fa-circle-play playlist_play"></i>
//                                                 </div>

//                                             </div>
//                                             <div class="sub_menu_item">
//                                                 <div class="has_sub_menu">
//                                                     <i class="bi bi-three-dots"></i>
//                                                 </div>
//                                                 <div class="sub_menu other">Khác</div>
//                                             </div>
//                                         </div>

//                       </div>
//                         <div class="zm_card_content">
//                                     <h3 class="zm__card_content_title">${playlist.content}</h3>

//                         </div>
//                 </div>
//             </div>
//     `;
//   });
// });

// const discoverChances = $(".zm_discover_chance_wrapper");
// listNewPlaylists.forEach((listNewPlaylist) => {
//   discoverChances.innerHTML += `
//         <div class="col c-4 l-4 m-4">
//             <div class="zm_discover_media">
//                                                         <div class="media_left">

//                                                             <img src="${
//                                                               listNewPlaylist.image
//                                                             }" alt=""
//                                                                 class="media_left_thumb">
//                                                             <div class="overlay">
//                                                                 <i class="fa-regular fa-circle-play playlist_play"></i>
//                                                             </div>
//                                                         </div>
//                                                         <div class="media_content">
//                                                             <div class="media_content_top">
//                                                                 <h3 class="media_title">${
//                                                                   listNewPlaylist.name
//                                                                 }</h3>

//                                                            ${listNewPlaylist.singers
//                                                              .map(
//                                                                (singer) => `
//     <a href="#" class="subtitle is-ghost">
//       ${singer}
//     </a>
//   `
//                                                              )
//                                                              .join(",")}

//                                                             </div>
//                                                             <div class="media_content_bot">
//                                                                 <span class="order">#${
//                                                                   listNewPlaylist.num
//                                                                 }</span>
//                                                                 <span class="time_realesed">${
//                                                                   listNewPlaylist.time
//                                                                 }</span>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                 </div>
//   `;
// });
// discoverChances.innerHTML += `
//             <div class="col c-4 l-4 m-4">
//                                                     <div class="zm_discover_media empty-item">

//                                                         Xem tất cả
//                                                     </div>

//                                                 </div>
// `;

// const discoverBtnLeft = $(".gallery_discover_prev");
// const discoverBtnRight = $(".gallery_discover_next");

// console.log(discoverChances.firstChild);
