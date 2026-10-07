import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { usePath } from "../context/PathContext";

const actionFor=(type:string)=>{
 if(type==="LEARN") return "/lesson";
 if(type==="PRACTICE") return "/practice";
 if(type==="PROJECT") return "/projects";
 if(type==="PORTFOLIO") return "/portfolio";
 return "/path-builder";
};

export default function NextStep(){
 const {nextStep}=usePath();
 if(!nextStep) return <View style={s.c}><Text style={s.e}>PATH COMPLETE</Text><Text style={s.title}>You have completed this roadmap.</Text><Text style={s.sub}>Review your evidence and choose another career path when you are ready.</Text><Pressable onPress={()=>router.push("/path-builder")} style={s.b}><Text style={s.bt}>View roadmap</Text></Pressable></View>;
 const action=actionFor(nextStep.type);
 return <View style={s.c}>
  <Text style={s.e}>TODAY'S NEXT STEP</Text><Text style={s.title}>Just focus on this.</Text>
  <Text style={s.sub}>PATH keeps your career journey manageable by giving you one clear action at a time.</Text>
  <View style={s.card}>
   <View style={s.badge}><Text style={s.badgeText}>{nextStep.type} • {nextStep.estimatedMinutes} MIN</Text></View>
   <Text style={s.ct}>{nextStep.title}</Text><Text style={s.d}>{nextStep.description}</Text>
   <Text style={s.why}>WHY THIS STEP?</Text><Text style={s.whyText}>It is the next ready step in your roadmap and prepares you for what follows.</Text>
   <Pressable onPress={()=>router.push(action as any)} style={s.b}><Text style={s.bt}>Start now →</Text></Pressable>
  </View>
  <Pressable onPress={()=>router.push("/path-builder")}><Text style={s.link}>View full roadmap</Text></Pressable>
 </View>
}
const s=StyleSheet.create({c:{flex:1,padding:24,justifyContent:"center",backgroundColor:"#F8FAFC"},e:{fontSize:12,fontWeight:"900",letterSpacing:1,color:"#2563EB"},title:{fontSize:31,fontWeight:"800",color:"#0F172A",marginTop:7},sub:{fontSize:16,lineHeight:24,color:"#475569",marginTop:8,marginBottom:20},card:{backgroundColor:"#FFF",padding:20,borderRadius:18,borderWidth:1,borderColor:"#E2E8F0"},badge:{alignSelf:"flex-start",backgroundColor:"#EFF6FF",paddingHorizontal:10,paddingVertical:6,borderRadius:8},badgeText:{fontSize:10,fontWeight:"900",color:"#2563EB"},ct:{fontSize:23,fontWeight:"800",color:"#0F172A",marginTop:14},d:{fontSize:15,lineHeight:23,color:"#475569",marginTop:8},why:{fontSize:10,fontWeight:"900",letterSpacing:1,color:"#64748B",marginTop:20},whyText:{fontSize:13,lineHeight:20,color:"#64748B",marginTop:5},b:{backgroundColor:"#0F172A",padding:16,borderRadius:12,marginTop:20},bt:{color:"#FFF",textAlign:"center",fontWeight:"800"},link:{textAlign:"center",color:"#2563EB",fontWeight:"800",marginTop:18}});
