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
const listRadio = $(".radio_main");

// Khám phá
const discover = $(".discover_playlist");

const zingDiscovers = Array.from($$(".zm_discover_section"));
const zingDiscoverHeaders = Array.from($$(".discover_playlist_header"));
const zingDiscoverWrappers = Array.from($$(".zm_discover_list"));

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
const app = {
  currentIndex: 0,
  isPlaying: false,
  isVolume: true,

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
    this.radios.forEach((radio, index) => {
      listRadio.innerHTML += `
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
  },

  renderSong: function () {
    this.songs.forEach((song) => {
      discover.innerHTML += `
     <div class="col c-4 l-4 m-4">
                                        <div class="media">
                                            <div class="media_left">
                                                <div class="song_thumb">
                                                    <img src="${song.image}" alt=""
                                                        class="discover_img" width="60px" height="60px">
                                                    <div class="overlay">
                                                    <i class="fa-solid fa-play play_btn"></i>
                                                    </div>
                                                </div>
                                                <div class="song_info">
                                                    <h3 class="song_title_main">${song.name}</h3>
                                                    <h3 class="song_singer">${song.singer}</h3>
                                                    <p class="song_time_release">2 ngày trước</p>
                                                </div>
                                            </div>
                                            <div class="media_right">
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

  renderCurrentSong: function () {
    audio.src = this.currentSong.path;
    imageThumb.src = this.currentSong.image;
    songName.innerHTML = this.currentSong.name;
    songArtist.innerHTML = this.currentSong.singer;
  },

  handleEvents: function () {
    var oldVolume = 0;
    const _this = this;
    // Xử lý sự kiện nút readmore
    const zingReadmores = Array.from($$(".zing_topic_readmore"));
    zingReadmores.forEach((zingReadmore) => {
      zingReadmore.onclick = (e) => {
        this.showAllContent(e);
      };
    });

    playBtn.onclick = (e) => {
      // Khi ấn nút play thì thay đổi trạng thái playing
      this.isPlaying = !this.isPlaying;

      // Nếu playing là true thì bật nhạc, thay đổi icon
      // Nếu playing là fasle thì tắt nhạc, thay đổi icon
      if (this.isPlaying) {
        audio.play();
        playBtn.classList.replace("fa-circle-play", "fa-circle-pause");
      } else {
        audio.pause();
        playBtn.classList.replace("fa-circle-pause", "fa-circle-play");
      }
    };

    nextBtn.onclick = function (e) {
      // Khi ấn nút next thì tăng giá trị của currentIndex
      // Khi currentIndex >= số bài hát thì currentIndex = 0
      // Khi ấn nút next thì thay đổi bài hát, cũng như tự chạy, vậy nên icon sẽ bị thay đổi sang nút pause

      _this.currentIndex++;
      if (_this.currentIndex > _this.songs.length - 1) {
        _this.currentIndex = 0;
      }
      _this.renderCurrentSong();

      audio.play();
      _this.isPlaying = true;
      playBtn.classList.replace("fa-circle-play", "fa-circle-pause");

      // playBtn.click();
    };

    prevBtn.onclick = function (e) {
      _this.currentIndex--;
      if (_this.currentIndex < 0) {
        _this.currentIndex = _this.songs.length - 1;
      }

      _this.renderCurrentSong();
      audio.play();
      _this.isPlaying = true;
      playBtn.classList.replace("fa-circle-play", "fa-circle-pause");
    };

    // Xử lý sự kiện tăng giảm volume
    volume.onchange = function (e) {
      audio.volume = volume.value;
      oldVolume = volume.value;
    };
    // Xử lý sự kiện click nút volume
    volumeBtn.onclick = function () {
      _this.isVolume = !_this.isVolume;
      if (!_this.isVolume) {
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        volume.value = 0;
        audio.volume = 0;
      } else {
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
        volume.value = oldVolume;
        audio.volume = oldVolume;
      }
    };

    // Hiển thị bài hát đầu tiên khi vào trình duyệt
    this.renderCurrentSong();
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
  },

  start: function () {
    this.render();
    this.handleEvents();
  },
};

app.start();