//Xử lý sự kiện ở ô input
const input_header = document.querySelector(".header_search_input");
const search_header = input_header.parentElement;
const search_history = document.querySelector(".header_search_history");
const header_close = document.querySelector(".header_search_close");
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

// Xử lý sự kiện khi click vào biểu tượng người dùng
const account = document.querySelector(".header_account");
const account_infomation = document.querySelector(".header_account_infomation");
var isShowingInfomation = false;
account.onclick = function (e) {
  // e.stopPropagation();
  isShowingInfomation = !isShowingInfomation;
  if (isShowingInfomation) {
    account_infomation.style.display = "block";
  } else {
    account_infomation.style.display = "none";
  }
};

document.addEventListener("click", function (event) {
  //   Kiểm tra xem sự kiện click không phải là ở ô input và cũng không phải là ở ô lịch sử
  if (
    !input_header.contains(event.target) &&
    !search_history.contains(event.target)
  ) {
    // Nếu không phải là ở ô input và không phải là ở ô lịch sử, đóng ô lịch sử
    search_history.style.display = "none";
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
});
