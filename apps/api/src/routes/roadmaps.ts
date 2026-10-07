import {Router} from "express";
import {getNextStep,RoadmapItem} from "../services/nextStep.js";
const router=Router();
const demoRoadmap:RoadmapItem[]=[
{id:"data-foundations",title:"Understand what data analysts do",type:"LEARN",order:1,completed:false,estimatedMinutes:20,description:"Learn the role, common tasks and tools used by entry-level data analysts."},
{id:"excel-basics",title:"Practice spreadsheet basics",type:"PRACTICE",order:2,completed:false,prerequisites:["data-foundations"],estimatedMinutes:30,description:"Work through beginner spreadsheet exercises."},
{id:"sql-foundations",title:"Learn SQL SELECT and WHERE",type:"LEARN",order:3,completed:false,prerequisites:["excel-basics"],estimatedMinutes:35,description:"Learn how to retrieve and filter data with SQL."},
{id:"first-analysis",title:"Build your first data analysis project",type:"PROJECT",order:4,completed:false,prerequisites:["sql-foundations"],estimatedMinutes:120,description:"Analyze a small dataset and explain your findings."}];
router.get("/:careerId",(req,res)=>res.json({data:{careerId:req.params.careerId,steps:demoRoadmap,nextStep:getNextStep(demoRoadmap)}}));
export default router;