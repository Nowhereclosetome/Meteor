Template.schedule.helpers({
	'schedule_data': function(){
		return Lessons.find();
	}

});

Template.schedule.events({
	'click #submit_Form':function(event,template){
		var Day = template.find('#day').value,
		Course = template.find('#course').value,
		firstp = template.find('#firstles').value,
		secondp = template.find('#secondles').value,
		thirdp = template.find('#thirdles').value,
		firstt = template.find('#firstt').value,
		secondt = template.find('#secondt').value,
		thirdt = template.find('#thirdt').value;
		Lessons.insert({day:Day, course: Course, lessons:[{first:[{lesson:firstp, time:firstt}],second:[{lesson:secondp, time:secondt}],third:[{lesson:thirdp, time:thirdt}]}]});
	}

});