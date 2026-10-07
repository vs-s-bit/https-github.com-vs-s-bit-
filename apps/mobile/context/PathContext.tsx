import React,{createContext,useContext,useMemo,useState} from "react";

export type SkillLevel="NOT_STARTED"|"BEGINNER"|"INTERMEDIATE"|"ADVANCED";
type SkillProgress={name:string;level:SkillLevel;evidence:string[]};

type PathState={
 careerName:string;
 completed:string[];
 practiceScore:number|null;
 projectStarted:boolean;
 projectCompleted:boolean;
 portfolioCompleted:boolean;
 skills:SkillProgress[];
 completeStep:(id:string)=>void;
 setPracticeScore:(score:number)=>void;
 startProject:()=>void;
 completeProject:()=>void;
 completePortfolio:()=>void;
};

const Context=createContext<PathState|undefined>(undefined);

const initialSkills:SkillProgress[]=[
 {name:"Data Analysis",level:"NOT_STARTED",evidence:[]},
 {name:"Excel",level:"NOT_STARTED",evidence:[]},
 {name:"SQL",level:"NOT_STARTED",evidence:[]},
 {name:"Problem Solving",level:"NOT_STARTED",evidence:[]},
];

export function PathProvider({children}:{children:React.ReactNode}){
 const[careerName]=useState("Data Analyst");
 const[completed,setCompleted]=useState<string[]>([]);
 const[practiceScore,setPracticeScore]=useState<number|null>(null);
 const[projectStarted,setProjectStarted]=useState(false);
 const[projectCompleted,setProjectCompleted]=useState(false);
 const[portfolioCompleted,setPortfolioCompleted]=useState(false);
 const[skills,setSkills]=useState<SkillProgress[]>(initialSkills);

 const completeStep=(id:string)=>{
  setCompleted(x=>x.includes(id)?x:[...x,id]);
  setSkills(current=>current.map(skill=>{
   if(id==="data-foundations"&&skill.name==="Data Analysis")return {...skill,level:"BEGINNER"};
   if(id==="excel-basics"&&skill.name==="Excel")return {...skill,level:"BEGINNER"};
   if(id==="sql-foundations"&&skill.name==="SQL")return {...skill,level:"BEGINNER"};
   return skill;
  }));
 };

 const startProject=()=>setProjectStarted(true);

 const completePortfolio=()=>{setPortfolioCompleted(true);completeStep("portfolio");};

 const completeProject=()=>{
  setProjectStarted(true);
  setProjectCompleted(true);
  completeStep("first-analysis");
  setSkills(current=>current.map(skill=>skill.name==="Data Analysis"?{...skill,level:"INTERMEDIATE",evidence:["First dataset analysis"]}:skill));
 };

 const value=useMemo(()=>({careerName,completed,practiceScore,projectStarted,projectCompleted,portfolioCompleted,skills,completeStep,setPracticeScore,startProject,completeProject,completePortfolio}),[careerName,completed,practiceScore,projectStarted,projectCompleted,portfolioCompleted,skills]);
 return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function usePath(){const value=useContext(Context);if(!value)throw new Error("usePath must be used inside PathProvider");return value;}
