import './LoginPage.html'
Template.auth.onCreated(function() {
  if(Meteor.loggingIn() || Meteor.userId()){
    FlowRouter.go('home');
  }
})
Template.regadmin.onCreated(function() {
  if(Meteor.loggingIn() || Meteor.userId()){
    FlowRouter.go('home');
  }
})
Template.auth.events({
    'click #login-button': function(e,t){
        var email = t.find('#login-email').value,
            password = t.find('#password').value;
        Meteor.loginWithPassword(email,password,function(err){
          if(err){
            console.log(err.reason);
          }
          else{
            FlowRouter.go('home');
            console.log('succes');
          }
        });
    },
    'click #logout-button': function(){
    	Meteor.logout();
    },
    'click #register-btn': function(e,t){
    var email = t.find('#login-email').value,
        username = t.find('#username').value,
        password = t.find('#password').value;

    Accounts.createUser({username:username,password:password,email:email,profile:{course:'none',group:'teacher',role:'administrator'}},function(err){
      console.log(err);
    });
},
})
