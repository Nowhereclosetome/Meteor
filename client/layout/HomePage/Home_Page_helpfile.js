var last_Disciplineid;
var last_Timetableid;
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
Template.HomePage.helpers({
	isAdmin: function(){
      var currentUserRole = Meteor.user().profile.role;
      if(currentUserRole === 'administrator') return true;
      else return false;
  },
  'cards':function(){
		return Cards.find({username: Meteor.user().username});
	},
    'users': function(){
      return users.find();
    }
});
Template.registerHelper('if_eq', function (a, b) {
      return a === b;
    });
Template.HomePage.events({
  "click #se": function(){
          Cards.insert({cardname:'ScheduleEdit', username: Meteor.user().username});
          last_Disciplineid = function(){
            return Cards.findOne({cardname:'ScheduleEdit', username: Meteor.user().username})._id;
            }
            },
    "click #ser":function(){
        Cards.remove(this._id);
    },
  "click #consEdit": function(){
          Cards.insert({cardname:'ConsultationEdit', username: Meteor.user().username});
          last_Disciplineid = function(){
            return Cards.findOne({cardname:'ConsultationEdit', username: Meteor.user().username})._id;
            }
            },
    "click #remove_consEdit":function(){
        Cards.remove(this._id);
    },
  "click #add_ConsultationList": function(){
          Cards.insert({cardname:'ConsultationList', username: Meteor.user().username});
          last_Disciplineid = function(){
            return Cards.findOne({cardname:'ConsultationList', username: Meteor.user().username})._id;
            }
            },
    "click #remove_ConsultationList":function(){
        Cards.remove(this._id);
    },
	"click #regStudent": function(){
       		Cards.insert({cardname:'registerStudent', username: Meteor.user().username});
       		last_Disciplineid = function(){
       			return Cards.findOne({cardname:'registerStudent', username: Meteor.user().username})._id;
       			}
            },
    "click #remove_regStudent":function(){
 Cards.remove(this._id);    },
		"click #userList": function(){
	       		Cards.insert({cardname:'listOfUsers', username: Meteor.user().username});
	       		last_Disciplineid = function(){
	       			return Cards.findOne({cardname:'listOfUsers', username: Meteor.user().username})._id;
	       			}
	            },
	    "click #remove_userList":function(){
 Cards.remove(this._id);	    },
	"click #add_MyDisciplines": function(){
       		Cards.insert({cardname:'disciplines', username: Meteor.user().username});
       		last_Disciplineid = function(){
       			return Cards.findOne({cardname:'disciplines', username: Meteor.user().username})._id;
       			}
            },
    "click #remove_MyDisciplines":function(){
 Cards.remove(this._id);    },
    "click #add_MyGroup": function(){
          Cards.insert({cardname:'MyGroup', username: Meteor.user().username});
          last_Disciplineid = function(){
            return Cards.findOne({cardname:'MyGroup', username: Meteor.user().username})._id;
            }
            },
    "click #remove_MyGroup":function(){
 Cards.remove(this._id);    },
    "click #add_Choise": function(){
       		Cards.insert({cardname:'choise', username: Meteor.user().username});
       		last_Timetableid = function(){
       			return Cards.findOne({cardname:'choise', username: Meteor.user().username})._id;
       			}
            },
    "click #remove_Choise":function(){
 Cards.remove(this._id);    },
 "click #sqd":function(){
 Cards.remove(this._id);    },
    "click #addNote": function(){
          Cards.insert({cardname:'note', username: Meteor.user().username});
          last_Timetableid = function(){
            return Cards.findOne({cardname:'note', username: Meteor.user().username})._id;
            }
            },
    "click #removeNote":function(){
 Cards.remove(this._id);    },
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
