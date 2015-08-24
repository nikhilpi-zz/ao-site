Template['header'].helpers({
  'name': function() {
    return Session.get('page_name') || 'productions';
  }
});

Template['header'].events({
  'click .toggle-nav': function (event) {
    $('body').toggleClass('show-nav');
    return false;
  },
  'click #nav-icon3': function (event) {
    $('#nav-icon3').toggleClass('open');
    return false;
  },
  'click #body-nav a': function (event) {
    $('body').toggleClass('show-nav');
     $('#nav-icon3').toggleClass('open');
  }
});

Template['header'].onRendered(function() {
  var nav =  $(".nav");
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
      nav.addClass("scroll");
    } else {
      nav.removeClass("scroll");
    }
  });
});