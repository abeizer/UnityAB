import ActionNode from "./BaseClasses/ActionNode";
import { NodeStatus } from "./BaseClasses/NodeStatus";

export default class Node3 extends ActionNode {

        constructor() {
            super("Node 3");
        }

       /**
        * Generated from prompt:
        * 
        */
	public override async execute(): Promise<NodeStatus> {
		return NodeStatus.SUCCESS;
	}
}