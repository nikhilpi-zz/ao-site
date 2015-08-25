Template['calendar'].helpers({
  'years_ago': function (num) {
    return moment().subtract(num, 'years').get('year')
  },

  'events': function() {
    return Session.get('events')
  },

  'formatDay': function(date) {
    return moment(date).date();
  },

  'color_scheme': function() {
    return Session.get('calendar_class') || 'grey';
  },

  'selected_year': function() {
    return Session.get('selected_year') || 'upcoming';
  }
});

Template['calendar'].events({
  'click .calendar_buttons #upcoming': function() {
    Meteor.call('getFB', Meteor.App.FBPAGE+'/events?since='+moment().unix(), function(err, data) {
      Session.set('events',addMonths(data.data.reverse()));
      Session.set('calendar_class', 'grey');
      Session.set('selected_year', 'upcoming');
    });
  },
  'click .calendar_buttons #this_year_ago': function() {
    var until = moment().unix();
    var since = moment().startOf("year").unix();
    Meteor.call('getFB', Meteor.App.FBPAGE+'/events?since='+since+'&until='+until, function(err, data) {
      Session.set('events',addMonths(data.data.reverse()));
      Session.set('calendar_class', 'yellow');
      Session.set('selected_year', moment().startOf("year").year());
    });
  },
  'click .calendar_buttons #one_year_ago': function() {
    var until = moment().startOf("year").unix();
    var since = moment().startOf("year").subtract(1,'year').unix();
    Meteor.call('getFB', Meteor.App.FBPAGE+'/events?since='+since+'&until='+until, function(err, data) {
      Session.set('events',addMonths(data.data.reverse()));
      Session.set('calendar_class', 'magenta');
      Session.set('selected_year', moment().startOf("year").subtract(1,'year').year());
    });
  },
  'click .calendar_buttons #two_year_ago': function() {
    var until = moment().startOf("year").subtract(1,'year').unix();
    var since = moment().startOf("year").subtract(2,'year').unix();
    Meteor.call('getFB', Meteor.App.FBPAGE+'/events?since='+since+'&until='+until, function(err, data) {
      Session.set('events',addMonths(data.data.reverse()));
      Session.set('calendar_class', 'cyan');
      Session.set('selected_year', moment().startOf("year").subtract(2,'year').year());
    });
  },
});

Template['calendar'].onRendered(function(){
  Meteor.call('getFB', Meteor.App.FBPAGE+'/events?since='+moment().unix(), function(err, data) {
    Session.set('events',addMonths(data.data.reverse()));
  });
});

function addMonths(events) {
  var currentMonth;
  _.each(events, function(eventOb, index, events){
    var start = moment(eventOb.start_time);
    if (currentMonth === start.month()) {

    } else {
      currentMonth = start.month();
      events.splice(index, 0, {month: start.format('MMMM')});
    }
  })
  return events;
}