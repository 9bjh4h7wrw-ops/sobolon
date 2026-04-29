jQuery("#js-drawer-icon").on("click", function (e) {
    e.preventDefault();
    jQuery("#js-drawer-icon").toggleClass("is-checked");
    jQuery("#js-drawer-contents").toggleClass("is-checked");
  });