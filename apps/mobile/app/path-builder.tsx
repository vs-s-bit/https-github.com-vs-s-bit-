import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { usePath } from "../context/PathContext";
import { BottomNav } from "../components/BottomNav";

const steps=[
 {id:"data-foundations",title:"Understand the role",type:"LEARN",minutes:20,desc:"Learn what Data Analysts do and how they use data."},
 {id:"excel-basics",title:"Practice spreadsheet basics",type:"PRACTICE",minutes:30,desc:"Complete beginner exercises with rows, columns and formulas."},
 {id:"sql-foundations",title:"Learn SQL foundations",type:"LEARN",minutes:35,desc:"Learn SELECT, WHERE and simple filtering."},
 {id:"first-analysis",title:"Build your first analysis",type:"PROJECT",minutes:120,desc:"Analyze a small dataset and explain what you found."},
 {id:"portfolio",title:"Create your first portfolio piece",type:"PORTFOLIO",minutes:45,desc:"Turn your completed project into clear evidence of your skills."},
 {id:"interview",title:"Practice interview questions",type:"INTERVIEW",minutes:20,desc:"Practice explaining your skills and project."},
 {id:"applications",title:"Prepare for entry-level applications",type:"APPLICATION",minutes:30,desc:"Get your profile and application materials ready."}
] as const;

export default function PathBuilder(){
 const {careerName,completed,projectCompleted}=usePath();
 const done=steps.filter(x=>completed.includes(x.id)).length;
 const firstOpen=steps.find(x=>!completed.includes(x.id))?.id;
 return <View style={s.screen}><ScrollView contentContainerStyle={s.c}>
   <Text style={s.e}>MY PATH</Text>
   <Text style={s.title}>{careerName}</Text>
   <Text style={s.sub}>A practical route from where you are today to your first strong evidence of skill.</Text>
   <View style={s.summary}><Text style={s.summaryTitle}>{done} of {steps.length} steps complete</Text><View style={s.track}><View style={[s.fill,{width:`${Math.round(done/steps.length*100)}%`}]} /></View><Text style={s.summaryText}>{Math.round(done/steps.length*100)}% complete</Text></View>
   <View style={s.sectionRow}><Text style={s.section}>YOUR ROADMAP</Text><Pressable onPress={()=>router.push("/skills")}><Text style={s.skillLink}>Skill Passport →</Text></Pressable></View>
   {steps.map((step,index)=>{const isDone=step.id==="first-analysis"?projectCompleted:completed.includes(step.id);const isNext=step.id===firstOpen;return <View key={step.id} style={s.row}><View style={[s.dot,isDone&&s.doneDot,isNext&&s.nextDot]}><Text style={s.dotText}>{isDone?"✓":index+1}</Text></View><View style={s.line}/><View style={[s.card,isNext&&s.nextCard]}><View style={s.meta}><Text style={s.type}>{step.type}</Text><Text style={s.time}>{step.minutes} MIN</Text></View><Text style={s.cardTitle}>{step.title}</Text><Text style={s.desc}>{step.desc}</Text>{isDone?<Text style={s.completed}>COMPLETED</Text>:isNext?<Pressable onPress={()=>router.push(step.id==="data-foundations"?"/lesson":step.id==="excel-basics"?"/practice":step.id==="first-analysis"?"/projects":"/next-step")} style={s.action}><Text style={s.actionText}>Continue →</Text></Pressable>:<Text style={s.locked}>Complete the previous step first</Text>}</View></View>})}
 </ScrollView><BottomNav/></View>
}
const s=StyleSheet.create({screen:{flex:1,backgroundColor:"#F8FAFC"},c:{padding:22,paddingBottom:100},e:{fontSize:11,fontWeight:"900",letterSpacing:1,color:"#2563EB",marginTop:18},title:{fontSize:32,fontWeight:"800",color:"#0F172A",marginTop:6},sub:{fontSize:15,lineHeight:23,color:"#475569",marginTop:7},summary:{backgroundColor:"#0F172A",borderRadius:18,padding:18,marginTop:20},summaryTitle:{fontSize:17,fontWeight:"800",color:"#FFF"},track:{height:7,backgroundColor:"#334155",borderRadius:5,marginTop:14},fill:{height:7,backgroundColor:"#FFF",borderRadius:5},summaryText:{fontSize:11,color:"#CBD5E1",marginTop:7},sectionRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:24,marginBottom:10},section:{fontSize:11,fontWeight:"900",letterSpacing:1,color:"#64748B"},skillLink:{fontSize:11,fontWeight:"800",color:"#2563EB"},row:{position:"relative",paddingLeft:44,marginBottom:14},dot:{position:"absolute",left:0,top:16,width:32,height:32,borderRadius:16,backgroundColor:"#E2E8F0",alignItems:"center",justifyContent:"center",zIndex:2},doneDot:{backgroundColor:"#DCFCE7"},nextDot:{backgroundColor:"#DBEAFE",borderWidth:2,borderColor:"#2563EB"},dotText:{fontSize:12,fontWeight:"900",color:"#334155"},line:{position:"absolute",left:15,top:48,bottom:-14,width:2,backgroundColor:"#E2E8F0"},card:{backgroundColor:"#FFF",borderRadius:15,padding:16,borderWidth:1,borderColor:"#E2E8F0"},nextCard:{borderColor:"#93C5FD"},meta:{flexDirection:"row",justifyContent:"space-between"},type:{fontSize:10,fontWeight:"900",color:"#2563EB",letterSpacing:.5},time:{fontSize:10,fontWeight:"800",color:"#64748B"},cardTitle:{fontSize:17,fontWeight:"800",color:"#0F172A",marginTop:7},desc:{fontSize:13,lineHeight:20,color:"#64748B",marginTop:5},completed:{fontSize:10,fontWeight:"900",color:"#16A34A",marginTop:12},locked:{fontSize:11,color:"#94A3B8",marginTop:12},action:{marginTop:12,backgroundColor:"#0F172A",padding:11,borderRadius:10},actionText:{color:"#FFF",textAlign:"center",fontWeight:"800",fontSize:13}});
