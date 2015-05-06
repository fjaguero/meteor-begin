this.Config = {
  name: 'My App',
  title: function() {
    return TAPi18n.__('configTitle');
  },
  subtitle: function() {
    return TAPi18n.__('configSubtitle');
  },
  logo: function() {
    return '<b>' + this.name + '</b>';
  },
  footer: function() {
    return this.name + ' - Copyright ' + new Date().getFullYear();
  },
  emails: {
    from: 'no-reply@' + Meteor.absoluteUrl(),
    contact: 'hello' + Meteor.absoluteUrl()
  },
  username: false,
  defaultLanguage: 'en',
  dateFormat: 'D/M/YYYY',
  privacyUrl: 'http://meteorfactory.io',
  termsUrl: 'http://meteorfactory.io',
  legal: {
    address: 'Jessnerstrasse 18, 12047 Berlin',
    name: 'Meteor Factory',
    url: 'http://benjaminpeterjones.com'
  },
  about: 'http://meteorfactory.io',
  blog: 'http://learn.meteorfactory.io',
  socialMedia: {
    facebook: {
      url: 'http://facebook.com/benjaminpeterjones',
      icon: 'facebook'
    },
    twitter: {
      url: 'http://twitter.com/BenPeterJones',
      icon: 'twitter'
    },
    github: {
      url: 'http://github.com/yogiben',
      icon: 'github'
    },
    info: {
      url: 'http://meteorfactory.io',
      icon: 'link'
    }
  },
  homeRoute: '/',
  publicRoutes: ['home'],
  dashboardRoute: '/dashboard'
};