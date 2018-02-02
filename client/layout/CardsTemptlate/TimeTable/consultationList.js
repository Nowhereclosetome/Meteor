Template.ConsultationList.helpers({
	'cons_data': function(){
		return Consultations.find();
	},
  isAdmin: function(){
      var currentUserRole = Meteor.user().profile.role;
			console.log(Meteor.user().username);
      if(currentUserRole === 'administrator') return true;
      else return false;
  }
});

Template.ConsultationList.events({
	'click #add_consultation':function(){
		var teacher_name = document.getElementById('teacher_name').value,
		date = document.getElementById('date').value,
		time = document.getElementById('time').value,
		audience = document.getElementById('audience').value;
		Consultations.insert({teacher_name:teacher_name, date:date, time:time, audience:audience});
    console.log('consultation added');
	},
	"click #remove_consultation":function(){
		Consultations.remove(this._id);
	}
});
