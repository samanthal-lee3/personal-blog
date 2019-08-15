$("#sidebarCollapse").on("click", function() {
  $("nav").toggleClass("active");
  $(".wrapper").toggleClass("menuup");
  $(".mobile-header").toggleClass("hide");
});


<nav>
  <div class="inner-wrap">
    <div class="site-header">Insert Name</div>
    <div class="site-subheader">Web Developer</div>
    <ul class="site-navigation">
      <li>
        <a href="index.html"><i class="fas fa-home"></i> Home</a>
      </li>
      <li>
        <a href="about.html"><i class="fas fa-id-card"></i> About</a></li>
    </ul>
  </div>
</nav>