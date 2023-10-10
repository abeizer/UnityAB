import ActionNode from "./BaseClasses/ActionNode";
import { NodeStatus } from "./BaseClasses/NodeStatus";

import { RGBot } from "rg-bot";
import { Item } from "prismarine-item";
import { Block } from "prismarine-block";
import { Entity } from "prismarine-entity";

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