// Bot dependencies
import { RGBot } from 'rg-bot';
import RGCTFUtils, { CTFEvent } from 'rg-ctf-utils';
import { Vec3 } from 'vec3';
import { Item } from 'prismarine-item';
import { Entity } from 'prismarine-entity';
import { Block } from 'prismarine-block';
const armorManager = require('mineflayer-armor-manager')

// Base Class Nodes
import { NodeStatus } from "./lib/BaseClasses/NodeStatus";
import Node from "./lib/BaseClasses/Node";
import RootNode from './lib/BaseClasses/RootNode';
import SequenceNode  from './lib/BaseClasses/SequenceNode';
import SelectorNode from './lib/BaseClasses/SelectorNode';
import ConditionNode from './lib/BaseClasses/ConditionNode';
import ActionNode from './lib/BaseClasses/ActionNode';
// Decorators
import AlwaysSucceed from './lib/BaseClasses/Decorators/AlwaysSucceed';
import AlwaysFail from './lib/BaseClasses/Decorators/AlwaysFail';
import Invert from './lib/BaseClasses/Decorators/Invert';

// Generated Nodes
import Node3 from './lib/Node3';

// Reference to root not
let rootNode: RootNode;

export function configureBot(bot: RGBot) {

    bot.setDebug(false)
    bot.allowParkour(true)
    bot.allowDigWhilePathing(true)

    // Load the armor-manager plugin (https://github.com/PrismarineJS/MineflayerArmorManager)
    bot.mineflayer().loadPlugin(armorManager)

    // construct tree
    const topLevelSequenceNode = new SequenceNode("Top Level Sequence Node");
    topLevelSequenceNode.addChild(new Node3());

    rootNode = new RootNode("Root Node", bot);
    rootNode.addChild(topLevelSequenceNode);

}

export async function runTurn(bot: RGBot) {
    try
    {
        await rootNode.execute();
    }
    catch(err) {
        console.log("Error Executing Tree: ", err)
    }
}