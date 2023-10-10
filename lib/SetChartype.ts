import ActionNode from "./BaseClasses/ActionNode";
import { NodeStatus } from "./BaseClasses/NodeStatus";


export default class SetChartype extends ActionNode {

        constructor() {
            super("Set charType");
        }

       /**
        * Generated from prompt:
        * 
        */
	
	charInfo = {
		type: ["Mage", "Rogue", "Tank", "Archer"],
		abilities: [[0,1], [0,1,2], [0,1], [0,1,2]],
		// teamId
		abilityTargets: [[1,0], [1,1,-1], [1,-1], [1,1,1]]
	}

	public override async execute(rg): Promise<NodeStatus>{		
		// The character type we request may not be the one we actually get
		const characterType = rg.characterConfig.characterType;
		if (characterType) {
			const newCharType = this.charInfo.type.indexOf(characterType);
			this.setData("charType", newCharType)
			return NodeStatus.SUCCESS;
  	}
		
		console.error("NO CHARACTER TYPE");
		return NodeStatus.FAILURE;
	}

}