Template['header'].helpers({

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
});

