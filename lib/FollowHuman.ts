import { ActionNode } from "./BaseClasses/LeafInterfaces";
import { NodeStatus } from "./BaseClasses/Node";


export default class FollowHuman extends ActionNode {

        constructor() {
            super("Follow human");
        }

       /**
        * Generated from prompt:
        * 
        */
	public override async execute(rg): Promise<NodeStatus>{		
		const humanPlayer = this.getData<any>("humanPlayer");
		if(humanPlayer) {
			rg.performAction("FollowObject", {
				targetId: humanPlayer.id,
				range: 2
			});
			return NodeStatus.SUCCESS;
		}

		return NodeStatus.FAILURE;
	}

}