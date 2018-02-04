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
}),
FlowRouter.route('/login',{
  name: 'login',
  action(){
    BlazeLayout.render('auth');
  }
}),
FlowRouter.route('/regadmin',{
  name: 'regadmin',
  action(){
    BlazeLayout.render('regadmin');
  }
}),
FlowRouter.route('/schedule',{
  name: 'schedule',
  action(){
    BlazeLayout.render('ScheduleEdit');
  }
});
if (Meteor.isServer) {
  WebApp.connectHandlers.use("/", function(req, res, next) {
    var isValidRoute = false;
    for(var i=0; i<FlowRouter._routes.length; i++){
      if (req.url == FlowRouter._routes[i].path) {
        isValidRoute = true;
        break;
      }
    }
    if(isValidRoute) {
      next();
    } else {
      res.writeHead(404);
      res.end("Page is not Found");
    }
  });
}
