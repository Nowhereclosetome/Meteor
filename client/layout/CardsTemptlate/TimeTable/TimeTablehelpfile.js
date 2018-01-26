import React, { Component } from 'react';
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

Template.TimeTable.helpers({
	'schedule_data': function(){
		return Lessons.find({day: scheduleDay});
	}
});
Template.Monday.helpers({
	'schedule_data': function(){
		return Lessons.find({day: "Понедельник"});
	}
});
Template.Tuesday.helpers({
	'schedule_data': function(){
		return Lessons.find({day: "Вторник"});
	}
});
Template.Wednesday.helpers({
	'schedule_data': function(){
		return Lessons.find({day: "Среда"});
	}
});
Template.Thursday.helpers({
	'schedule_data': function(){
		return Lessons.find({day: "Четверг"});
	}
});
Template.Friday.helpers({
	'schedule_data': function(){
		return Lessons.find({day: "Пятница"});
	}
});
Template.Saturday.helpers({
	'schedule_data': function(){
		return Lessons.find({day: "Суббота"});
	}
});

Template.Choise.events({
	'click #today':function(){
		Cards.remove(this._id); 
		Cards.insert({cardname:'schedule', username: Meteor.user().username, day: scheduleDay});
	},
	'click #monday':function(){
		Cards.remove(this._id); 
		Cards.insert({cardname:'schedule', username: Meteor.user().username, day: 'Понедельник'});
	},
	'click #tuesday':function(){
		Cards.remove(this._id); 
		Cards.insert({cardname:'schedule', username: Meteor.user().username, day: 'Вторник'});
	},
	'click #wednesday':function(){
		Cards.remove(this._id); 
		Cards.insert({cardname:'schedule', username: Meteor.user().username, day: 'Среда'});
	},
	'click #thursday':function(){
		Cards.remove(this._id); 
		Cards.insert({cardname:'schedule', username: Meteor.user().username, day: 'Четверг'});
	},
	'click #saturday':function(){
		Cards.remove(this._id); 
		Cards.insert({cardname:'schedule', username: Meteor.user().username, day: 'Суббота'});
	},
	'click #friday':function(){
		Cards.remove(this._id); 
		Cards.insert({cardname:'schedule', username: Meteor.user().username, day: 'Пятница'});
	}

});
Template.HomePage.helpers({
	'cards_sch':function(){
			return Cards.find({cardname: 'schedule'});
	}
});