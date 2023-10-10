import Node from "./Node";
import { NodeStatus } from "./NodeStatus";

/**
 * Leaf node that checks whether a condition has been met
 */
export default abstract class ConditionNode extends Node
{
    public abstract execute(): Promise<NodeStatus>;
}