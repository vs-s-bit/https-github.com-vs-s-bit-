import React,{createContext,useContext,useMemo,useState} from "react";

type PathState={careerName:string;completed:string[];practiceScore:number|null;completeStep:(id:string)=>void;setPracticeScore:(score:number)=>void};
const Context=createContext<PathState|undefined>(undefined);
export function PathProvider({children}:{children:React.ReactNode}){
 const[careerName,setCareerName]=useState("Data Analyst");const[completed,setCompleted]=useState<string[]>([]);const[practiceScore,setPracticeScore]=useState<number|null>(null);
 const completeStep=(id:string)=>setCompleted(x=>x.includes(id)?x:[...x,id]);
 const value=useMemo(()=>({careerName,completed,practiceScore,completeStep,setPracticeScore}),[careerName,completed,practiceScore]);
 return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function usePath(){const value=useContext(Context);if(!value)throw new Error("usePath must be used inside PathProvider");return value;}