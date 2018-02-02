Template.ScheduleEdit.helpers({
	'schedule_data': function(){
		return Lessons.find();
	}

});

Template.ScheduleEdit.events({
	'click #submit_Form':function(){
		var Day = document.getElementById('day').value,
		Course = document.getElementById('course').value,
		firstp = document.getElementById('firstles').value,
		secondp = document.getElementById('secondles').value,
		thirdp = document.getElementById('thirdles').value,
		firstt = document.getElementById('firstt').value,
		secondt = document.getElementById('secondt').value,
		thirdt = document.getElementById('thirdt').value;
		Lessons.insert({day:Day, course: Course, lessons:[{first:[{lesson:firstp, time:firstt}],second:[{lesson:secondp, time:secondt}],third:[{lesson:thirdp, time:thirdt}]}]});
	},
});
