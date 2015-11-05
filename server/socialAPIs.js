var fb_get = Meteor.wrapAsync(FBGraph.get,FBGraph);
var fb_get_batch = Meteor.wrapAsync(FBGraph.batch,FBGraph);
var insta_feed = Meteor.wrapAsync(ig.user_media_recent,ig);
var twit_get = Meteor.wrapAsync(Twit.get,Twit);

Meteor.methods({
    getTwit: function (id) {
        var tweets = twit_get('statuses/user_timeline', {user_id: id});
        return tweets;
    },
    getInstaFeed: function(id, query){
        var pics = insta_feed(id,query);
        return pics;
    },
    getFB: function(query){
        var results = fb_get(query);
        return results;
    },
    getFBBatch: function(query){
        query = query.map(function(query) {
            return {
                method: 'GET',
                relative_url: query
            };
        })

        var results = fb_get_batch(query);

        results = results.map(function(res) {
            return JSON.parse(res.body);
        })

        return results;
    },
    getSocialStream: function() {
        var posts = fb_get(Meteor.App.FBPAGE+'/posts').data;
        var pics = insta_feed(Meteor.App.INSTA);
        var tweets = twit_get('statuses/user_timeline', {user_id: Meteor.App.TWIT});
        
        posts = posts.map(function(post){
            post.social_type = 'fb';
            post.created_time = new Date(post.created_time)
            return post;
        });

        pics = pics.map(function(pic){
            pic.social_type = 'insta';
            pic.created_time = new Date(pic.created_time*1000)
            return pic;
        });

        tweets = tweets.map(function(tweet){
            tweet.social_type = 'tweet';
            tweet.created_time = new Date(tweet.created_at)
            return tweet;
        });

        var stream = posts.concat(pics).concat(tweets);

        stream.sort(function(a,b) { 
            return b.created_time - a.created_time;
        });

        if (stream.length % 2 == 1) stream.pop();

        return stream;
    }
});