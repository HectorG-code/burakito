export const renderPlayer = (player, disposeFn) => {
	let playerScreen = document.getElementById("player" + player.name + "Scr");

	if (!playerScreen) {
		const playersDiv = document.getElementById("players");
		playerScreen = document.createElement("div");
		playerScreen.id = "player" + player.name + "Scr";
		playerScreen.className = "player";
		playersDiv.appendChild(playerScreen);
	}

	playerScreen.innerHTML = "";

	const playerTitle = document.createElement("h1");
	playerTitle.textContent = player.name;
	playerScreen.appendChild(playerTitle);

	const playerHand = document.createElement("div");
	playerHand.id = "playerHand" + player.name + "Scr";
	playerHand.className = "player--hand";
	playerScreen.appendChild(playerHand);

	player.hand.forEach((card) => {
		const cardScr = document.createElement("div");
		cardScr.className = "card";
		cardScr.addEventListener("click", () => {
			disposeFn(card);
		});

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

		playerHand.appendChild(cardScr);
	});
};

export const renderDeck = (cardsLeft, id) => {
	const deck = document.getElementById(id);
	deck.innerHTML = "";
	const cardNumberBig = document.createElement("h1");
	cardNumberBig.classList.add("card--items");
	cardNumberBig.classList.add("card--number__big");
	cardNumberBig.textContent = cardsLeft;
	deck.appendChild(cardNumberBig);
};
