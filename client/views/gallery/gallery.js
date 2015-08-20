Template['gallery'].helpers({
  'albums': function() {
    var albums = Session.get('albums');
    return albums;
  },

  'img': function(id) {
    var img = Session.get(id);
    return img.source;
  }
});

Template['gallery'].events({
});

Template['gallery'].onRendered(function () {
  Meteor.call('getFB', Meteor.App.FBPAGE+'/albums', function(error, albums) {
    Session.set('next',albums.paging.cursors.next);
    var filter_albums = [];
    _.each(albums.data,function(album){
      Session.set(album.id, album)
      if (album.name !== 'Timeline Photos' && album.name !== 'Profile Pictures' && album.name !== 'Cover Photos' && album.name !== 'Mobile Uploads'){
        filter_albums.push(album);
        Meteor.call('getFB',album.cover_photo, function(error, img) {
            Session.set(album.cover_photo, img)
        });
      }
    });
    Session.set('albums', filter_albums)
  });
});