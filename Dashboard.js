document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addBookLink")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Open addbook.html
      window.location.href = "addbook.html";
    });
});
