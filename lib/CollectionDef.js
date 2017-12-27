Lessons = new Mongo.Collection('lessons');
Cards = new Mongo.Collection('cards');
Meteor.users.allow({
  remove: function (userId, doc) {
    var currentUser, userRole;
    currentUser = Meteor.users.findOne({ _id: userId }, { fields: { 'profile.role': 1 } });
    userRole = currentUser.profile && currentUser.profile.role;
    if (userRole === "administrator" && userId !== doc._id) {
      console.log("Access granted. New account is added.");
      return true;
    } else {
      console.log("Access denied. Account is not added.");
      return false;
    }
  },
  fetch: []
});
