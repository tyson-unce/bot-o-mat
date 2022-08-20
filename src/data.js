const robotTypes = [
	{
		UNIPEDAL: 'Unipedal',
		BIPEDAL: 'Bipedal',
		QUADRUPEDAL: 'Quadrupedal',
		ARACHNID: 'Arachnid',
		RADIAL: 'Radial',
		AERONAUTICAL: 'Aeronautical',
	},
];
//0U, 4U, 1B, 5B, 2Q, 3Q
const robotTasks = [
	{
		description: 'do the dishes',
		eta: 1000,
	},
	{
		description: 'sweep the house',
		eta: 3000,
	},
	{
		description: 'do the laundry',
		eta: 10000,
	},
	{
		description: 'take out the recycling',
		eta: 4000,
	},
	{
		description: 'make a sammich',
		eta: 7000,
	},
	{
		description: 'mow the lawn',
		eta: 20000,
	},
	{
		description: 'rake the leaves',
		eta: 18000,
	},
	{
		description: 'give the dog a bath',
		eta: 14500,
	},
	{
		description: 'bake some cookies',
		eta: 8000,
	},
	{
		description: 'wash the car ',
		eta: 20000,
	},
	{
		description: 'make a cup of coffee',
		eta: 3000,
	},
	{
		description: 'read a bedtime book',
		eta: 10000,
	},
	{
		description: 'grab the remote for you',
		eta: 3000,
	},
	{
		description: 'take you on a walk ',
		eta: 18000,
	},
	{
		description: 'train you for a marathon ',
		eta: 30000,
	},
	{
		description: 'play you in a match of tennis ',
		eta: 15000,
	},
	{
		description: 'play you in a game of chess',
		eta: 8000,
	},
	{
		description: 'paint a portrait of you ',
		eta: 6000,
	},
	{
		description: 'drive you to your in-laws house',
		eta: 10000,
	},
	{
		description: 'get you a cold one',
		eta: 3000,
	},
	{
		description: 'build a man cave',
		eta: 20000,
	},
	{
		description: 'make a 4-course meal',
		eta: 11000,
	},
	{
		description: 'make a banana split',
		eta: 6000,
	},
	{
		description: 'turn the lights off',
		eta: 7000,
	},
	{
		description: 'pop bubble wrap for your satisfaction',
		eta: 2000,
	},
	{
		description: 'make your bed',
		eta: 5000,
	},
	{
		description: 'clean your bedsheets',
		eta: 2000,
	},
	{
		description: 'water the plants',
		eta: 4000,
	},
	{
		description: 'book tickets to an event for you',
		eta: 5000,
	},
	{
		description: 'take child(ren) to school',
		eta: 15000,
	},
];

module.exports = { robotTasks, robotTypes };
