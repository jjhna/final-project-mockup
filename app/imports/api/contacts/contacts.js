import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Contacts = new Mongo.Collection('Contacts');

/**
 * Create the schema for Stuff
 */
export const ContactsSchema = new SimpleSchema({
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 200,
  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 200,
  },
  city: {
    label: 'city',
    type: String,
    optional: false,
    max: 10,
  },
  telephone: {
    label: 'telephone',
    type: Number,
    optional: false,
    max: 9999999999,
  },
  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 200,
  },
  date: {
    label: 'date',
    type: String,
    optional: false,
    max: 10,
  },
  status: {
    label: 'status',
    type: String,
    optional: false,
    max: 10,
  },
  occupants: {
    label: 'occupants',
    type: Number,
    optional: false,
    max: 10,
  },
});

Contacts.attachSchema(ContactsSchema);