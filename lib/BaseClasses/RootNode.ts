import Node from "./Node";
import { NodeStatus } from "./NodeStatus";
import { RGBot } from "rg-bot";

export default class RootNode extends Node {

    constructor(name: string) {
        super(name);
    }

    public override async execute(rg: any): Promise<NodeStatus>
    {
        if (this.children.length > 0)
        {
            return await this.children[0].execute(rg);
        }
        return NodeStatus.FAILURE;
    }

}