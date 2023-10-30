import { ConditionNode } from "./BaseClasses/LeafInterfaces";
import { NodeStatus } from "./BaseClasses/Node";


export default class IsEnemyNearby extends ConditionNode {

        constructor() {
            super("Is enemy nearby?");
        }

       /**
        * Generated from prompt:
        * 
        */
	public override async execute(rg): Promise<NodeStatus>{		
		// null entity because we want either Imp or Crystal, whichever is closer
		const enemy = await rg.findNearestEntity(null, null, (entity) => { return entity.team == 1 && !entity.broken});
		if(enemy) {
			this.setData("enemy", enemy);
			return NodeStatus.SUCCESS;
		}

		return NodeStatus.FAILURE;
	}

}