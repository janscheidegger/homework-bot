import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Classes } from '../imports/api/classes.js';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.classes.helpers({
  classes() {
    return Classes.find({});
  }
});

Template.currentClass.helpers({
  myClass() {
    const classId = FlowRouter.getParam("classId");
    return Classes.findOne({_id: classId});
  }
})

Template.myClass.events({
  'click .remove'(event) {
        Classes.remove(this._id);
  }
})

Template.currentClass.events({
  'submit .add-chat'(event) {
    event.preventDefault();

    const classId = FlowRouter.getParam("classId");


    const target = event.target;
    const chatName = target.chatname.value;

    Classes.update(classId, {
      $set: { chat: chatName }
    });

    target.chatname.value = '';
  }
})

Template.classes.events({
  'submit .new-class'(event) {
    event.preventDefault();
 
    const target = event.target;
    const className = target.classname.value;
 
    Classes.insert({
      className,
      createdAt: new Date(),
    });
 
     target.classname.value = '';
  },
});

