const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
// Bảng xếp hạng nhạc mới
const zingNewSong = $(".zing_new_list");

// Top 100
const zing_sections = Array.from($$(".zing_section"));
const zing_section_mains = Array.from($$(".zing_section_main"));
const zing_headers = Array.from($$(".zing_section_header"));

// Chủ đề và thể loại
const categoryHeaders = document.querySelectorAll(".zm_section_title");
const categoryPlaylists = document.querySelectorAll(".zm_collabed_list");

// const zingReadmores = Array.from($$(".zing_topic_readmore"));

const specialPlaylistWrapper = $(".zm_collabed_list.row.special_playlist");

const normalPlaylistHeader = Array.from($$(".normal_playlist_header"));
const normalPlaylistWrapper = Array.from($$(".zm_normal_playlist.row"));

// Radio
// const listRadio = $(".radio_main");
const radioWrappers = Array.from($$(".radio_main"));

// Khám phá
const discover = $(".discover_playlist");
const vietnamSong = $(".discover_playlist.vietnam-playlist");
const otherSong = $(".discover_playlist.other-playlist");

//
//

const zingDiscovers = Array.from($$(".zm_discover_section"));
const zingDiscoverHeaders = Array.from($$(".discover_playlist_header"));
const zingDiscoverWrappers = Array.from($$(".zm_discover_list"));

const songList = $(".zm_discover_playlists");

const discoverNewSong = $(".zm_discover_chance_wrapper");

const favPlaylists = Array.from($$(".fav_discover_section"));
const favPlaylistNames = Array.from($$(".fav_playlist_header"));
const favPlaylistWrappers = Array.from($$(".fav_discover_list"));

const partnerList = $(".zm_partner_wrapper");
// Phát tiếp theo
const miniThumb = $(".next_song_thumb_img");
const nextSongName = $(".next_song_name");
const nextSongArtist = $(".next_song_artist");

// Audio
const audio = $("#audio");
const playBtn = $(".action-play");
const prevBtn = $(".action-backward");
const nextBtn = $(".action-forward");

const imageThumb = $(".media_thumbnail");
const songName = $(".song_title_item");
const songArtist = $(".song_subtitle_item");

const volume = $("#volume");
const volumeBtn = $(".volume-btn");

const progress = $("#progress");
const trackTime = $(".track_time");
const trackTimeVolume = $(".track_time_volume");
const repeatBtn = $(".action-repeat");
const randomBtn = $(".action-random");

