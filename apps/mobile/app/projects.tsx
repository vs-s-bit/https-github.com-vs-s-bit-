import {router} from "expo-router";
import {Pressable,ScrollView,StyleSheet,Text,View} from "react-native";
import {usePath} from "../context/PathContext";
import {BottomNav} from "../components/BottomNav";

export default function Projects(){
 const {projectStarted,projectCompleted,startProject,completeProject}=usePath();
 return <View style={s.screen}><ScrollView contentContainerStyle={s.c}>
  <Text style={s.eyebrow}>PROJECTS</Text>
  <Text style={s.title}>Build proof, not just knowledge.</Text>
  <Text style={s.sub}>Your projects turn lessons into evidence you can show in a portfolio or discuss in an interview.</Text>

  <View style={s.card}>
   <View style={s.badgeRow}><Text style={s.badge}>BEGINNER</Text><Text style={s.time}>~2 HOURS</Text></View>
   <Text style={s.cardTitle}>First Dataset Analysis</Text>
   <Text style={s.desc}>Use a small dataset to answer a real question, find patterns and explain what the numbers mean.</Text>

   <Text style={s.heading}>What you'll practice</Text>
   <View style={s.chips}><Text style={s.chip}>Excel</Text><Text style={s.chip}>Data Analysis</Text><Text style={s.chip}>Problem Solving</Text></View>

   <Text style={s.heading}>Your deliverable</Text>
   <Text style={s.bullet}>• Clean a small dataset</Text>
   <Text style={s.bullet}>• Find 2–3 useful insights</Text>
   <Text style={s.bullet}>• Write a short conclusion</Text>
   <Text style={s.bullet}>• Save the result as portfolio evidence</Text>

   {projectCompleted ? <View style={s.success}><Text style={s.successTitle}>✓ PROJECT COMPLETED</Text><Text style={s.successText}>Your Data Analysis skill now has project evidence.</Text></View> :
    projectStarted ? <><View style={s.started}><Text style={s.startedTitle}>PROJECT IN PROGRESS</Text><Text style={s.startedText}>Work through the deliverables above. When you have finished, record the evidence in PATH.</Text></View><Pressable onPress={completeProject} style={s.button}><Text style={s.buttonText}>Mark project complete</Text></Pressable></> :
    <Pressable onPress={startProject} style={s.button}><Text style={s.buttonText}>Start project</Text></Pressable>}
  </View>

  <Pressable onPress={()=>router.push("/skills")} style={s.passport}><View><Text style={s.passportLabel}>SKILL PASSPORT</Text><Text style={s.passportTitle}>See what you can prove</Text></View><Text style={s.arrow}>›</Text></Pressable>
 </ScrollView><BottomNav/></View>
}
const s=StyleSheet.create({screen:{flex:1,backgroundColor:"#F8FAFC"},c:{padding:22,paddingBottom:100},eyebrow:{fontSize:11,fontWeight:"900",letterSpacing:1,color:"#2563EB",marginTop:18},title:{fontSize:30,fontWeight:"800",color:"#0F172A",marginTop:6},sub:{fontSize:15,lineHeight:22,color:"#475569",marginTop:7},card:{backgroundColor:"#FFF",borderWidth:1,borderColor:"#E2E8F0",borderRadius:18,padding:18,marginTop:20},badgeRow:{flexDirection:"row",justifyContent:"space-between"},badge:{fontSize:10,fontWeight:"900",color:"#2563EB",letterSpacing:.6},time:{fontSize:10,fontWeight:"800",color:"#64748B"},cardTitle:{fontSize:22,fontWeight:"800",color:"#0F172A",marginTop:9},desc:{fontSize:14,lineHeight:21,color:"#64748B",marginTop:6},heading:{fontSize:12,fontWeight:"900",color:"#334155",marginTop:20,marginBottom:8},chips:{flexDirection:"row",flexWrap:"wrap",gap:7},chip:{fontSize:11,fontWeight:"700",color:"#334155",backgroundColor:"#F1F5F9",paddingHorizontal:9,paddingVertical:7,borderRadius:9},bullet:{fontSize:13,color:"#475569",marginTop:6},button:{backgroundColor:"#0F172A",borderRadius:11,padding:13,marginTop:20},buttonText:{textAlign:"center",color:"#FFF",fontWeight:"800"},success:{backgroundColor:"#F0FDF4",borderRadius:12,padding:13,marginTop:20},successTitle:{fontSize:11,fontWeight:"900",color:"#15803D"},successText:{fontSize:12,color:"#166534",marginTop:4},started:{backgroundColor:"#EFF6FF",borderRadius:12,padding:13,marginTop:20},startedTitle:{fontSize:11,fontWeight:"900",color:"#1D4ED8"},startedText:{fontSize:12,lineHeight:18,color:"#1E40AF",marginTop:4},passport:{marginTop:16,padding:17,backgroundColor:"#0F172A",borderRadius:16,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},passportLabel:{fontSize:10,fontWeight:"900",letterSpacing:1,color:"#93C5FD"},passportTitle:{fontSize:16,fontWeight:"800",color:"#FFF",marginTop:4},arrow:{fontSize:28,color:"#FFF"}});
