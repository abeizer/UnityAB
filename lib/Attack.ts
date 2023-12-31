import { ActionNode } from "./BaseClasses/LeafInterfaces";
import { NodeStatus } from "./BaseClasses/Node";


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
			console.log("Queuing attack");
			rg.performAction("PerformSkill", {
				skillId: 1,
				targetId: enemy.id
			});
			return NodeStatus.RUNNING;
  	}
		return NodeStatus.FAILURE;
	}

}