import "./HomePageTemplate.html";

Template.NavBar.events({
    'click #logout-button': function(){
    	Meteor.logout(function() {
        FlowRouter.go('');
    	});
      console.log('LogOut succes');
    }
})
