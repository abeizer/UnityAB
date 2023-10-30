import { ActionNode } from "./BaseClasses/LeafInterfaces";
import { NodeStatus } from "./BaseClasses/Node";


export default class StandOnSwitch extends ActionNode {

        constructor() {
            super("Stand on switch");
        }

       /**
        * Generated from prompt:
        * 
        */
	public override async execute(rg): Promise<NodeStatus>{		
		const floorSwitch = this.getData<any>("floorSwitch");

		// already standing on it
		if(floorSwitch && await rg.entityHasAttribute(floorSwitch, "isOn", true)) {
			return NodeStatus.SUCCESS;
		}

		// otherwise go to it
		if(floorSwitch && rg.MathFunctions.distanceSq(rg.getBot().position, floorSwitch.position) < 50) {
			rg.performAction("FollowObject", {
				targetId: floorSwitch.id,
				range: 0.1
			});
			return NodeStatus.RUNNING;
  	}

		return NodeStatus.FAILURE
	}

}