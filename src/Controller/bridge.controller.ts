import { Body, Controller, Post } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import Bridge from 'src/Models/Bridge';
import Card from 'src/Models/Card';

@Controller('/bridge')
export class BridgeController {
  constructor(private readonly bridgeService: BridgeService) {}

  @Post('/getBridgesInDeck')
  getBridgesInDeck(@Body() deck: Card[]): Bridge[] {
    return this.bridgeService.getBridgesInDeck(deck);
  }
}
