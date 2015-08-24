Template['gallery'].helpers({
  'albums': function() {
    var albums = Session.get('albums');
    return albums;
  },

  'img': function(id) {
    var img = Session.get(id);
    return img.source || '';
  }
});

Template['gallery'].events({
});

Template['gallery'].onRendered(function () {
  Meteor.call('getFB', Meteor.App.FBPAGE+'/albums', function(error, albums) {
    var filter_albums = [];
    var img_ids = [];
    _.each(albums.data,function(album){
      Session.set(album.id, album)
      if (album.name !== 'Timeline Photos' && album.name !== 'Profile Pictures' && album.name !== 'Cover Photos' && album.name !== 'Mobile Uploads'){
        filter_albums.push(album);
        img_ids.push(album.cover_photo);
      }
    });
    Session.set('albums', filter_albums);

    Meteor.call('getFBBatch',img_ids, function(error, imgs) {
      _.each(imgs,function(img){
        Session.set(img.id, img)
      });
    });
  });
});