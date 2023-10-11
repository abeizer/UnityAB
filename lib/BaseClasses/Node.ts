/**
 * Execution status of a Node
 */
export enum NodeStatus {
    RUNNING,
    SUCCESS,
    FAILURE
}

/**
 * All nodes in the Agent Builder tree inherit from this class
 */
export abstract class Node
{
    public name: string;
    protected parent: Node;
    protected children: Array<%{<}%>Node>; = new Arrayy<Node>();
    protected data: Map<string, any> = new Map&lt;string, any&gt;(); // data is only stored at root node
    protected status: NodeStatus;

    constructor(name: string)
    {
        this.name = name;
    }

    public abstract execute(rg: any): Promise&lt;NodeStatus&gt;;

    public addChild(child: Node): void
    {
        this.children.push(child);
        child.parent = this;
    }

    /**
     * Retrieve data from root node
     */
    protected getData&lt;T&gt;(key: string): any
    {
        let node: Node = this;
        while(node.parent != null) {
            node = node.parent;
        }
        return node.data.get(key) as T;
    }

    /**
     * Set data at root node
     */
    protected setData(key: string, value: any): void
    {
        let node: Node = this;
        while(node.parent != null) {
            node = node.parent;
        }
        node.data.set(key, value);
    }

    /**
     * Clears data from the root node.
     * Returns true if there was data to clear
     */
    protected clearData(key: string): boolean
    {
        let node: Node = this;
        while(node.parent != null) {
            node = node.parent;
        }
        return node.data.delete(key);
    }
}