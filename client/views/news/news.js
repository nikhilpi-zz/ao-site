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