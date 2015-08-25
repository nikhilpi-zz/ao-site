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
      Session.set('page_name',self.data.name);
    });
  } else {
    var album = Session.get(this.data.id)
    Session.set('page_name',album.name);
  }
  
  var owl_options = {
    autoPlay: false,
    pagination:false,
    autoplaySpeed : 200,
    items : 1,
    navigation: true,
    navigationText: ['',''],
    loop: true,
    autoHeight: false,
    singleItem: true
  };

  $(".owl-carousel").owlCarousel(owl_options);
  owl = $(".owl-carousel").data('owlCarousel');

  Meteor.call('getFB', self.data.id+'/photos', function(error, photos) {
    var album = Session.get(self.data.id);
    album.photos = photos.data;
    Session.set(self.data.id, album);
    _.each(album.photos.reverse(), function(photo){
      owl.addItem('<div class="item"><img src="'+photo.source+'" alt="loading..."></div>');
    });
  });

});