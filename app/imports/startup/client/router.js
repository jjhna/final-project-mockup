import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Landing_Page' });
  },
});

FlowRouter.route('/Home_Page', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Template', { main: 'Home_Page' });
  },
});


FlowRouter.route('/create-profile', {
  name: 'Create_Profile',
  action() {
    BlazeLayout.render('App_Template', { main: 'Create_Profile' });
  },
});

FlowRouter.route('/edit-contact/:_id', {
  name: 'Edit_Contact_Page',
  action() {
    BlazeLayout.render('App_Template', { main: 'Edit_Contact_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Template', { main: 'App_Not_Found' });
  },
};