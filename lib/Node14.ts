import ActionNode from "./BaseClasses/ActionNode";
import { NodeStatus } from "./BaseClasses/NodeStatus";

export default class Node14 extends ActionNode {

        constructor() {
            super("Follow human");
        }

       /**
        * Generated from prompt:
        * 
        */
	public override async execute(rg): Promise<NodeStatus>{		
		const humanPlayer = this.getData<any>("humanPlayer");
		if(humanPlayer && rg.MathFunctions.distanceSq(rg.getBot().position, humanPlayer.position) > 10 ) {
			rg.performAction("FollowObject", {
				targetId: humanPlayer.id,
				range: 2
			});
			return NodeStatus.SUCCESS;
		}

		return NodeStatus.FAILURE;
	}

}