Meteor.methods({
    getCal: function () {
        var data = Meteor.http.call("GET", "https://www.googleapis.com/calendar/v3/calendars/ao.mmdesign%40gmail.com/events?key=AIzaSyDknbF9KqOCmWdnC0mTZKqRnUCJXKI6rdM");
        return data;
    },
    getTwit: function () {
        Future = Npm.require('fibers/future');
        var future = new Future();

        Twit.get('statuses/user_timeline', { user_id: '28911550' }, function (err, data, response) {
            future.return(data);
        });
        return future.wait();
    },
    getInsta: function(){
        var url = "https://api.instagram.com/v1/users/1549263314/media/recent/?client_id=223eed83d6de4d93b5f6668d031be84f";
        //synchronous GET
        var result = Meteor.http.get(url);
        if(result.statusCode==200) {
            return result.data.data;
        } else {
            throw new Meteor.Error(result.statusCode, result.data);
        }
    },
    getFBUpcomingEvents: function(){
      var fb_get = Meteor.wrapAsync(FBGraph.get,FBGraph);
      var upcoming_events = fb_get('/7625215495/events');
      return upcoming_events;
    },
    getFBPastYearEvents: function(){
      var fb_get = Meteor.wrapAsync(FBGraph.get,FBGraph);
      var upcoming_events = fb_get('/7625215495/events?since=1417508443');
      return upcoming_events;
    },
});