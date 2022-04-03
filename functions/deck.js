class Card {
	constructor(number, suit, value) {
		this.number = number;
		this.suit = suit;
		this.value = value;
	}
}

const commons = [
	{ number: "A", value: 20 },
	{ number: "2", value: 20 },
	{ number: "3", value: 5 },
	{ number: "4", value: 5 },
	{ number: "5", value: 5 },
	{ number: "6", value: 5 },
	{ number: "7", value: 5 },
	{ number: "8", value: 10 },
	{ number: "9", value: 10 },
	{ number: "10", value: 10 },
	{ number: "J", value: 10 },
	{ number: "Q", value: 10 },
	{ number: "K", value: 10 },
];
const suits = ["♥", "♦", "♣", "♠"];

export const deck = [];

export const generate = () => {
	suits.forEach((suit) => {
		deck.push(
			...commons.map((common) => {
				return new Card(common.number, suit, common.value);
			})
		);
	});
	deck.push(new Card("Joker", "", 50));
	deck.push(new Card("Joker", "", 50));
};

export const shuffle = () => {
	let top = deck.length;

	while (--top) {
		let current = Math.floor(Math.random() * (top + 1));
		[deck[current], deck[top]] = [deck[top], deck[current]];
	}
};

export const draw = () => {
	return deck.pop();
};
