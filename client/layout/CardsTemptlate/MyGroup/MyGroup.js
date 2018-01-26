Template.MyGroup.helpers({
	'group': function(){
		console.log(Meteor.user().profile.group);
		var users_new = Meteor.users.find({'pofile.group': Meteor.user().profile.group});
		console.log(users_new[0].username);
		console.log(users_new);
		return Meteor.users.find({'pofile.group': Meteor.user().profile.group});
	}
});