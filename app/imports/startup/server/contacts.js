
import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {first: 'John', last: 'Doe', city: 'Honolulu', telephone: '8082224444', email: 'email@hawaii.edu', date: '2017-03-15',  status: 'Passenger'},
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedStuffs(stuff) {
    Contacts.insert(stuff);
  });
}