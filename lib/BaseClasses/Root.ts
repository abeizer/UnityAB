import { Node, NodeStatus } from "./Node";


export default class RootNode extends Node {

    constructor(name: string) {
        super(name);
        
    }

    public override async execute(rg: any): Promise&lt;NodeStatus&gt;
    {
        if (this.children.length > 0)
        {
            return await this.children[0].execute(rg);
        }
        return NodeStatus.FAILURE;
    }

}