Template.UsersList.onCreated(function functionName() {
  this.autorun(()=>{
    this.subscribe('allUsers');
  });
});
Template.UsersList.helpers({
  users: function() {
    return Meteor.users.find();
  },
  userEmail: function() {
    return this.emails[0].address;
  }
})
