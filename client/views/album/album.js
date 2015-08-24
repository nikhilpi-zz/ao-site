var owl;

Template['album'].helpers({
  'album': function(){
    return Session.get(this.id)
  },
});

Template['album'].events({
  'click .img-button': function(e) {
    console.log(this)
    e.preventDefault();
    owl.goTo(this.index);
  }
});

Template['album'].onRendered(function() {
  var self = this;
  
  if (!Session.get(this.data.id)){
    Meteor.call('getFB', self.data.id, function(error, album) {
      Session.set(self.data.id, album);
    });
  }

  var owl_options = {
    autoPlay: true,
    autoplaySpeed : 200,
    items : 1,
    nav: true,
    dots: false,
    navText: ['',''],
    loop: true,
    autoHeight: false
  }

  $(".owl-carousel").owlCarousel(owl_options);
  owl = $(".owl-carousel").data('owlCarousel');

  Meteor.call('getFB', self.data.id+'/photos', function(error, photos) {
    var album = Session.get(self.data.id);
    album.photos = photos.data;
    Session.set(self.data.id, album);
    _.each(album.photos.reverse(), function(photo){
      owl.addItem('<div class="item"><a href="'+photo.link+'" target="_blank"><img src="'+photo.source+'" alt="loading..."></a></div>');
    });
    $('.owl-next,.owl-prev').removeClass('disabled');
  });

});