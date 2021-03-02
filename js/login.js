"use strict";
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const modalBox = document.getElementById("modal-box");

signUpButton.addEventListener("click", () => {
  modalBox.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  modalBox.classList.remove("right-panel-active");
});

var modal = document.querySelector(".modal-box");
var modalID = document.querySelector("#modal-box");

$(document).ready(function () {
  //onclick event for opening and closing modal
  $(".login-icon").click(function () {
    $(".modal-box").fadeToggle("slow");
  });

  //X close button
  $(".close-btn").click(function () {
    $(".modal").hide();
  });

  $(document).click(function (event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(event.target).closest(".modal,.login-icon").length) {
      $("body").find(".modal").fadeOut("slow");
    }
  });

  //to close modal if we click out side
  // $("body").click(function (event) {
  //   if (
  //     !$(event.target).closest("#modal-box").length &&
  //     !$(event.target).is("#modal-box")
  //   ) {
  //     $(".modal").hide();
  //   }
  // });
});
