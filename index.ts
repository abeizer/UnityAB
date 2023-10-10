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
import SetCharacterType from './lib/SetCharacterType';
import IsFloorSwitchInRange from './lib/IsFloorSwitchInRange';
import StandOnSwitch from './lib/StandOnSwitch';

// Reference to root node
let rootNode: RootNode;

export function configureBot(rg: any) {

    rg.isSpawnable=false
    rg.lifecycle="PERSISTENT"
    rg.characterConfig={
  "characterType": "Archer"
}

    // construct tree
    const floorSwitches = new SequenceNode("Floor switches");
    floorSwitches.addChild(new IsFloorSwitchInRange());
    floorSwitches.addChild(new StandOnSwitch());

    const chooseAnAction = new SelectorNode("Choose an action");
    chooseAnAction.addChild(floorSwitches);

    const topLevelSequenceNode = new SequenceNode("Top Level Sequence Node");
    topLevelSequenceNode.addChild(new SetCharacterType());
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