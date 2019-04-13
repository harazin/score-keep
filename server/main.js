import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
	class Person {
		constructor(name = 'Anonymous', age = 0) {
			this.name = name;
			this.age = age
		}

		getGreeting() {
			return `Hi! I am ${this.name}.`;
		}

		getPersonDescription() {
			return `${this.name} is ${this.age} years old.`;
		}
	}

	class Employee extends Person{
		constructor(name, age, title) {
			super(name, age);
			this.title = title;
		}

		getGreeting() {
			if(this.title){
				return `Hi! I am ${this.name}. I work as a ${this.title}.`;
			} else {
				return super.getGreeting();
			}
		}

		hasJob() {
			return !!this.title;
		}
	}


	class Programmer extends Person {
		constructor(name, age, prefferedLanguage = 'Assembly') {
			super(name, age);
			this.prefferedLanguage = prefferedLanguage;
		}
		getGreeting() {
			return `Hello! I'm ${this.name}, and my favourite language is ${this.prefferedLanguage}.`
		}
	}
	let me = new Programmer('Maximilian', 21, JavaScript);
	console.log(me.getGreeting());
	console.log(me.getPersonDescription());
});
