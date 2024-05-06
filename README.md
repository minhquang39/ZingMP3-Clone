Khi ấn vào nút readmore thì sẽ tìm đến phần tử cha chứa nút readmore
Xác định dc phần tử cha chứa nút readmore ở vị trí nào trong mảng
Từ đấy mới hiển thị đầy đủ nội dung khi click nút readmore


categorys.forEach((category, index) => {
  zing_category_title[index].innerHTML = `${category.header}`;
  
  let displayCount = category.isReadmore ? 3 : category.contents.length;
  
  category.contents.slice(0, displayCount).forEach((content, idx) => {
    const newContent = document.createElement("div");
    newContent.classList.add("zm_collabed_playlist", "col", "c4");
    newContent.innerHTML = `
      <div class="zm_collabed_info">
          <h3 class="zm_collabed_title">${content}</h3>
          <div class="sub_"></div>
      </div>
    `;
    zing_category_mains[index].appendChild(newContent);
  });

  // Kiểm tra nếu có nút Read More và số lượng mục hiển thị ban đầu nhỏ hơn tổng số mục
  if (category.isReadmore && displayCount < category.contents.length) {
    const readMore = document.createElement("div");
    readMore.classList.add("readmore");
    readMore.innerHTML = "<a href='#' onclick='showAllContent(this)'>Read More</a>";
    zing_category_mains[index].appendChild(readMore);
  }
});

function showAllContent(button) {
  const categoryIndex = Array.from(button.closest(".zm_featured_section").parentElement.children).indexOf(button.closest(".zm_featured_section"));
  const category = categorys[categoryIndex];
  
  const categoryMain = button.closest(".zm_featured_section").querySelector(".zm_collabed_list");
  categoryMain.innerHTML = "";
  category.contents.forEach((content, idx) => {
    const newContent = document.createElement("div");
    newContent.classList.add("zm_collabed_playlist", "col", "c4");
    newContent.innerHTML = `
      <div class="zm_collabed_info">
          <h3 class="zm_collabed_title">${content}</h3>
          <div class="sub_"></div>
      </div>
    `;
    categoryMain.appendChild(newContent);
  });
}

