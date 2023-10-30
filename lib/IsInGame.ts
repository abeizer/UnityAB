import { ConditionNode } from "./BaseClasses/LeafInterfaces";
import { NodeStatus } from "./BaseClasses/Node";


export default class IsInGame extends ConditionNode {

        constructor() {
            super("Is in game?");
        }

       /**
        * Generated from prompt:
        * 
        */
	public override async execute(rg): Promise<NodeStatus>{		
		return rg.getState().sceneName == "BossRoom" ? NodeStatus.SUCCESS : NodeStatus.RUNNING;
	}

}