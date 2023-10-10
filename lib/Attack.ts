import ActionNode from "./BaseClasses/ActionNode";
import { NodeStatus } from "./BaseClasses/NodeStatus";

export default class Attack extends ActionNode {

        constructor() {
            super("Attack");
        }

       /**
        * Generated from prompt:
        * 
        */
	public override async execute(rg): Promise<NodeStatus>{		
		
		const enemy = this.getData<any>("enemy");
		if(enemy && enemy.health > 0) {
			rg.performAction("PerformSkill", {
				skillId: 1,
				targetId: enemy.id,
				xPosition: enemy.position.x,
				yPosition: enemy.position.y,
				zPosition: enemy.position.z
			});
			return NodeStatus.RUNNING;
  	}
		return NodeStatus.FAILURE;
	}

}