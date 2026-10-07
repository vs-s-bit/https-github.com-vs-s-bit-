import {ScrollView,StyleSheet,Text,View} from "react-native";
import {usePath,SkillLevel} from "../context/PathContext";
import {BottomNav} from "../components/BottomNav";

const labels:Record<SkillLevel,string>={NOT_STARTED:"Not started",BEGINNER:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced",VERIFIED:"Verified"};

export default function Skills(){
 const {skills}=usePath();
 const evidenceCount=skills.reduce((n,x)=>n+x.evidence.length,0);
 return <View style={s.screen}><ScrollView contentContainerStyle={s.c}>
  <Text style={s.eyebrow}>SKILL PASSPORT</Text>
  <Text style={s.title}>Your skills, with evidence.</Text>
  <Text style={s.sub}>PATH tracks progress from learning to demonstrated ability. “Verified” will only appear when a real verification mechanism exists.</Text>
  <View style={s.summary}><Text style={s.summaryBig}>{skills.filter(x=>x.level!=="NOT_STARTED").length}</Text><Text style={s.summaryText}>skills started</Text><Text style={s.summaryEvidence}>{evidenceCount} evidence item</Text></View>
  {skills.map(skill=><View key={skill.name} style={s.card}>
   <View style={s.row}><View style={s.flex}><Text style={s.name}>{skill.name}</Text><Text style={s.level}>{labels[skill.level]}</Text></View><View style={[s.dot,skill.level!=="NOT_STARTED"&&s.activeDot]}><Text style={s.dotText}>{skill.level==="NOT_STARTED"?"—":"✓"}</Text></View></View>
   <View style={s.track}><View style={[s.fill,{width:skill.level==="NOT_STARTED"?"0%":skill.level==="BEGINNER"?"35%":skill.level==="INTERMEDIATE"?"65%":skill.level==="ADVANCED"?"90%":"100%"}]}/></View>
   {skill.evidence.length>0?<Text style={s.evidence}>Evidence: {skill.evidence.join(", ")}</Text>:<Text style={s.muted}>Complete lessons and projects to build evidence.</Text>}
  </View>)}
  <View style={s.note}><Text style={s.noteTitle}>What “proof” means</Text><Text style={s.noteText}>A completed lesson shows learning. A completed project adds evidence. Future PATH versions can add assessments, mentor review or employer verification before a skill becomes VERIFIED.</Text></View>
 </ScrollView><BottomNav/></View>
}
const s=StyleSheet.create({screen:{flex:1,backgroundColor:"#F8FAFC"},c:{padding:22,paddingBottom:100},eyebrow:{fontSize:11,fontWeight:"900",letterSpacing:1,color:"#2563EB",marginTop:18},title:{fontSize:30,fontWeight:"800",color:"#0F172A",marginTop:6},sub:{fontSize:14,lineHeight:21,color:"#475569",marginTop:7},summary:{backgroundColor:"#0F172A",borderRadius:17,padding:18,marginTop:20},summaryBig:{fontSize:30,fontWeight:"900",color:"#FFF"},summaryText:{fontSize:12,color:"#CBD5E1",marginTop:1},summaryEvidence:{fontSize:11,color:"#93C5FD",marginTop:9},card:{backgroundColor:"#FFF",borderWidth:1,borderColor:"#E2E8F0",borderRadius:15,padding:16,marginTop:12},row:{flexDirection:"row",alignItems:"center"},flex:{flex:1},name:{fontSize:16,fontWeight:"800",color:"#0F172A"},level:{fontSize:11,color:"#64748B",marginTop:3,fontWeight:"700"},dot:{width:30,height:30,borderRadius:15,backgroundColor:"#F1F5F9",alignItems:"center",justifyContent:"center"},activeDot:{backgroundColor:"#DCFCE7"},dotText:{fontSize:13,fontWeight:"900",color:"#15803D"},track:{height:6,backgroundColor:"#E2E8F0",borderRadius:4,marginTop:13},fill:{height:6,backgroundColor:"#2563EB",borderRadius:4},evidence:{fontSize:11,color:"#166534",marginTop:9},muted:{fontSize:11,color:"#94A3B8",marginTop:9},note:{backgroundColor:"#EFF6FF",borderRadius:14,padding:15,marginTop:16},noteTitle:{fontSize:12,fontWeight:"900",color:"#1E40AF"},noteText:{fontSize:12,lineHeight:18,color:"#1E3A8A",marginTop:5}});
