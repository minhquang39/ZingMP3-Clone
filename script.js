const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
var isShowingInfomation = false;

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

// Xử lý sự kiện ô input header
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

// Xử lý sự kiện setting
const header_setting = document.querySelector(".header_setting");
const header_setting_icon = document.querySelector(".header_setting_icon");
const header_seemore = document.querySelector(".header_see_more");
const header_dropdown = document.querySelector(".header_dropdown");

header_setting_icon.onmouseover = function () {
  header_seemore.style.display = "flex";
};
header_setting_icon.onmouseout = function () {
  header_seemore.style.display = "none";
};

header_dropdown.onmouseover = function (e) {
  // e.stopProganation();
  header_seemore.style.display = "none";
};

header_setting.onclick = function () {
  isShowingInfomation = !isShowingInfomation;
  if (isShowingInfomation) {
    header_dropdown.style.display = "block";
  } else {
    header_dropdown.style.display = "none";
  }
};

// Xử lý sự kiện khi click vào biểu tượng người dùng
const account = document.querySelector(".header_account");
const account_infomation = document.querySelector(".header_account_infomation");
// var isShowingInfomation = false;
account.onclick = function (e) {
  // e.stopPropagation();
  isShowingInfomation = !isShowingInfomation;
  if (isShowingInfomation) {
    account_infomation.style.display = "block";
  } else {
    account_infomation.style.display = "none";
  }
};

// Xử lý sự kiện input range
const input_range = document.querySelector(".header_dropdown_range");
const secondBlock = document.querySelector(".header_dropdown_value");
input_range.onchange = function () {
  secondBlock.innerHTML = `${input_range.value} giây`;
};

// Xử lý ẩn hiện music player
const music_select = document.querySelector(".header_dropdown_item.play_music");
const modal_music = document.getElementById("modal_header_music");
music_select.onmouseover = function () {
  modal_music.style.display = "block";
};

// music_select.onmouseout = function () {
//   modal_music.style.display = "none";
// };

document.addEventListener("click", function (event) {
  //   Kiểm tra xem sự kiện click không phải là ở ô input và cũng không phải là ở ô lịch sử
  if (
    !input_header.contains(event.target) &&
    !search_history.contains(event.target) &&
    !header_close.contains(event.target)
  ) {
    // Nếu không phải là ở ô input và không phải là ở ô lịch sử, đóng ô lịch sử
    search_history.style.display = "none";
  } else {
    search_history.style.display = "block";
  }

  if (
    account.contains(event.target) ||
    account_infomation.contains(event.target)
  ) {
    account_infomation.style.display = "block";
    isShowingInfomation = true; // Cần đặt lại biến isShowingInfomation khi ẩn
  } else {
    account_infomation.style.display = "none";
  }

  if (header_setting.contains(event.target)) {
    header_dropdown.style.display = "block";
    if (
      header_dropdown.contains(event.target) &&
      modal_music.contains(event.target)
    ) {
      modal_music.style.display = "block";
    }
  }

  if (
    !header_setting.contains(event.target) &&
    !modal_music.contains(event.target)
  ) {
    header_dropdown.style.display = "none";
  }

  if (!modal_music.contains(event.target)) {
    modal_music.style.display = "none";
  }
});

// Xử lý sự kiện chuyển tab zing

// Tìm kiếm mảng sidebar left và zingtabs
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

// Xử lý sự kiện khi di chuột vào gallery
const gallery = $(".gallery");
const gallery_prev = $(".gallery_prev");
const gallery_next = $(".gallery_next");

gallery.onmouseover = function () {
  gallery_prev.style.display = "inline";
  gallery_next.style.display = "inline";
};
gallery.onmouseout = function () {
  gallery_prev.style.display = "none";
  gallery_next.style.display = "none";
};
const navbarMain = document.querySelector(".zm_navbar_main.overflow");

navbarMain.addEventListener("mouseover", function () {
  this.style.overflowY = "scroll";
});

navbarMain.addEventListener("mouseout", function () {
  this.style.overflowY = "hidden";
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
