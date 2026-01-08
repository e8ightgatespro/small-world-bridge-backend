import { Injectable } from "@nestjs/common";
import Bridge from "src/Models/Bridge";
import Card from "src/Models/Card";

@Injectable()
export class BridgeService {
  getBridgesInDeck(deck: Card[]): Bridge[] {
    const deckToCheck: Card[] = deck.map(card => new Card(card.name, card.race, card.attribute, card.level, card.atk, card.def));
    const bridgesFound: Bridge[] = [];

    deckToCheck.forEach((cardInDeck: Card) => {
        bridgesFound.push(...this.getSmallWorldBridgesForDeck(cardInDeck, deckToCheck))
    });
    return bridgesFound;
  }

  private getSmallWorldBridgesForDeck(cardToMatch: Card, deck: Card[]): Bridge[] {
    const bridges: Bridge[] = [];
    const cardsToBanishFromDeck: Card[] = deck.filter(cardInDeck => cardInDeck.compareStats(cardToMatch));

    cardsToBanishFromDeck.forEach(cardToBanish => {
        const cardsToRevealInHand: Card[] = deck.filter(cardInDeck => 
            cardInDeck.compareStats(cardToMatch)
        );

        cardsToRevealInHand.forEach(cardToRevealInHand => {
            bridges.push(new Bridge(
                cardToRevealInHand,
                cardToBanish,
                cardToMatch
            ));
        });
    });
    return bridges;
  }
}