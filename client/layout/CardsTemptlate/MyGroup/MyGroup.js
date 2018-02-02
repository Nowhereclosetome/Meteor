Template.MyGroup.helpers({
	'group': function(){
		return Meteor.users.find({'profile.group': Meteor.user().profile.group});
	}
});
