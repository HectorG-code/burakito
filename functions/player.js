export class Player {
	constructor(name) {
		this.name = name;
		this.hand = [];
		this.score = 0;
	}

	take = (card) => {
		this.hand.push(card);
		const handScr = document.getElementById("playerHand" + this.name + "Scr");
		const cardScr = document.createElement("div");
		cardScr.className = "card";

		if (card.suit === "♥" || card.suit === "♦") {
			cardScr.classList.add("card__red");
		}

		const cardNumberSmall = document.createElement("h1");
		cardNumberSmall.classList.add("card--items");
		cardNumberSmall.classList.add("card--number__small");
		cardNumberSmall.textContent = card.number;
		const cardNumberBig = document.createElement("h1");
		cardNumberBig.classList.add("card--items");
		cardNumberBig.classList.add("card--number__big");
		cardNumberBig.textContent = card.number;
		const cardNumberSuit = document.createElement("h1");
		cardNumberSuit.classList.add("card--items");
		cardNumberSuit.classList.add("card--suit");
		cardNumberSuit.textContent = card.suit;

		cardScr.appendChild(cardNumberSmall);
		cardScr.appendChild(cardNumberBig);
		cardScr.appendChild(cardNumberSuit);

		handScr.appendChild(cardScr);
	};
}
