import {Router} from"express";
import {PrismaClient} from"@prisma/client";
const router=Router();
const prisma=new PrismaClient();

router.get("/:userId",async(req,res)=>{
 try{
  const roadmap=await prisma.userRoadmap.findFirst({where:{userId:req.params.userId},include:{progress:true}});
  const skills=await prisma.userSkill.findMany({where:{userId:req.params.userId},orderBy:{updatedAt:"desc"}});
  const projects=await prisma.userProject.findMany({where:{userId:req.params.userId},orderBy:{updatedAt:"desc"}});
  return res.json({data:{roadmap,skills,projects}});
 }catch{return res.status(500).json({error:"PROGRESS_READ_FAILED"});}
});

router.post("/:userId/complete",async(req,res)=>{
 const stepId=String(req.body?.stepId??"");const careerId=String(req.body?.careerId??"");
 if(!stepId||!careerId)return res.status(400).json({error:"STEP_AND_CAREER_REQUIRED"});
 try{
  const roadmap=await prisma.userRoadmap.upsert({where:{userId_careerId:{userId:req.params.userId,careerId}},create:{userId:req.params.userId,careerId},update:{}});
  const progress=await prisma.userProgress.upsert({where:{roadmapId_stepId:{roadmapId:roadmap.id,stepId}},create:{roadmapId:roadmap.id,stepId,completedAt:new Date()},update:{completedAt:new Date()}});
  return res.json({data:progress});
 }catch{return res.status(500).json({error:"PROGRESS_WRITE_FAILED"});}
});

router.post("/:userId/skills",async(req,res)=>{
 const skillName=String(req.body?.skillName??"");const level=String(req.body?.level??"NOT_STARTED");
 if(!skillName)return res.status(400).json({error:"SKILL_NAME_REQUIRED"});
 if(!["NOT_STARTED","BEGINNER","INTERMEDIATE","ADVANCED","VERIFIED"].includes(level))return res.status(400).json({error:"INVALID_SKILL_LEVEL"});
 try{
  const skill=await prisma.userSkill.upsert({where:{userId_skillName:{userId:req.params.userId,skillName}},create:{userId:req.params.userId,skillName,level:level as any,evidence:req.body?.evidence??[]},update:{level:level as any,evidence:req.body?.evidence??[]}});
  return res.json({data:skill});
 }catch{return res.status(500).json({error:"SKILL_WRITE_FAILED"});}
});

router.post("/:userId/projects",async(req,res)=>{
 const title=String(req.body?.title??"");if(!title)return res.status(400).json({error:"PROJECT_TITLE_REQUIRED"});
 const status=String(req.body?.status??"IN_PROGRESS");const summary=typeof req.body?.summary==="string"?req.body.summary:null;
 try{
  const project=await prisma.userProject.create({data:{userId:req.params.userId,title,status,summary,completedAt:status==="COMPLETED"?new Date():null}});
  return res.status(201).json({data:project});
 }catch{return res.status(500).json({error:"PROJECT_WRITE_FAILED"});}
});
export default router;