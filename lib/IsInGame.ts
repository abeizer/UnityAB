import ConditionNode from "./BaseClasses/ConditionNode";
import { NodeStatus } from "./BaseClasses/NodeStatus";

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