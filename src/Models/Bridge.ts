import Card from "./Card";

export default class Bridge {
    cardToRevealInHand: Card;
    cardToRevealInDeck: Card;
    cardToAddToHand: Card;

    constructor(cardToRevealInHand: Card, cardToRevealInDeck: Card, cardToAddToHand: Card) {
        this.cardToRevealInHand = cardToRevealInHand;
        this.cardToRevealInDeck = cardToRevealInDeck;
        this.cardToAddToHand = cardToAddToHand;
    }
}