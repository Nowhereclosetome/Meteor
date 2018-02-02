Template.ConsultationEdit.helpers({
	'cons_data': function(){
		return Consultations.find();
	}

});

Template.ConsultationEdit.events({
	'click #add_consultation':function(){
		var date = document.getElementById('date').value,
		time = document.getElementById('time').value,
		audience = document.getElementById('audience').value;
		Consultations.insert({teacher_name:Meteor.user().username, date:date, time:time, audience:audience});
    console.log('consultation added');
	},
	"click #remove_consultation":function(){
		Consultations.remove(this._id);
	}
});
