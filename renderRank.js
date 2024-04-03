const zingList = $(".zing_new_list");
var isLove = false;
fetch("rank.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (songs) {
    var data = "";
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

    const loves = $$(".love_sym");
    Array.from(loves).forEach((love, index) => {
      love.onclick = function (e) {
        isLove = !isLove;
        if (isLove) {
          love.classList.replace("bi-heart", "bi-suit-heart-fill");
        } else {
          love.classList.replace("bi-suit-heart-fill", "bi-heart");
        }
      };
    });
  });
