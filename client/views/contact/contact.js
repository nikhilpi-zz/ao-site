Template['contact'].helpers({
  'emails': function () {
    return contact_info;
  }
});

Template['contact'].events({
});

var contact_info = [
  {
    name: 'General',
    color: 'magenta',
    email: 'questions@aoproductions.net'
  },
  {
    name: 'Films',
    color: 'cyan',
    email: 'films@aoproductions.net'
  },
  {
    name: 'Concerts',
    color: 'yellow',
    email: 'concerts@aoproductions.net'
  }
];