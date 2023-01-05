let share_btn = document.querySelector("div.btn-box button");
let share_box = document.querySelector("div.share-box");
let social_links = document.querySelectorAll("div.share-box-icons a");

share_btn.addEventListener("click", function () {
  share_box.classList.add("active");
  share_box.classList.remove("inactive");

  share_box.addEventListener("mouseleave", function () {
    share_box.classList.add("inactive");
    share_box.classList.remove("active");
  });
});

social_links.forEach((link) => {
  link.addEventListener("click", function () {
    share_box.classList.add("inactive");
    share_box.classList.remove("active");
  });
});