const timeRight = $(".time_right");
const timeLeft = $(".time_left");
const app = {
  currentIndex: 0,
  nextSong: 0,
  // randomIndex:,
  isPlaying: false,
  isVolume: false,
  isRepeat: false,
  isRandom: false,
  randomSong: [0],
  mediaCount: 0,

  newSongs: JSON.parse(localStorage.getItem(RANK_STORAGE)),
  top100s: JSON.parse(localStorage.getItem(top100_STORAGE)),
  categorys: JSON.parse(localStorage.getItem(CATEGORY_STORAGE)),
  specialPlaylists: JSON.parse(
    localStorage.getItem(specialPlaylistList_STORAGE)
  ),
  normalPlaylists: JSON.parse(localStorage.getItem(normalPlaylist_STORAGE)),
  radios: JSON.parse(localStorage.getItem(RADIO_STORAGE)),
  // Nhạc của Thùy Chi
  songs: JSON.parse(localStorage.getItem(SONG_STORAGE)),
  discoverPlaylists: JSON.parse(localStorage.getItem(DISCOVER_STORAGE)),
  newPlaylists: JSON.parse(localStorage.getItem(NEWSONG_STORAGE)),
  favPlaylists: JSON.parse(localStorage.getItem(FAV_STORE)),
  partners: JSON.parse(localStorage.getItem(PARTNER_STORAGE)),
  get currentSong() {
    return this.songs[this.currentIndex];
  },

  renderNewSongs: function () {
    this.newSongs.forEach((song, index) => {
      zingNewSong.innerHTML += `
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
  },

  renderTop100: function () {
    this.top100s.forEach((category, index) => {
      zing_headers[index].innerHTML = `${category.header}`;
      category.playlists.forEach((playlist) => {
        zing_sections[index].innerHTML += `
          <div class="zm_carousel_item col c-3">
              <div class="playlist_wrapper">
                    <div class="zm_card">
                           <div class="playlist_img" style="background-image: url(${
                             playlist.image
                           });"></div>
                        <div class="overlay"></div>

                            <div class="playlist_sub_menu">
                                            <div class="sub_menu_item">
                                                <div class="has_sub_menu">
                                                     <i class="bi bi-heart love_sym"></i>
                                                </div>
                                                <div class="sub_menu">
                                                    Thêm vào thư viện
                                                </div>
                                            </div>
                                            <div class="sub_menu_item">
                                                <div class="has_sub_menu playlist_play">
                                                    <i class="fa-regular fa-circle-play playlist_play"></i>
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
                        <div class="zm_card_content">
                                    <h3 class="zm__card_content_title">${
                                      playlist.name
                                    }</h3>
                                 <h4 class="zm__card_content_sub_title">
                                  ${playlist.singles
                                    .map((single) => `<a>${single}</a>`)
                                    .join(",")}
                                    ...
                                  </h4>

                        </div>
                </div>
            </div>
    `;
      });
    });
  },

  renderCategory: function () {
    categorys.forEach((category, index) => {
      categoryHeaders[index].innerHTML = `${category.header}`;

      // Kiểm tra biến readmore nếu có nút readmore thì hiển thị trước theo yêu cầu nếu không thì hiển thị cả danh sách
      let displayCount = category.isReadmore
        ? category.readmoreNum
        : category.contents.length;

      // Cắt lấy số phần tử dc yêu cầu hiển thị
      category.contents.slice(0, displayCount).forEach((content, idx) => {
        const newContent = document.createElement("div");
        newContent.classList.add("zm_collabed_playlist", "col", "c-4");
        newContent.innerHTML = `
        <div class="collabed_playlist_wrapper">
          <div class="playlist_zm_card">
            <div class="zm_collabed_info __playlist" style="background-image: url(${category.images[idx]});">
            </div>
            <h3 class="zm_collabed_title">${content}</h3>
          </div>
        </div>
    `;
        categoryPlaylists[index].appendChild(newContent);
      });

      if (category.isReadmore) {
        const readMoreZing = document.createElement("div");
        readMoreZing.classList.add("zing_topic_readmore");
        readMoreZing.innerHTML = `<a href='#'>TẤT CẢ</a>`;
        categoryPlaylists[index].appendChild(readMoreZing);
      }
    });
  },

  renderSpecialPlaylist: function () {
    specialPlaylists.forEach((specialPlaylist, index) => {
      specialPlaylistWrapper.innerHTML += `
         <div class="zm_collabed_playlist special_playlist col c-4">
                                    <div class="collabed_playlist_wrapper">
                                        <div class="playlist_zm_card">
                                            <div class="zm_collabed_info __playlist"
                                                style="background-image: url(${
                                                  specialPlaylist.image
                                                });">
                                            </div>
                                            <h3 class="zm_collabed_title">${
                                              specialPlaylist.header
                                            }</h3>
                                        </div>
                                        <div class="thumb_images">
                                            ${specialPlaylist.playlists
                                              .map((playlist) => {
                                                return `
                                                 <div class="thumb_image"
                                                style="background-image: url(${playlist});">
                                                  </div>
                                              `;
                                              })
                                              .join("")}
                                        </div>
                                    </div>
                                </div>
  `;
    });
  },

  renderNormalPlaylist: function () {
    normalPlaylists.forEach((normalPlaylist, index) => {
      normalPlaylistHeader[index].innerHTML = `${normalPlaylist.header}`;
      normalPlaylist.playlists.forEach((playlist, idx) => {
        normalPlaylistWrapper[index].innerHTML += `
          <div class="zm_carousel_item col c-3">
              <div class="playlist_wrapper">
                    <div class="zm_card">
                           <div class="playlist_img" style="background-image: url(${
                             playlist.image
                           });"></div>
                        <div class="overlay"></div>

                            <div class="playlist_sub_menu">
                                            <div class="sub_menu_item">
                                                <div class="has_sub_menu">
                                                     <i class="bi bi-heart love_sym"></i>
                                                </div>
                                                <div class="sub_menu">
                                            Thêm vào thư viện
                                                </div>
                                            </div>
                                            <div class="sub_menu_item">
                                                <div class="has_sub_menu playlist_play">
                                                    <i class="fa-regular fa-circle-play playlist_play"></i>
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
                        <div class="zm_card_content">
                                    <h3 class="zm__card_content_title">${
                                      playlist.name
                                    }</h3>
                                 <h4 class="zm__card_content_sub_title">
                                  ${playlist.singers
                                    .map((singer) => `<a>${singer}</a>`)
                                    .join(",")}
                                    ...
                                  </h4>

                        </div>
                </div>
            </div>
    `;
      });
    });
  },

  showAllContent(e) {
    const parentPlaylist = e.target.closest(".zm_collabed_list");
    const readmore = parentPlaylist.querySelector(".zing_topic_readmore");
    const parentNumberPlaylist = Array.from(categoryPlaylists).findIndex(
      (item) => item === parentPlaylist
    );

    parentPlaylist.innerHTML = "";
    this.categorys[parentNumberPlaylist].contents.forEach((content, idx) => {
      parentPlaylist.innerHTML += `
    <div class="zm_collabed_playlist col c-4">
      <div class="collabed_playlist_wrapper">
        <div class="playlist_zm_card">
          <div class="zm_collabed_info __playlist" style="background-image: url(${this.categorys[parentNumberPlaylist].images[idx]});">
          </div>
          <h3 class="zm_collabed_title">${content}</h3>
        </div>
      </div>
    </div>
  `;
    });
  },

  renderRadio: function () {
    radioWrappers.forEach((radioWrapper) => {
      this.radios.forEach((radio, index) => {
        radioWrapper.innerHTML += `
               <div class="radio_live col c-2 l-1-7">
                                            <div class="radio_live_main">
                                                <div class="radio_live_top">

                                                    <div class="radio_card_display">
                                                        <div class="radio_card"
                                                            style="background-image: url(${radio.image});">
                                                        </div>
                                                    </div>

                                                    <svg class="svg" width="100%" height="100%" viewBox="0 0 100 100">
                                                        <circle class="svg-circle-bg" stroke="rgba(255, 255, 255, 0.2)"
                                                            cx="50" cy="50" r="48.75" stroke-width="2.5">
                                                        </circle>
                                                        <circle class="svg-circle" stroke="#ff4b4a" cx="50" cy="50"
                                                            r="48.75" stroke-width="2.5" stroke-linecap="round"
                                                            stroke-dasharray="306.3052837250048" stroke-dashoffset="0"
                                                            style="transition: stroke-dashoffset 850ms ease-in-out 0s;">
                                                        </circle>
                                                    </svg>
                                                    <div class="overlay">
                                                        <i class="fa-regular fa-circle-play play_radio"></i>
                                                    </div>
                                                </div>
                                                <div class="radio_sub_card"
                                                    style="background-image: url(${radio.logo});">
                                                </div>
                                                <div class="radio_label">
                                                    LIVE
                                                </div>
                                                <div class="radio_live_bot">
                                                    <div class="radio_live_title">${radio.name}</div>
                                                    <div class="radio_live_numbers">${radio.viewers} đang nghe</div>
                                                </div>
                                            </div>
                                        </div>
  `;
      });
    });
  },

  renderSong: function () {
    function createSong(song, index) {
      return `
                                      <div class="col c-4 l-4 m-4">
                                        <div class="media" data-index="${index}">
                                            <div class="media_left">
                                                <div class="song_thumb">
                                                    <img src="${
                                                      song.image
                                                    }" alt=""
                                                        class="discover_img" width="" height="">
                                                        <div class="overlay">
                                                        <i class="fa-solid fa-play play_btn play_btn_discover"></i>
                                                        
                                                        <i class="icon action-playing action_playing_discover ic-gif-playing-white"></i>
                                                        </div>
                                                        </div>
                                                <div class="song_info">
                                                    <h3 class="song_title_main">${
                                                      song.name
                                                    }</h3>
                                                    <h3 class="song_singer">${
                                                      song.singer
                                                    }</h3>
                                                    <p class="song_time_release">${Math.floor(
                                                      Math.random() * 30
                                                    )} ngày trước</p>
                                                </div>
                                            </div>
                                            <div class="media_right">
                                                <div class="sub_menu_item">
                                                    <div class="has_sub_menu">
                                                        <i class="bi bi-three-dots discover-option"></i>
                                                    </div>
                                                    <div class="sub_menu other">Khác</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
  `;
    }

    this.songs.forEach((song, index) => {
      discover.innerHTML += createSong(song, index);

      if (song.country === "vn") {
        vietnamSong.innerHTML += createSong(song, index);
      } else if (song.country === "other") {
        otherSong.innerHTML += createSong(song, index);
      }
    });
  },

  renderDiscoverPlaylist: function () {
    this.discoverPlaylists.forEach((discoverPlaylist, index) => {
      zingDiscoverHeaders[index].innerHTML = `${discoverPlaylist.header}`;
      discoverPlaylist.playlists.forEach((playlist) => {
        zingDiscoverWrappers[index].innerHTML += `
          <div class="zm_carousel_item col c-3">
              <div class="playlist_wrapper ">
                    <div class="zm_card">
                           <div class="playlist_img" style="background-image: url(${playlist.image});"></div>
                        <div class="overlay"></div>

                            <div class="playlist_sub_menu">
                                            <div class="sub_menu_item">
                                                <div class="has_sub_menu">
                                                     <i class="bi bi-heart love_sym"></i>
                                                </div>
                                                <div class="sub_menu">
                                            Thêm vào thư viện
                                                </div>
                                            </div>
                                            <div class="sub_menu_item">
                                                <div class="has_sub_menu playlist_play">
                                                    <i class="fa-regular fa-circle-play playlist_play"></i>
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
                        <div class="zm_card_content">
                                    <h3 class="zm__card_content_title">${playlist.content}</h3>

                        </div>
                </div>
            </div>
    `;
      });
    });
  },

  renderNewPlaylist: function () {
    this.newPlaylists.forEach((listNewPlaylist) => {
      discoverNewSong.innerHTML += `
        <div class="col c-4 l-4 m-4">
            <div class="zm_discover_media">
                                                        <div class="media_left">

                                                            <img src="${
                                                              listNewPlaylist.image
                                                            }" alt=""
                                                                class="media_left_thumb">
                                                            <div class="overlay">
                                                                <i class="fa-regular fa-circle-play playlist_play"></i>
                                                            </div>
                                                        </div>
                                                        <div class="media_content">
                                                            <div class="media_content_top">
                                                                <h3 class="media_title">${
                                                                  listNewPlaylist.name
                                                                }</h3>

                                                           ${listNewPlaylist.singers
                                                             .map(
                                                               (singer) => `
                                                              <a href="#" class="subtitle is-ghost">
                                                                ${singer}
                                                              </a>
                                                            `
                                                             )
                                                             .join(",")}

                                                            </div>
                                                            <div class="media_content_bot">
                                                                <span class="order">#${
                                                                  listNewPlaylist.num
                                                                }</span>
                                                                <span class="time_realesed">${
                                                                  listNewPlaylist.time
                                                                }</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
  `;
    });
    discoverNewSong.innerHTML += `
            <div class="col c-4 l-4 m-4">
                                                    <div class="zm_discover_media empty-item">

                                                        Xem tất cả
                                                    </div>

                                                </div>
