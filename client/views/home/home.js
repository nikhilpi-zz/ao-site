Template.home.helpers({

});

Template.home.events({
});


Template.home.rendered = function () {
  Meteor.call('getFBPastYearEvents')
};
