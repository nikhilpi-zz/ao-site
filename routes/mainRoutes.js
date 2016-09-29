// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    Session.set('page_name','productions');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/news', {
  name: 'news',
  action: function () {
    this.render('news');
    Session.set('page_name','news');
    SEO.set({ title: 'News - ' + Meteor.App.NAME });
  }
});

Router.route('/about', {
  name: 'about',
  action: function () {
    this.render('about');
    Session.set('page_name','about');
    SEO.set({ title: 'About - ' + Meteor.App.NAME });
  }
});

Router.route('/contact', {
  name: 'contact',
  action: function () {
    this.render('contact');
    Session.set('page_name','contact');
    SEO.set({ title: 'Contact - ' + Meteor.App.NAME });
  }
});

Router.route('/calendar', {
  name: 'calendar',
  action: function () {
    this.render('calendar');
    Session.set('page_name','calendar');
    SEO.set({ title: 'Calendar - ' + Meteor.App.NAME });
  }
});

Router.route('/gallery', {
  name: 'gallery',
  action: function () {
    this.render('gallery');
    Session.set('page_name','gallery');
    SEO.set({ title: 'Gallery - ' + Meteor.App.NAME });
  }
});

Router.route('/gallery/:id', {
  name: 'gallery.album',
  action: function () {
    this.render('album', {data: {id: this.params.id}});
    SEO.set({ title: 'Album - ' + Meteor.App.NAME });
  }
});

Router.route('/application', {
  name: 'application',
  action: function () {
    this.render('application');
    Session.set('page_name','application');
    SEO.set({ title: 'Applications - ' + Meteor.App.NAME });
  }
});

Router.route('/films', {
  name: 'Films',
  action: function () {
    this.render('films');
    Session.set('page_name','Films Application');
    SEO.set({ title: 'Films Application- ' + Meteor.App.NAME });
  }
});

Router.route('/finance', {
  name: 'Finance',
  action: function () {
    this.render('finance');
    Session.set('page_name','Finance Application');
    SEO.set({ title: 'Finance Application- ' + Meteor.App.NAME });
  }
});
Router.route('/productions', {
  name: 'Productions',
  action: function () {
    this.render('productions');
    Session.set('page_name','Productions Application');
    SEO.set({ title: 'Productions Application- ' + Meteor.App.NAME });
  }
});
Router.route('/development', {
  name: 'development',
  action: function () {
    this.render('development');
    Session.set('page_name','Development Application');
    SEO.set({ title: 'Development Application- ' + Meteor.App.NAME });
  }
});
Router.route('/speakers', {
  name: 'Speakers',
  action: function () {
    this.render('speakers');
    Session.set('page_name','Speakers Application');
    SEO.set({ title: 'Speakers Application- ' + Meteor.App.NAME });
  }
});
Router.route('/general', {
  name: 'general',
  action: function () {
    this.render('general');
    Session.set('page_name','General Application');
    SEO.set({ title: 'General Application- ' + Meteor.App.NAME });
  }
});

Router.route('/concerts', {
  name: 'concerts',
  action: function () {
    this.render('concerts');
    Session.set('page_name','concerts');
    SEO.set({ title: 'Poll - ' + Meteor.App.NAME });
  }
});
Router.route('/mnm', {
  name: 'mnm',
  action: function () {
    this.render('mandm');
    Session.set('page_name','Marketing and Media');
    SEO.set({ title: 'Marketing and Media - ' + Meteor.App.NAME });
  }
});
