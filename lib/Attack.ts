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
		console.log("is enemy real", enemy.type);
		console.log("health", enemy.health);
		if(enemy && enemy.health > 0) {
			console.log("queuing attack enemy!!!!")
			rg.performAction("PerformSkill", {
				skillId: 0,
				targetId: enemy.id
			});
			return NodeStatus.SUCCESS;
  	}
		return NodeStatus.FAILURE;
	}

}