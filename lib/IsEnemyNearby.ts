import ConditionNode from "./BaseClasses/ConditionNode";
import { NodeStatus } from "./BaseClasses/NodeStatus";

export default class IsEnemyNearby extends ConditionNode {

    constructor() {
        super("Is enemy nearby?");
    }

   /**
    * Generated from prompt:
    * 
    */
	public override async execute(rg): Promise<NodeStatus>{		

		const enemy = await rg.findNearestEntity(null, rg.getBot().position, (entity) => { return entity.team === 1 && !entity.broken});
		if(enemy) {
			this.setData("enemy", enemy);
			return NodeStatus.SUCCESS;
		}

		return NodeStatus.FAILURE;
	}

}