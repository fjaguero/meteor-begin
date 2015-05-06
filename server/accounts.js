Accounts.onCreateUser(function(options, user) {
  var attachData, email, picture, profileImageUrl, profilePicture, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9;
  profileImageUrl = void 0;
  user.profile = user.profile || {};
  if ((ref = user.services) != null ? ref.facebook : void 0) {
    user.emails = [
      {
        address: user.services.facebook.email,
        verified: true
      }
    ];
    user.profile.firstName = user.services.facebook.first_name;
    user.profile.lastName = user.services.facebook.last_name;
  }
  if ((ref1 = user.services) != null ? ref1.google : void 0) {
    user.emails = [
      {
        address: user.services.google.email,
        verified: true
      }
    ];
    user.profile.firstName = user.services.google.given_name;
    user.profile.lastName = user.services.google.family_name;
  }
  if ((ref2 = user.services) != null ? (ref3 = ref2.facebook) != null ? ref3.id : void 0 : void 0) {
    profileImageUrl = 'https://graph.facebook.com/v2.3/' + user.services.facebook.id + '/picture?type=normal';
  }
  if ((ref4 = user.services) != null ? (ref5 = ref4.google) != null ? ref5.id : void 0 : void 0) {
    profileImageUrl = user.services.google.picture;
  }
  if ((ref6 = user.services) != null ? (ref7 = ref6.twitter) != null ? ref7.id : void 0 : void 0) {
    profileImageUrl = user.services.twitter.profile_image_url;
  }
  if (!profileImageUrl) {
    email = ((ref8 = user.emails) != null ? (ref9 = ref8[0]) != null ? ref9.address : void 0 : void 0) || '';
    profileImageUrl = Gravatar.imageUrl(email, {
      "default": 'identicon'
    });
  }
  if (profileImageUrl) {
    picture = new FS.File();
    attachData = Meteor.wrapAsync(picture.attachData, picture);
    attachData(profileImageUrl);
    picture.name('picture ' + user._id + '.png');
    profilePicture = ProfilePictures.insert(picture);
    user.profile.picture = profilePicture._id;
  }
  return user;
});