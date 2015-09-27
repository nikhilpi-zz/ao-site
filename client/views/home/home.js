var owl;

Template.home.helpers({
  'upcomingEvents': function() {
    return Session.get('upcomingEvents')
  },

  'pastEvents': function() {
    return Session.get('pastEvents')
  },
});

Template.home.events({
});


Template.home.onRendered(function () {
  var owl_options = {
    autoPlay: true,
    pagination:false,
    slideSpeed: 1000,
    paginationSpeed: 1000,
    rewindSpeed: 1000,
    items : 1,
    navigation: true,
    navigationText: ['',''],
    loop: true,
    autoHeight: false,
    singleItem: true
  };

  $(".owl-carousel").owlCarousel(owl_options);
  owl = $(".owl-carousel").data('owlCarousel');

  Meteor.call('getFB', Meteor.App.FBPAGE+'/events?limit=3', function(err, data) {
    Session.set('upcomingEvents',data.data.reverse());
  });

  var until = moment().unix();
  var since = moment().startOf("year").unix();
  Meteor.call('getFB', Meteor.App.FBPAGE+'/events?limit=3&since='+since+'&until='+until, function(err, data) {
    Session.set('pastEvents',data.data.reverse());
  });
});
