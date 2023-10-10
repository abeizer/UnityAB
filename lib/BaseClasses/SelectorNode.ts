import Node from "./Node";
import { NodeStatus } from "./NodeStatus";

/**
 * Succeeds if any of its children succeed, and stop executing any further children.
 * Fails if all children fail.
 */
export default class SelectorNode extends Node
{
    constructor(name: string)
    {
        super(name);
    }

    public override async execute(rg: any): Promise<NodeStatus>
    {
        for (const child of this.children)
        {
            const childStatus: NodeStatus = await child.execute(rg);
            if (childStatus == NodeStatus.SUCCESS || childStatus == NodeStatus.RUNNING)
            {
                return childStatus;
            }
        }

        return NodeStatus.FAILURE;
    }
}