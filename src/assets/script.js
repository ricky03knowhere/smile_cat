  // <<--- NavLink active handler --->>
  const navLink = $(".navbar-nav .nav-item .nav-link");
  navLink.on("click", function () {
    navLink.removeClass("active");

    $(this).addClass("active");
  });