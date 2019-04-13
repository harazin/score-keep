import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {
	let square = function (x) {
		return x * x;
	}

	let double = (x) => x * 2;

	let user = {
		name: 'Max',
		sayHi () {
			setTimeout(() => {
				console.log(this.name);
			}, 1000);

		}
	};

	let numbers = [9, 99, 4, 56];
	let newNumbers = numbers.map((number) => number + 1);

	console.log('Square: ', square(4));
	console.log('Double: ', double(4));
	user.sayHi();
	console.log(newNumbers);
});
