let lis = document.querySelectorAll("nav ul li");
lis.forEach((li) => {
  const selectDiv = li.querySelector(".select");
  li.addEventListener("click", () => {
    document.querySelectorAll(".select").forEach((div) => {
      div.style.display = "none";
    });
    selectDiv.style.display = "flex";
  });

  if (selectDiv) {
    selectDiv.addEventListener("mouseleave", () => {
      selectDiv.style.display = "none";
    });
  }
});



const params = new URLSearchParams(window.location.search);
let username = document.querySelector(".user-name");
username.innerHTML = params.get("name");
if (params.get("name")) {
  let btn = document.querySelector(".login-btn");
  btn.style.display="none"
}
