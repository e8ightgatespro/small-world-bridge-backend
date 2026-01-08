import { Race } from "./enums/Race";
import { Attribute } from "./enums/Attribute";

export default class Card {
    name: string;
    race: Race;
    attribute: Attribute;
    level: number;
    atk: number | '?';
    def: number | '?';

    constructor(name: string, race: Race, attribute: Attribute, level: number, atk: number | '?', def: number | '?') {
        this.name = name;
        this.race = race;
        this.attribute = attribute;
        this.level = level;
        this.atk = atk;
        this.def = def;
    }

    compareStats(other: Card): boolean {
        let matchCount = 0;

        if (this.race === other.race) matchCount++;
        if (this.attribute === other.attribute) matchCount++;
        if (this.level === other.level) matchCount++;
        if (this.atk === other.atk) matchCount++;
        if (this.def === other.def) matchCount++;
        return matchCount === 1;
    }
}
