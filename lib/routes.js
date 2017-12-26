let teachersUsers = FlowRouter.group({});
let studentUsers = FlowRouter.group({
  triggersEnter: [function(context, redirect){
    if(!Meteor.loggingIn() && !Meteor.userId()){
      redirect('/login');
    }
  }]
});
studentUsers.route('/',{
  name: 'home',
  action(){
    BlazeLayout.render('HomePage');
  }
})
FlowRouter.route('/login',{
  name: 'login',
  action(){
    BlazeLayout.render('auth');
  }
})
FlowRouter.route('/schedule',{
  name: 'schedule',
  action(){
    BlazeLayout.render('schedule');
  }
})