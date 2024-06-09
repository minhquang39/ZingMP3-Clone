const songss = [
  {
    name: "Anh sẽ tốt mà",
    path: "./assest/music/anh_se_tot_ma.mp3",
    image: "./assest/image/songs/pic1.jpeg",
    singer: "Thuỳ Chi",
    country: "vn",
  },
  {
    name: "Cha và con gái",
    path: "./assest/music/cha_va_con_gai.mp3",
    image: "./assest/image/songs/pic2.jpg",
    singer: "Thuỳ Chi",
    country: "vn",
  },
  {
    name: "Chờ ngày anh nhận ra em",
    path: "./assest/music/cho_ngay_anh_nhan_ra_em.mp3",
    image: "./assest/image/songs/pic3.jpeg",
    singer: "Thuỳ Chi",
    country: "vn",
  },
  {
    name: "Giấc mơ trưa",
    path: "./assest/music/giac_mo_trua.mp3",
    image: "./assest/image/songs/pic4.jpg",
    singer: "Thuỳ Chi",
    country: "vn",
  },
  {
    name: "Hơn em chỗ nào",
    path: "./assest/music/hon_em_cho_nao.mp3",
    image: "./assest/image/songs/pic5.jpg",
    singer: "Thuỳ Chi",
    country: "vn",
  },
  {
    name: "Phiến lá tĩnh lặng",
    path: "./assest/music/phien_la_tinh_lang.mp3",
    image: "./assest/image/songs/pic6.jpg",
    singer: "Thuỳ Chi",
    country: "vn",
  },
  {
    name: "Thần thoại",
    path: "./assest/music/than_thoai.mp3",
    image: "./assest/image/songs/pic7.png",
    singer: "Thuỳ Chi",
    country: "vn",
  },
  {
    name: "Xe đạp",
    path: "./assest/music/xe_dap.mp3",
    image: "./assest/image/songs/pic8.jpg",
    singer: "Thuỳ Chi",
    country: "vn",
  },
  {
    name: "Tell Me It's Not a Dream(고장난걸까)",
    path: "./assest/music/tell_me_not_a_dream.mp3",
    image: "./assest/image/songs/pic9.jpg",
    singer: "10 CM",
    country: "other",
  },
  {
    name: "Collide",
    path: "./assest/music/collide.mp3",
    image: "./assest/image/songs/pic10.jpg",
    singer: "1Justine Skye",
    country: "other",
  },
  {
    name: "Người theo đuổi ánh sáng",
    path: "./assest/music/nguoi_theo_duoi_anh_sang.mp3",
    image: "./assest/image/songs/pic11.jpg",
    singer: "Từ Vi",
    country: "other",
  },
  {
    name: "Your lie in april",
    path: "./assest/music/your_lie_in_april.mp3",
    image: "./assest/image/songs/pic12.jpg",
    singer: "Hikaru Nara",
    country: "other",
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

const listNewPlaylists = [
  {
    num: 1,
    image: "./assest/image/new_playlist/pic1.jpg",
    name: "MOONLIGHT",
    singers: ["LUNAS"],
    time: "20.05.2024",
  },
  {
    num: 2,
    image: "./assest/image/new_playlist/pic2.jpg",
    name: "Đau lòng chữ tưởng",
    singers: ["Thành Đạt", "Dương Hùng Sơn"],
    time: "17.05.2024",
  },
  {
    num: 3,
    image: "./assest/image/new_playlist/pic3.jpg",
    name: "Saigon và em 5 (và mưa)",
    singers: ["Minh Huy", "IT'S Huy"],
    time: "20.05.2024",
  },
  {
    num: 4,
    image: "./assest/image/new_playlist/pic4.jpg",
    name: "Hứa đợi nhưng chẳng tới",
    singers: ["Lâm Tuấn", "Vương Thiên Tuấn"],
    time: "12.05.2024",
  },
  {
    num: 5,
    image: "./assest/image/new_playlist/pic5.jpg",
    name: "Mọi thứ để anh lo",
    singers: ["Hồ Việt Trung"],
    time: "17.05.2024",
  },
  {
    num: 6,
    image: "./assest/image/new_playlist/pic6.jpg",
    name: "Mưa đá",
    singers: ["Quang Hùng MasterD"],
    time: "14.05.2024",
  },
  {
    num: 7,
    image: "./assest/image/new_playlist/pic7.jpg",
    name: "Họ yêu ai mất rồi (Piano Version)",
    singers: ["Doãn Hiếu"],
    time: "18.05.2024",
  },
  {
    num: 8,
    image: "./assest/image/new_playlist/pic8.jpg",
    name: "Lệ cay 3",
    singers: ["Du Thiên"],
    time: "10.05.2024",
  },
];

const NEWSONG_STORAGE = "ZM_NEW_SONG";
localStorage.setItem(NEWSONG_STORAGE, JSON.stringify(listNewPlaylists));

const listFavPlaylists = [
  {
    header: "Nổi bật",
    playlists: [
      {
        name: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
        singles: ["MONO", "Jack", "Phát Huy T4"],
        image: "./assest/image/fav_playlist/pic1.jpg",
      },
      {
        name: "Top 100 Pop Âu Mỹ Hay Nhất",
        singles: ["Adele", "Miley Cyrus", "Olivia", "Rodrigo"],
        image: "./assest/image/fav_playlist/pic2.jpg",
      },
      {
        name: "Top 100 Nhạc Hàn Quốc Hay Nhất",
        singles: ["Jung kook", "JISOO", "NewJeans"],
        image: "./assest/image/fav_playlist/pic3.jpg",
      },
      {
        name: "Top 100 Nhạc Rap Việt Nam Hay Nhất",
        singles: ["HIEUTHUHAI", "Pháo", "B Ray"],
        image: "./assest/image/fav_playlist/pic4.jpg",
      },
    ],
  },
  {
    header: "Dành Cho Fan aespa",
    playlists: [
      {
        name: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
        singles: ["aespa"],
        image: "./assest/image/fav_playlist/pic5.jpg",
      },
      {
        name: "Top 100 Pop Âu Mỹ Hay Nhất",
        singles: ["aespa"],
        image: "./assest/image/fav_playlist/pic6.jpg",
      },
      {
        name: "Top 100 Nhạc Hàn Quốc Hay Nhất",
        singles: ["aespa"],
        image: "./assest/image/fav_playlist/pic7.jpg",
      },
      {
        name: "Top 100 Nhạc Rap Việt Nam Hay Nhất",
        singles: ["aespa"],
        image: "./assest/image/fav_playlist/pic8.jpg",
      },
    ],
  },
  {
    header: "Album Hot",
    playlists: [
      {
        name: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
        singles: ["aespa"],
        image: "./assest/image/fav_playlist/pic9.jpg",
      },
      {
        name: "Top 100 Pop Âu Mỹ Hay Nhất",
        singles: ["aespa"],
        image: "./assest/image/fav_playlist/pic10.jpg",
      },
      {
        name: "Top 100 Nhạc Hàn Quốc Hay Nhất",
        singles: ["aespa"],
        image: "./assest/image/fav_playlist/pic11.jpg",
      },
      {
        name: "Top 100 Nhạc Rap Việt Nam Hay Nhất",
        singles: ["aespa"],
        image: "./assest/image/fav_playlist/pic12.jpg",
      },
    ],
  },
];

const FAV_STORE = "ZM_FAV_PLAYLIST";
localStorage.setItem(FAV_STORE, JSON.stringify(listFavPlaylists));
