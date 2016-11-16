FlowRouter.route('/my-classes', {
  name: 'Classes.show',
  action: function(params) {
        BlazeLayout.render("classes", {area: "main"});
    }
});

FlowRouter.route('/', {
    name: 'Home.show',
    action: function(params) {
        BlazeLayout.render('hello', {area: "main"});
    }
});

FlowRouter.route('/my-classes/:classId', {
    action: function(params) {
        BlazeLayout.render('currentClass', {area: "main"});
    }
})

