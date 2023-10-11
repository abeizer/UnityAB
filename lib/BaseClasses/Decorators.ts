import { Node, NodeStatus } from "./Node";

/**
 * Returns RUNNING if the child is RUNNING.
 * Otherwise, always returns SUCCESS.
 */
export class AlwaysSucceed extends Node {
    constructor(node: Node) {
        super("Always Succeed");
        this.addChild(node);
    }

    public override async execute(rg: any): Promise<NodeStatus>
    {
        const childStatus: NodeStatus = await this.children[0].execute(rg);
        if(childStatus == NodeStatus.RUNNING) {
            return childStatus;
        }
        return NodeStatus.SUCCESS;
    }
}

/**
 * Returns RUNNING if the child is RUNNING.
 * Otherwise, always returns FAILURE.
 */
export class AlwaysFail extends Node {
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

/**
 * Returns RUNNING if the child is RUNNING.
 * Returns SUCCESS if the child returns FAILURE.
 * Returns FAILURE if the child returns SUCCESS.
 */
export class Invert extends Node {

    constructor(node: Node) {
        super("Invert");
        this.addChild(node);
    }

    public override async execute(rg: any): Promise<NodeStatus>
    {
        const childStatus: NodeStatus = await this.children[0].execute(rg);
        switch(childStatus) {
            case NodeStatus.RUNNING: return NodeStatus.RUNNING;
            case NodeStatus.SUCCESS: return NodeStatus.FAILURE;
            case NodeStatus.FAILURE: return NodeStatus.SUCCESS;
        }
    }

}