`;
  },

  renderFavPlaylist() {
    this.favPlaylists.forEach((favPlaylist, index) => {
      favPlaylistNames[index].innerHTML = `${favPlaylist.header}`;
      favPlaylist.playlists.forEach((playlist) => {
        favPlaylistWrappers[index].innerHTML += `
          <div class="zm_carousel_item col c-3">
              <div class="playlist_wrapper">
                    <div class="zm_card">
                           <div class="playlist_img" style="background-image: url(${
                             playlist.image
                           });"></div>
                        <div class="overlay"></div>

                            <div class="playlist_sub_menu">
                                            <div class="sub_menu_item">
                                                <div class="has_sub_menu">
                                                     <i class="bi bi-heart love_sym"></i>
                                                </div>
                                                <div class="sub_menu">
                                                    Thêm vào thư viện
                                                </div>
                                            </div>
                                            <div class="sub_menu_item">
                                                <div class="has_sub_menu playlist_play">
                                                    <i class="fa-regular fa-circle-play playlist_play"></i>
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
                        <div class="zm_card_content">
                                    <h3 class="zm__card_content_title">${
                                      playlist.name
                                    }</h3>
                                 <h4 class="zm__card_content_sub_title">
                                  ${playlist.singles
                                    .map((single) => `<a>${single}</a>`)
                                    .join(",")}
                                    
                                  </h4>

                        </div>
                </div>
            </div>
    `;
      });
    });
  },

  renderPartner() {
    this.partners.forEach((partner) => {
      partnerList.innerHTML += `
          <div class="zm_partner_item">
                                    <div class="content">
                                        <img src="${partner}" alt="" class="zm_partner_img">
                                    </div>
                                </div>
      `;
    });
  },

  renderCurrentSong: function () {
    audio.src = this.currentSong.path;
    imageThumb.src = this.currentSong.image;
    songName.innerHTML = this.currentSong.name;
    songArtist.innerHTML = this.currentSong.singer;
  },

  renderNextSong: function () {
    if (this.isRandom) {
      this.nextSong = this.playRandomSong();
    } else if (this.isRepeat) {
      this.nextSong = this.currentIndex;
    } else {
      this.nextSong = this.currentIndex + 1;
      if (this.nextSong == this.songs.length) {
        this.nextSong = 0;
      }
    }
    miniThumb.src = this.songs[this.nextSong].image;
    nextSongName.innerHTML = this.songs[this.nextSong].name;
    nextSongArtist.innerHTML = this.songs[this.nextSong].singer;
  },

  getDuration: function () {
    const timeEnd = Math.floor(audio.duration);
    const minute = Math.floor(timeEnd / 60);
    const second = Math.floor(timeEnd % 60);
    const formatSecond = second < 10 ? `0${second}` : second;

    timeRight.innerHTML = `${minute}:${formatSecond}`;
  },

  getTimeNow: function (time) {
    const minute = Math.floor(time / 60);
    const second = Math.floor(time % 60);
    const formatSecond = second < 10 ? `0${second}` : second;
    timeLeft.innerHTML = `${minute}:${formatSecond}`;
  },

  playRandomSong() {
    // Khởi tạo biến randomIndex bằng giá trị currentIndex
    // Vì bài hát khi vào trình duyệt có index là 0, nên set giá trị của randomSong=0 và randomIndex =0
    // let randomIndex = 0;
    this.randomIndex = this.currentIndex;

    // Tạo một mảng chứa các bài hát đã được phát, nếu số lượng mảng ngẫu nhiên bằng số lượng bài hát trong danh sách, làm mới mảng
    if (this.randomSong.length === this.songs.length) {
      this.randomSong = [];
      this.randomIndex = 0;
    }

    // Khi mảng chứa bài hát ngẫu nhiên chứa phần tử randomIndex, thực hiện lệnh gán số ngẫu nhiên cho randomIndex
    while (this.randomSong.includes(this.randomIndex)) {
      this.randomIndex = Math.floor(Math.random() * this.songs.length);
    }

    // Thêm biến randomIndex vào mảng phát ngẫu nhiên
    this.randomSong.push(this.randomIndex);
    return this.randomIndex;
  },

  handleEvents: function () {
    // Tạo biến lưu giá trị khởi tạo của volume
    var oldVolume = volume.value;
    var volumeAtZero = false;
    const medias = Array.from($$(".media"));
    medias[0].classList.add("primary");
    const _this = this;
    // Xử lý sự kiện nút readmore
    const zingReadmores = Array.from($$(".zing_topic_readmore"));
    zingReadmores.forEach((zingReadmore) => {
      zingReadmore.onclick = (e) => {
        this.showAllContent(e);
      };
    });

    // Xử lý sự kiện quay imageThumb
    const imageThumbAnimate = imageThumb.animate(
      [
        {
          transform: "rotate(360deg)",
        },
      ],
      {
        duration: 10000,
        iterations: Infinity,
        easing: "linear",
        direction: "alternate",
      }
    );
    // Dừng image thumb mặc định
    imageThumbAnimate.pause();

    playBtn.onclick = (e) => {
      // Khi ấn nút play thì thay đổi trạng thái playing
      this.isPlaying = !this.isPlaying;

      // Nếu playing là true thì bật nhạc, thay đổi icon
      // Nếu playing là fasle thì tắt nhạc, thay đổi icon
      const currentPlaying = $(".media.playing") || $(".media.primary");
      if (currentPlaying) {
        currentPlaying.classList.remove("playing");
      }
      if (this.isPlaying) {
        audio.play();
        playBtn.classList.replace("bi-play-circle", "bi-pause-circle");
        medias[_this.currentIndex].classList.add("playing");
      } else {
        audio.pause();
        playBtn.classList.replace("bi-pause-circle", "bi-play-circle");
        medias[_this.currentIndex].classList.remove("playing");
      }
    };

    nextBtn.onclick = function (e) {
      const currentPlaying = $(".media.playing") || $(".media.primary");
      if (currentPlaying) {
        currentPlaying.classList.remove("playing", "primary");
      }
      if (_this.isRandom) {
        _this.currentIndex = _this.nextSong;
      } else if (_this.isRepeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        _this.currentIndex++;
        if (_this.currentIndex === _this.songs.length) {
          _this.currentIndex = 0;
        }
      }
      medias[_this.currentIndex].classList.add("playing", "primary");

      _this.renderCurrentSong();
      _this.isPlaying = true;
      audio.play();
      playBtn.classList.replace("bi-play-circle", "bi-pause-circle");
      progress.value = 0;
    };

    prevBtn.onclick = function (e) {
      const currentPlaying = $(".media.playing") || $(".media.primary");
      if (currentPlaying) {
        currentPlaying.classList.remove("playing", "primary");
      }
      if (_this.isRandom) {
        _this.currentIndex = _this.nextSong;
      } else if (_this.isRepeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        _this.currentIndex--;
        if (_this.currentIndex < 0) {
          _this.currentIndex = _this.songs.length - 1;
        }
      }
      medias[_this.currentIndex].classList.add("playing", "primary");

      _this.renderCurrentSong();
      _this.isPlaying = true;
      audio.play();
      playBtn.classList.replace("bi-play-circle", "bi-pause-circle");
    };

    audio.onplay = function (e) {
      imageThumbAnimate.play();
    };

    audio.onpause = function () {
      imageThumbAnimate.pause();
      // playBtn.classList.replace("fa-circle-pause", "fa-circle-play");
      // this.isPlaying = true;
    };

    audio.onended = function () {
      // Nếu chế độ lặp lại được bật thì khi kết thúc bài hát sẽ hát lại bài đó, nếu không sẽ next sang bài mới
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Hiển thị thời gian bài hát khi trình duyệt tải xong audio
    audio.onloadedmetadata = function () {
      _this.getDuration();
      _this.renderNextSong();
    };

    // Xử lý sự kiện tăng giảm volume
    volume.onchange = function (e) {
      audio.volume = volume.value;
      oldVolume = volume.value;
      trackTimeVolume.style.width = volume.value * 100 + "%";

      if (volume.value >= 0.5) {
        volumeBtn.classList.remove("fa-volume-low");
        volumeBtn.classList.remove("fa-volume-xmark");
        volumeBtn.classList.add("fa-volume-high");
        volumeAtZero = false;
      } else if (volume.value > 0 && volume.value < 0.5) {
        volumeBtn.classList.add("fa-volume-low");
        volumeBtn.classList.remove("fa-volume-high");
        volumeBtn.classList.remove("fa-volume-xmark");
        volumeAtZero = false;
      } else if (volume.value == 0) {
        volumeBtn.classList.remove("fa-volume-low");
        volumeBtn.classList.remove("fa-volume-high");
        volumeBtn.classList.add("fa-volume-xmark");
        _this.isVolume = true;
        volumeAtZero = true;
      }
    };
    // Xử lý sự kiện click nút volume
    volumeBtn.onclick = function () {
      // _this.isVolume = !_this.isVolume;

      if (volumeAtZero) {
        volume.value = 1;
        audio.volume = 1;
        oldVolume = 1;
        volumeBtn.classList.remove("fa-volume-xmark");
        volumeBtn.classList.add("fa-volume-high");
        volumeAtZero = false;
      }
      _this.isVolume = !_this.isVolume;

      if (_this.isVolume) {
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        volume.value = 0;
        audio.volume = 0;
        trackTimeVolume.style.width = volume.value * 100 + "%";
      } else {
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
        volume.value = oldVolume;
        audio.volume = volume.value;
        trackTimeVolume.style.width = volume.value * 100 + "%";
      }
    };

    // Xử lý sự kiện seek progress
    progress.onchange = function () {
      const progressTime = (progress.value * audio.duration) / 100;
      audio.currentTime = progressTime;

      _this.isPlaying = true;
      playBtn.classList.replace("bi-play-circle", "bi-pause-circle");
      audio.play();
    };
    // Xử lý value progress
    audio.ontimeupdate = function () {
      const progressValue = Math.floor(
        (audio.currentTime / audio.duration) * 100
      );
      progress.value = progressValue;

      _this.getTimeNow(Math.floor(audio.currentTime));
      trackTime.style.width = progressValue + "%";
    };

    // Xử lý chức năng lặp bài hát khi kết thúc bài
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      if (_this.isRepeat) {
        repeatBtn.classList.add("is-active");
        _this.renderNextSong();
      } else {
        repeatBtn.classList.remove("is-active");
        _this.renderNextSong();
      }
    };

    //Xử lý sự kiện click nút random
    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom;
      if (_this.isRandom) {
        randomBtn.classList.add("is-active");
        _this.renderNextSong();
      } else {
        randomBtn.classList.remove("is-active");
        _this.renderNextSong();
      }
    };

    // Xử lý sự kiện chọn bài hát theo ý
    songList.onclick = function (e) {
      const song = e.target.closest(".media");

      if (song && !e.target.closest(".discover-option")) {
        const currentPlaying =
          $(".media.playing.primary") || $(".media.primary");
        if (currentPlaying) {
          currentPlaying.classList.remove("playing", "primary");
        }

        song.classList.add("playing", "primary");
        // Cập nhật chỉ số bài hát hiện tại và phát nhạc
        _this.currentIndex = parseInt(song.dataset.index);
        _this.renderCurrentSong();
        audio.play();
        playBtn.classList.replace("bi-play-circle", "bi-pause-circle");
        _this.isPlaying = true;
      }
    };

    // Hiển thị bài hát đầu tiên khi vào trình duyệt
    this.renderCurrentSong();
  },

  handleDom: function () {
    const newSongList = document.querySelector(".zm_discover_chance_wrapper");
    const leftNewSongList = document.querySelector(
      ".zm_discover_chance_body .gallery_discover_prev"
    );
    const rightNewSongList = document.querySelector(
      ".zm_discover_chance_body .gallery_discover_next"
    );

    const radioContainers = [...$$(".radio_main")];
    const leftRadio = [...$$(".zm_radio_left")];
    const rightRadio = [...$$(".zm_radio_right")];
    function changeSlide(slideContainer, step) {
      if (slideContainer) {
        const firstSlideWidth = slideContainer.firstElementChild.clientWidth;

        slideContainer.scrollLeft += firstSlideWidth * step;

        if (slideContainer.scrollLeft >= slideContainer.scrollWidth) {
          slideContainer.scrollLeft = 0;
        }
      }
    }

    leftNewSongList.onclick = () => changeSlide(newSongList, -3);
    rightNewSongList.onclick = () => changeSlide(newSongList, 3);

    leftRadio[0].onclick = function () {
      changeSlide(radioContainers[0], -3);
    };
    rightRadio[0].onclick = function () {
      changeSlide(radioContainers[0], 3);
    };

    leftRadio[1].onclick = function () {
      changeSlide(radioContainers[1], -3);
    };
    rightRadio[1].onclick = function () {
      changeSlide(radioContainers[1], 3);
    };

    //Xử lý sự kiện ở ô input
    const input_header = document.querySelector(".header_search_input");
    const search_header = input_header.parentElement;
    const search_history = document.querySelector(".header_search_history");
    const header_close = document.querySelector(".header_search_close_right");

    input_header.onclick = function () {
      input_header.style.backgroundColor = "#34224f";
      search_header.style.backgroundColor = "#34224f";
      search_history.style.display = "block";
    };

    input_header.oninput = function () {
      var inputValue = input_header.value;
      if (inputValue.length > 0) {
        header_close.style.display = "block";
      } else {
        header_close.style.display = "none";
      }
    };

    // Xử lý sự kiện nút close header
    header_close.onclick = function () {
      input_header.value = "";
      header_close.style.display = "none";
    };

    var isShowingInfomation = false;

    // Xử lý sự kiện khi click vào biểu tượng người dùng
    const account = document.querySelector(".header_account");
    const account_infomation = document.querySelector(
      ".header_account_infomation"
    );
    account.onclick = function (e) {
      isShowingInfomation = !isShowingInfomation;
      if (isShowingInfomation) {
        account_infomation.style.display = "block";
      } else {
        account_infomation.style.display = "none";
      }
    };

    account_infomation.onclick = function (e) {
      e.stopPropagation();
    };

    search_header.onclick = function (e) {
      e.stopPropagation();
    };

    // Xử lý sự kiện input range
    const input_range = document.querySelector(".header_dropdown_range");
    const secondBlock = document.querySelector(".header_dropdown_value");
    input_range.onchange = function () {
      secondBlock.innerHTML = `${input_range.value} giây`;
    };

    const header_setting = document.querySelector(".header_setting");
    const header_setting_icon = document.querySelector(".header_setting_icon");
    const header_seemore = document.querySelector(".header_see_more");
    const header_dropdown = document.querySelector(".header_dropdown");
    var isSeeMore = false;
    header_setting_icon.onmouseover = function () {
      header_seemore.style.display = "flex";
      isSeeMore = true;
    };
    header_setting_icon.onmouseout = function () {
      header_seemore.style.display = "none";
      isSeeMore = false;
    };

    header_dropdown.onmouseover = function (e) {
      header_seemore.style.display = "none";
    };

    header_dropdown.onclick = function (e) {};

    header_setting.onclick = function () {
      isShowingInfomation = !isShowingInfomation;
      // e.stopPropagation();
      if (isShowingInfomation) {
        header_dropdown.style.display = "block";
      } else {
        header_dropdown.style.display = "none";
      }
    };

    header_setting_icon.onclick = function (e) {
      // e.stopPropagation();
    };
    // Xử lý ẩn hiện music player
    const music_select = document.querySelector(
      ".header_dropdown_item.play_music"
    );
    const modal_music = document.getElementById("modal_header_music");
    music_select.onmouseover = function () {
      modal_music.style.display = "block";
    };
    //
    music_select.onmouseout = function () {
      modal_music.style.display = "none";
    };
    //
    document.onclick = function (e) {
      if (
        !account.contains(e.target) &&
        !account_infomation.contains(e.target)
      ) {
        account_infomation.style.display = "none";
        isShowingInfomation = false; // Đặt lại biến khi ẩn thông tin
      }

      if (!search_history.contains(e.target)) {
        search_history.style.display = "none";
      }

      if (
        !header_dropdown.contains(e.target) &&
        !header_setting.contains(e.target) &&
        !header_setting_icon.contains(e.target)
      ) {
        header_dropdown.style.display = "none";
      }
    };

    // Thực hiện duyệt qua mảng sidebar left nếu click mục nào, lập tức remove class active ở các mục trước đó, thêm vào mục hiện tại
    const navbars = $$(".zm_navbar_item");
    const zing_tabs = Array.from($$(".zing_tab"));
    Array.from(navbars).forEach((navbar, index) => {
      navbar.onclick = function () {
        $(".zm_navbar_item.active").classList.remove("active");
        navbar.classList.add("active");

        $(".zing_tab.active").classList.remove("active");
        zing_tabs[index].classList.add("active");
      };
    });
    // Multiple tab library
    const menuLibrarys = Array.from($$(".zm_library_item"));
    const itemLibrarys = Array.from($$(".zm_library_tab"));
    menuLibrarys.forEach((menuLibrary, index) => {
      menuLibrary.onclick = function () {
        $(".zm_library_item.is-active").classList.remove("is-active");
        menuLibrary.classList.add("is-active");

        $(".zm_library_tab.is-active").classList.remove("is-active");
        itemLibrarys[index].classList.add("is-active");
      };
    });

    const items = Array.from($$(".item"));
    const actionTabs = Array.from($$(".zm_sub_empty"));
    items.forEach((item, index) => {
      item.onclick = function () {
        $(".item.is-active").classList.remove("is-active");
        item.classList.add("is-active");

        $(".zm_sub_empty.is-active").classList.remove("is-active");
        actionTabs[index].classList.add("is-active");
      };
    });

    const regions = Array.from($$(".zm_discover_item"));
    const countryMusics = Array.from($$(".discover_playlist"));

    regions.forEach((region, index) => {
      region.onclick = function () {
        $(".zm_discover_item.is-active").classList.remove("is-active");
        region.classList.add("is-active");

        $(".discover_playlist.is-active").classList.remove("is-active");
        countryMusics[index].classList.add("is-active");
      };
    });
  },

  // Xuất giao diện trình phát nhạc
  render: function () {
    this.renderNewSongs();
    this.renderTop100();
    this.renderCategory();
    this.renderSpecialPlaylist();
    this.renderNormalPlaylist();
    this.renderRadio();
    this.renderSong();
    this.renderDiscoverPlaylist();
    this.renderNewPlaylist();
    this.renderFavPlaylist();
    this.renderPartner();
  },

  start: function () {
    this.render();
    this.handleEvents();
    this.handleDom();
  },
};

app.start();

// const newSongList = $(".zm_discover_chance_wrapper");
// console.log(newSongList.firstElementChild.clientWidth);
