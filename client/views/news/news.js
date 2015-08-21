Template['news'].helpers({
  'stream': function() {
    return Session.get('stream');
  },
});

Template['news'].events({
});

Template['news'].onRendered(function() {
  Meteor.call('getSocialStream', function(error, stream) {
    console.log(stream)
    Session.set('stream', stream);
  });
});

Template['fb_block'].helpers({
  'fbImage': function(id) {
    Meteor.call('getFB', id, function(err, data) {
      $('div[data-fb-id="'+id+'"]').attr("style", 'background-image: url("'+data.source+'");');         
    });
  }
});