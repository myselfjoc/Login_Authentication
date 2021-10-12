// Pages
let sPage = document.getElementById("sp");
let lPage = document.getElementById("lp");
let wPage = document.getElementById("welcome");
// s-input
let signupMail = document.getElementById("sMail");
let signupPw = document.getElementById("sPw");
// l-input
let loginMail = document.getElementById("lMail");
let loginPw = document.getElementById("lPw");
// btns
let signupBtn = document.getElementById("s-btn");
let loginBtn = document.getElementById("l-btn");

signupBtn.addEventListener("click", function () {
  if (signupMail.value != "" || signupPw.value != "") {
    localStorage.setItem("signupMail", signupMail.value);

    let pwMatch = /^[A-Za-z]+$/;
    if (signupPw.value.match(pwMatch) || signupPw.value.length < 8) {
      alert("Password contain with atleast one Symbol \n Minimum 8 char");
    } else {
      localStorage.setItem("signupPw", signupPw.value);
      sPage.style.display = "none";
      lPage.style.display = "block";
      alert(
        "Your Email Id and Password sucessfully Registered !\n Please login with your registered Email Id and PassWord"
      );
    }
  } else {
    alert("Enter Email Id and Password");
  }
});

loginBtn.addEventListener("click", function () {
  let storedEmail = localStorage.getItem("signupMail");
  let storedPw = localStorage.getItem("signupPw");

  if (storedEmail != loginMail.value || storedPw != loginPw.value) {
    alert("Email Id and Password is not Matched ! ");
  } else {
    lPage.style.display = "none";
    wPage.style.display = "block";
  }
});
