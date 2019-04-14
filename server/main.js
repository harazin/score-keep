import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

});

let user = {
	name: 'Andrew',
	location: 'London'
};

let person = {
	...user,
	age: 21
};

let house = {
	bedrooms: 2,
	bathrooms: 1.5
};

let yearBuilt = 1995;

let building = {
	...house,
	bedrooms: 3,
	yearBuilt,
	flooring: 'Carpet'
};


console.log(building);
