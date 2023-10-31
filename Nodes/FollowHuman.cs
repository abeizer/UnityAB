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
    public class FollowHuman : ActionNode
    {
        public FollowHuman() : base("Follow human")
        {
        }

        /**
         * Generated from prompt:
         * Approach the "closestHuman" within 2 meters
         */
        protected override NodeStatus Execute(RG rgObject)
        {
        	var closestHuman = rgObject.FindNearestEntity("HumanPlayer");
        	if (closestHuman == null)
        		return NodeStatus.Failure;
        
        	rgObject.PerformAction(new RGActionRequest("FollowObject", new Dictionary<string, object> { { "targetId", closestHuman.id }, { "range", 2 } }));
        	return NodeStatus.Success;
        }
    }
}