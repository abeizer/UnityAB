/// <auto-generated>
/// This file was generated by the Regression Games Agent Builder.
/// If you modify it and resynchronize with Regression Games, your changes may be lost.
/// Use the Agent Builder on https://regression.gg to modify this file.
/// </auto-generated>

using System;
using System.Collections.Generic;
using System.Linq;
using RegressionGames.BehaviorTree;
using RegressionGames.RGBotLocalRuntime;
using RegressionGames.StateActionTypes;
using UnityEngine;

namespace BossroomAb
{
    public class SetChartype : ActionNode
    {
        public SetChartype() : base("Set charType")
        {
        }

        /**
         * Generated from prompt:
         * 
         */
        class LeafNode extends TreeNode {
        	
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
    }
}