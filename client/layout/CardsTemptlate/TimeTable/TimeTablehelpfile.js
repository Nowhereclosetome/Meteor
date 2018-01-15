scheduleDay = (new Date()).getDay();
switch (scheduleDay) {
			case 1:
				scheduleDay = 'Понедельник';
				break;
			case 2:
				scheduleDay = 'Вторник';
				break;
			case 3:
				scheduleDay = 'Среда';
				break;
			case 4:
				scheduleDay = 'Четверг';
				break;
			case 5:
				scheduleDay = 'Пятница';
				break;
			case 6:
				scheduleDay = 'Суббота';
				break;
		}
console.log(scheduleDay);
Template.TimeTable.events({
	"click #tuesday": function(){
		scheduleDay = 'Вторник';
	}

});

Template.TimeTable.helpers({
	'schedule_data': function(){
		return Lessons.find({day:scheduleDay});
	}
	});
