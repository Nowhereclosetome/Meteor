Meteor.methods({
  createNewUser: function(options) {
    Accounts.createUser(options);
  }
});
