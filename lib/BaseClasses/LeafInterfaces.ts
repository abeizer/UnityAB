import { Node, NodeStatus } from "./Node";

/**
 * Leaf Node that represents an action that the bot will perform
 */
export abstract class ActionNode extends Node
{
    public abstract execute(rg: any): Promise&lt;NodeStatus&gt;;
}

/**
 * Leaf node that checks whether a condition has been met
 */
export abstract class ConditionNode extends Node
{
    public abstract execute(rg: any): Promise&lt;NodeStatus&gt;;
}