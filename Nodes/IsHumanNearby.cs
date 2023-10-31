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
    public class IsHumanNearby : ConditionNode
    {
        public IsHumanNearby() : base("Is human nearby?")
        {
        }

        /**
         * Generated from prompt:
         * Find the closest human. If they're more than 50 square meters away then store a reference to them
         */
        protected override NodeStatus Execute(RG rgObject)
        {
        	var human = rgObject.FindNearestEntity("HumanPlayer");
        	if(human == null) return NodeStatus.Failure;
        
        	if(RG.MathFunctions.DistanceSq(rgObject.GetMyPlayer().position, human.position) > 30)
        	{
        		SetData("closestHuman", human);
        		return NodeStatus.Success;
        	}
        	return NodeStatus.Failure;
        }
    }
}