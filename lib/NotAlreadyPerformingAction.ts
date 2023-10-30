import { ConditionNode } from "./BaseClasses/LeafInterfaces";
import { NodeStatus } from "./BaseClasses/Node";


export default class NotAlreadyPerformingAction extends ConditionNode {

        constructor() {
            super("Not already performing action");
        }

       /**
        * Generated from prompt:
        * 
        */
	public override async execute(rg): Promise<NodeStatus>{		
		// Start typing your code here
		const bot = rg.getBot();
		if(bot.hasQueuedActions) {
			return NodeStatus.RUNNING;
		}
		return NodeStatus.SUCCESS;
	}

}