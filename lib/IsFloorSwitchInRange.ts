import ConditionNode from "./BaseClasses/ConditionNode";
import { NodeStatus } from "./BaseClasses/NodeStatus";

export default class IsFloorSwitchInRange extends ConditionNode {

        constructor() {
            super("Is floor switch in range?");
        }

       /**
        * Generated from prompt:
        * 
        */
	public override async execute(rg): Promise<NodeStatus>{		
		// if the bot is standing on a switch, then do nothing
  	const floorSwitch = await rg.findEntity("FloorSwitch");
		if(floorSwitch) {
			rg.setData("floorSwitch", floorSwitch);
			return NodeStatus.SUCCESS;
		}

		return NodeStatus.FAILURE;
	}

}