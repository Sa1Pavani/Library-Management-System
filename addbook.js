document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("dashboardLink")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Open addbook.html
      window.location.href = "Dashboard.html";
    });
});
