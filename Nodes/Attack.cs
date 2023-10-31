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
    public class Attack : ActionNode
    {
        public Attack() : base("Attack")
        {
        }

        /**
         * Generated from prompt:
         * 
         */
        class LeafNode extends TreeNode {
        	public override async execute(rg): Promise<NodeStatus>{		
        		
        		const enemy = this.getData<any>("enemy");
        		if(enemy && enemy.health > 0) {
        			console.log("Queuing attack");
        			rg.performAction("PerformSkill", {
        				skillId: 1,
        				targetId: enemy.id
        			});
        			return NodeStatus.RUNNING;
          	}
        		return NodeStatus.FAILURE;
        	}
        }
    }
}