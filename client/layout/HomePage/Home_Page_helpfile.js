var last_Disciplineid;
var last_Timetableid;
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
Template.HomePage.helpers({
	'cards':function(){
		return Cards.find({username: Meteor.user().username});
	}
});
Template.registerHelper('if_eq', function (a, b) {
      return a === b;
    });
Template.HomePage.events({
	"click #regStudent": function(){
       		Cards.insert({cardname:'registerStudent', username: Meteor.user().username});
       		last_Disciplineid = function(){
       			return Cards.findOne({cardname:'registerStudent', username: Meteor.user().username})._id;
       			}
            },
    "click #remove_regStudent":function(){
    		Cards.remove({_id:Cards.findOne({cardname:'registerStudent', username: Meteor.user().username})._id});
    },
		"click #userList": function(){
	       		Cards.insert({cardname:'listOfUsers', username: Meteor.user().username});
	       		last_Disciplineid = function(){
	       			return Cards.findOne({cardname:'listOfUsers', username: Meteor.user().username})._id;
	       			}
	            },
	    "click #remove_userList":function(){
	    		Cards.remove({_id:Cards.findOne({cardname:'listOfUsers', username: Meteor.user().username})._id});
	    },
	"click #add_MyDisciplines": function(){
       		Cards.insert({cardname:'disciplines', username: Meteor.user().username});
       		last_Disciplineid = function(){
       			return Cards.findOne({cardname:'disciplines', username: Meteor.user().username})._id;
       			}
            },
    "click #remove_MyDisciplines":function(){
    		Cards.remove({_id:Cards.findOne({cardname:'disciplines', username: Meteor.user().username})._id});
    },
    "click #add_TimeTable": function(){
       		Cards.insert({cardname:'table', username: Meteor.user().username});
       		last_Timetableid = function(){
       			return Cards.findOne({cardname:'table', username: Meteor.user().username})._id;
       			}
            },
    "click #remove_TimeTable":function(){
    		Cards.remove({_id:Cards.findOne({cardname:'table', username: Meteor.user().username})._id});
    },
		'click #remove-user-btn': function () {
  Meteor.users.remove({ _id: this._id }, function (error, result) {
    if (error) {
      console.log("Error removing user: ", error);
    } else {
      console.log("Number of users removed: " + result);
    }
  })
}
});
