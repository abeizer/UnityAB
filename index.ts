// Bot dependencies
import { RGBot } from 'rg-bot';
import RGCTFUtils, { CTFEvent } from 'rg-ctf-utils';
import { Vec3 } from 'vec3';
import { Item } from 'prismarine-item';
import { Entity } from 'prismarine-entity';
import { Block } from 'prismarine-block';
const armorManager = require('mineflayer-armor-manager')


// Base Class Nodes
import { NodeStatus } from './lib/BaseClasses/NodeStatus';
import Node from './lib/BaseClasses/Node';
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
import IsInGame from './lib/IsInGame';
import SetChartype from './lib/SetChartype';
import IsFloorSwitchInRange from './lib/IsFloorSwitchInRange';
import StandOnSwitch from './lib/StandOnSwitch';
import IsHumanNearby from './lib/IsHumanNearby';
import FollowHuman from './lib/FollowHuman';
import IsEnemyNearby from './lib/IsEnemyNearby';
import Attack from './lib/Attack';

// Reference to root node
let rootNode: RootNode;

export function configureBot(rg: any) {

    rg.isSpawnable=true
    rg.lifecycle="MANAGED"
    rg.characterConfig={
  "characterType": "Archer"
}

    // construct tree
    const floorSwitches = new SequenceNode("Floor switches");
    floorSwitches.addChild(new IsFloorSwitchInRange());
    floorSwitches.addChild(new StandOnSwitch());

    const supportHuman = new SequenceNode("Support human");
    supportHuman.addChild(new IsHumanNearby());
    supportHuman.addChild(new FollowHuman());

    const attackEnemy = new SequenceNode("Attack enemy");
    attackEnemy.addChild(new IsEnemyNearby());
    attackEnemy.addChild(new Attack());

    const chooseAnAction = new SelectorNode("Choose an action");
    chooseAnAction.addChild(floorSwitches);
    chooseAnAction.addChild(supportHuman);
    chooseAnAction.addChild(attackEnemy);

    const topLevelSequenceNode = new SequenceNode("Top Level Sequence Node");
    topLevelSequenceNode.addChild(new IsInGame());
    topLevelSequenceNode.addChild(new SetChartype());
    topLevelSequenceNode.addChild(chooseAnAction);

    rootNode = new RootNode("Root Node");
    rootNode.addChild(topLevelSequenceNode);

}

export async function processTick(rg: any) {
    try
    {
        await rootNode.execute(rg);
    }
    catch(err) {
        console.log("Error Executing Tree: ", err)
    }
}