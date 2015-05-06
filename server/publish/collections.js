// You'll want to replace these functions. They publish the whole
// collection which is problematic after your app grows

Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('attachments', function() {
  return Attachments.find();
});