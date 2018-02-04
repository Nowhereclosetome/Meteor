Template.UsersList.onCreated(function functionName() {
  this.autorun(()=>{
    this.subscribe('allUsers');
  });
});
Template.UsersList.events({
    'click #submit': function(e,t){
        e.preventDefault();
        Session.set('courseSession', $('#courseSelect').val());
        Session.set('groupSession', $('#groupSelect').val());
    }
});

Template.UsersList.helpers({
    results: function(){
      if (Session.get('courseSession') === 'все'){
        options='<option>-</option>';
          $("#groupSelect").html(options);
        return Meteor.users.find();
      }
      else{
        return Meteor.users.find({
          'profile.course': Session.get('courseSession'),
          'profile.group': Session.get('groupSession')
        });
      }

  },
  userEmail: function() {
    return this.emails[0].address;
  }
});
