import React,{createContext,useContext,useMemo,useState} from "react";

export type SkillLevel="NOT_STARTED"|"BEGINNER"|"INTERMEDIATE"|"ADVANCED"|"VERIFIED";
export type RoadmapStepType="LEARN"|"PRACTICE"|"PROJECT"|"ASSESSMENT"|"PORTFOLIO"|"INTERVIEW"|"APPLICATION";
export type RoadmapStep={id:string;title:string;type:RoadmapStepType;estimatedMinutes:number;description:string;prerequisites?:string[]};
type SkillProgress={name:string;level:SkillLevel;evidence:string[]};

export const ROADMAP:RoadmapStep[]=[
 {id:"data-foundations",title:"Understand what a Data Analyst does",type:"LEARN",estimatedMinutes:20,description:"Learn the role, common tasks and tools used by entry-level data analysts."},
 {id:"excel-basics",title:"Practice spreadsheet basics",type:"PRACTICE",estimatedMinutes:30,description:"Build confidence working with structured rows, columns and simple analysis.",prerequisites:["data-foundations"]},
 {id:"sql-foundations",title:"Learn SQL foundations",type:"LEARN",estimatedMinutes:35,description:"Learn SELECT and WHERE so you can retrieve focused data.",prerequisites:["excel-basics"]},
 {id:"first-analysis",title:"Build your first dataset analysis",type:"PROJECT",estimatedMinutes:120,description:"Turn a small dataset into a clear, evidence-based analysis.",prerequisites:["sql-foundations"]},
 {id:"portfolio",title:"Create your portfolio evidence",type:"PORTFOLIO",estimatedMinutes:45,description:"Write a factual summary of your project and what you learned.",prerequisites:["first-analysis"]},
 {id:"interview",title:"Practice your first interview",type:"INTERVIEW",estimatedMinutes:20,description:"Prepare clear answers about your project and skills.",prerequisites:["portfolio"]},
 {id:"applications",title:"Start entry-level applications",type:"APPLICATION",estimatedMinutes:30,description:"Prepare for relevant entry-level Data Analyst opportunities.",prerequisites:["interview"]},
];

const initialSkills:SkillProgress[]=[
 {name:"Data Analysis",level:"NOT_STARTED",evidence:[]},{name:"Excel",level:"NOT_STARTED",evidence:[]},
 {name:"SQL",level:"NOT_STARTED",evidence:[]},{name:"Problem Solving",level:"NOT_STARTED",evidence:[]},
];
type PathState={
 careerName:string;completed:string[];practiceScore:number|null;projectStarted:boolean;projectCompleted:boolean;
 portfolioCompleted:boolean;portfolioSummary:string;skills:SkillProgress[];roadmapSteps:RoadmapStep[];nextStep:RoadmapStep|null;
 progressPercent:number;isStepComplete:(id:string)=>boolean;completeStep:(id:string)=>void;setPracticeScore:(score:number)=>void;
 startProject:()=>void;completeProject:()=>void;completePortfolio:(summary:string)=>void;
};
const Context=createContext<PathState|undefined>(undefined);

export function PathProvider({children}:{children:React.ReactNode}){
 const[careerName]=useState("Data Analyst"); const[completed,setCompleted]=useState<string[]>([]);
 const[practiceScore,setPracticeScore]=useState<number|null>(null); const[projectStarted,setProjectStarted]=useState(false);
 const[projectCompleted,setProjectCompleted]=useState(false); const[portfolioCompleted,setPortfolioCompleted]=useState(false);
 const[portfolioSummary,setPortfolioSummary]=useState(""); const[skills,setSkills]=useState<SkillProgress[]>(initialSkills);
 const completeStep=(id:string)=>{setCompleted(x=>x.includes(id)?x:[...x,id]);setSkills(current=>current.map(skill=>{
   if(id==="data-foundations"&&skill.name==="Data Analysis")return {...skill,level:"BEGINNER"};
   if(id==="excel-basics"&&skill.name==="Excel")return {...skill,level:"BEGINNER"};
   if(id==="sql-foundations"&&skill.name==="SQL")return {...skill,level:"BEGINNER"}; return skill;
 }));};
 const isStepComplete=(id:string)=>id==="first-analysis"?projectCompleted:id==="portfolio"?portfolioCompleted:completed.includes(id);
 const nextStep=ROADMAP.find(step=>!isStepComplete(step.id)&&(!step.prerequisites||step.prerequisites.every(isStepComplete)))??null;
 const progressPercent=Math.round(ROADMAP.filter(step=>isStepComplete(step.id)).length/ROADMAP.length*100);
 const startProject=()=>setProjectStarted(true);
 const completePortfolio=(summary:string)=>{setPortfolioSummary(summary.trim());setPortfolioCompleted(true);completeStep("portfolio");};
 const completeProject=()=>{setProjectStarted(true);setProjectCompleted(true);completeStep("first-analysis");setSkills(current=>current.map(skill=>skill.name==="Data Analysis"?{...skill,level:"INTERMEDIATE",evidence:["First dataset analysis"]}:skill));};
 const value=useMemo(()=>({careerName,completed,practiceScore,projectStarted,projectCompleted,portfolioCompleted,portfolioSummary,skills,roadmapSteps:ROADMAP,nextStep,progressPercent,isStepComplete,completeStep,setPracticeScore,startProject,completeProject,completePortfolio}),[careerName,completed,practiceScore,projectStarted,projectCompleted,portfolioCompleted,portfolioSummary,skills,nextStep,progressPercent]);
 return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function usePath(){const value=useContext(Context);if(!value)throw new Error("usePath must be used inside PathProvider");return value;}