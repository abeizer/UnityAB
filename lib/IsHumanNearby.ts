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
		const humanPlayer = await rg.findNearestEntity("HumanPlayer");		
		const distanceFrom = rg.MathFunctions.distanceSq(rg.getBot().position, humanPlayer.position);
		if(humanPlayer && distanceFrom > 50) {
			this.setData("humanPlayer", humanPlayer);
			return NodeStatus.SUCCESS;
		} 

		return NodeStatus.FAILURE;
	}

}