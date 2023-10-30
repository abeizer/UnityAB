import { ConditionNode } from "./BaseClasses/LeafInterfaces";
import { NodeStatus } from "./BaseClasses/Node";


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
		const floorSwitch = await rg.findNearestEntity("FloorSwitch", null, (entity) => {return rg.MathFunctions.distanceSq(rg.getBot().position, entity.position < 30)});		
		if(floorSwitch) {
			this.setData("floorSwitch", floorSwitch);
			return NodeStatus.SUCCESS;
		}

		return NodeStatus.FAILURE;
	}

}