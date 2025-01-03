let nameinput = document.querySelector('input[name="name"]');
let emailinput = document.querySelector('input[name="email"]');
let mobinput = document.querySelector('input[name="mobile"]');
let addinput = document.querySelector('input[name="address"]');
let gender = document.querySelector('input[name="gender"]:checked');
let ps = document.querySelectorAll("p");

let submit = document.querySelector(".button");

let nameregx = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
let mobregx = /^(011|012|015|010)\d{8}$/;
let emailegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let addregx = /^[\w\s,.-]{10,100}$/;
let validName,validEmail,validAdd,validMob;

function Validate(name, email, mobile, address) {
  if (!name) {
    ps[0].innerHTML = "this field is required";
    nameinput.classList.add("error");
  } else if (!nameregx.test(name)) {
    ps[0].innerHTML = "please provide valid name";
  } else {
    ps[0].innerHTML = "";
    nameinput.classList.remove("error");
    validName=true
  }

  if (!email) {
    ps[1].innerHTML = "this field is required";
    emailinput.classList.add("error");
  } else if (!emailegx.test(email)) {
    ps[1].innerHTML = "please provide valid email";
  } else {
    ps[1].innerHTML = "";
    emailinput.classList.remove("error");
    validEmail=true
  }

  if (!mobile) {
    ps[2].innerHTML = "this field is required";
    mobinput.classList.add("error");
  } else if (!mobregx.test(mobile)) {
    ps[2].innerHTML = "please provide valid mobile";
  } else {
    ps[2].innerHTML = "";
    mobinput.classList.remove("error");
    validMob=true
  }

  if (!address) {
    ps[3].innerHTML = "this field is required";
    addinput.classList.add("error");
  } else if (!addregx.test(address)) {
    ps[3].innerHTML = "please provide valid address";
  } else {
    ps[3].innerHTML = "";
    addinput.classList.remove("error");
    validAdd=true
  }
  return (validName&&validEmail&&validMob&&validAdd)
}

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    Validate(nameinput.value, emailinput.value, mobinput.value, addinput.value)
  ) {
   const params = new URLSearchParams({
     name: nameinput.value,
     email: emailinput.value,
   });

   // Redirect with query string
   location.href = `./index.html?${params.toString()}`;
  }
});

function Reset(){
 clearInterval(clear);
}

let clear=setInterval(()=>{
  alert("enter your data please")
},10000)

window.addEventListener("keydown",Reset)

document.querySelector(".submit")