Template['album'].helpers({
  'album': function(){
    return Session.get(this.id)
  },
});

Template['album'].events({
});

Template['album'].onRendered(function() {
  var self = this;
  
  if (!Session.get(this.data.id)){
    Meteor.call('getFB', self.data.id, function(error, album) {
      Session.set(self.data.id, album);
    });
  }

  Meteor.call('getFB', self.data.id+'/photos', function(error, photos) {
    var album = Session.get(self.data.id);
    album.photos = photos.data;
    Session.set(self.data.id, album);
  });
});