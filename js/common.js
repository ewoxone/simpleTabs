function Fruit(color, shape) {
	this.color = color;
	this.shape = shape;
}
var melon = new Fruit('green', 'round'),
	apple = new Fruit('red', 'superround');
// var apple = new Object();
// apple.color = 'red';
// apple.shape = 'square';
melon.about = function () {
	return 'Super melon is ' + this.color + ' and ' + this.shape;
};
apple.about = function () {
	return 'Super apple is ' + this.color + ' and ' + this.shape;
};
console.log(melon.about());
console.log(apple.about());


var person = {
	name : 'Vlad',
	age: 24,
	children: ['Lola', 'Giwi'],
	address: {
		street: 'devyatkino',
		city: 'spb',
		country: 'ru'
	},
	nameAge: function () {
		return this.name + "'s age is " + this.age;
	}
};

person.children.push('Masha');

console.log (person.nameAge());
console.log (person.children);

function summ(a, b) {
	return a + b;
}

//document.write('Сумма равна ' + summ(10, 12));

/*
var res = 24;
switch (res) {
	case 1:
		console.log('равно 1');
		break;
	case 2:
		console.log('равно 2');
		break;
	case 3:
		console.log('равно 3');
		break;		
	default:
		console.log('не задано');
		break;
}
*/

/*
	var i = 0;
	while (i < 10) {
		console.log(i);
		i++;
	}
*/

/*
var needColors = false,
	colors = ['Red', 'Green', 'Blue'];
if (!needColors) {
	let color_name = prompt('Угадайте первый цвет');
	if (colors[0] == color_name) {
		alert('Вы угадали');
	} else {
		alert('Еще раз');
	}
	colors[3] = 'yelloo';
	colors.push('last');
	document.writeln(colors[3]);
	document.writeln(colors[4]);
	document.writeln(colors[0] + colors[1]);
	for (var i = 0; i < colors.length; i++) {
		console.log(colors[i]);
	}	
} else {
	let num1 = 10,
		num2 = 14;
		
	num1++;
	num2 += 1;
	document.write(Math.round(2.49) + '<br>');
	document.write('равно ', num1 + num2);
}
*/

