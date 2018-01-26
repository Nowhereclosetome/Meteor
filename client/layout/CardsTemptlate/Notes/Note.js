Template.Notes.helpers({
	"notes":function(){
		return Notes.find({username: Meteor.user().username});
	}
});

Template.Notes.events({
	"click #add":function(){
		var note = document.getElementById("note_Text").value;
		Notes.insert({
			text:note,
			username:Meteor.user().username
		});
		last_Timetableid = function(){
            return Cards.findOne({username: Meteor.user().username})._id;
            }
	},
	
		 "click #removeNote":function(){
        Cards.remove({_id:Cards.findOne({username: Meteor.user().username})._id});
	},
	"click #delete": function(){
		Notes.remove(this._id);
	}
});
