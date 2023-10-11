import { ConditionNode } from "./BaseClasses/LeafInterfaces";
import { NodeStatus } from "./BaseClasses/Node";


export default class IsHumanNearby extends ConditionNode {

        constructor() {
            super("Is human nearby?");
        }

       /**
        * Generated from prompt:
        * 
        */
	public override async execute(rg): Promise<NodeStatus>{		
		const humanPlayer = await rg.findEntity("HumanPlayer");
		if(humanPlayer) {
			this.setData("humanPlayer", humanPlayer);
			return NodeStatus.SUCCESS;
		} 

		return NodeStatus.FAILURE;
	}

}