import Node from "../Node";
import { NodeStatus } from "../NodeStatus";

/**
 * Returns RUNNING if the child is RUNNING.
 * Otherwise, always returns FAILURE.
 */
export default class AlwaysFail extends Node {

    constructor(node: Node) {
        super("Always Fail");
        this.addChild(node);
    }

    public override async execute(rg: any): Promise<NodeStatus>
    {
        const childStatus: NodeStatus = await this.children[0].execute(rg);
        if(childStatus == NodeStatus.RUNNING) {
            return childStatus;
        }
        return NodeStatus.FAILURE;
    }

}