Template.whoishere.helpers({
	'teachers': function(){
		return Teachers.find({position: 'here'});
	}
});
