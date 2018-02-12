import "./HomePageTemplate.html";

Template.NavBar.events({
    'click #logout-button': function(){
    	Meteor.logout(function() {
        FlowRouter.go('');
    	});
    	var idofthis = Teachers.find({name: Meteor.user().username}).fetch()[0]._id;
    Teachers.update({_id:idofthis},{$set: {position: 'nothere'}});
      console.log('LogOut succes');
    }
})
