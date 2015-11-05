FBGraph.setAccessToken(Meteor.settings.private.fb);

Twit = new TwitMaker(Meteor.settings.private.twit);

ig.use(Meteor.settings.private.ig);
