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
    name: 'Community Engagement',
    color: 'yellow',
    email: 'communityengagement@aoproductions.net'
  },
  {
    name: 'Concerts',
    color: 'magenta',
    email: 'concerts@aoproductions.net'
  },
  {
    name: 'Films',
    color: 'cyan',
    email: 'films@aoproductions.net'
  },
  {
    name: 'Finance',
    color: 'yellow',
    email: 'finance@aoproductions.net'
  },
  {
    name: 'Marketing and Media',
    color: 'magenta',
    email: 'marketing@aoproductions.net'
  },
  {
    name: 'Speakers',
    color: 'cyan',
    email: 'speakers@aoproductions.net'
  },
  {
    name: 'Productions',
    color: 'yellow',
    email: 'productions@aoproductions.net'
  },
];
