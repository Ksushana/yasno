$(document).ready(function () {
  $("#choose").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top + $(id).height() / 2 - $(window).height() / 2;
    setTimeout(() => $("body,html").animate({ scrollTop: top }, 1000), 500);
  });
});
