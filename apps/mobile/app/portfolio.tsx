import {router} from "expo-router";
import {Pressable,ScrollView,StyleSheet,Text,TextInput,View} from "react-native";
import {usePath} from "../context/PathContext";
import {BottomNav} from "../components/BottomNav";

export default function Portfolio(){
 const {portfolioCompleted,completePortfolio}=usePath();
 return <View style={s.screen}><ScrollView contentContainerStyle={s.c}>
  <Text style={s.eyebrow}>PORTFOLIO EVIDENCE</Text>
  <Text style={s.title}>Turn your project into proof.</Text>
  <Text style={s.sub}>Write a short explanation of what you built, what you found and what you learned.</Text>
  <View style={s.card}>
   <Text style={s.label}>PROJECT</Text><Text style={s.project}>First Dataset Analysis</Text>
   <Text style={s.label}>YOUR SUMMARY</Text>
   <TextInput multiline placeholder="Example: I cleaned a small dataset, compared categories and found two useful patterns..." placeholderTextColor="#94A3B8" style={s.input}/>
   <Text style={s.hint}>Keep it factual. PATH should never invent achievements or skills for you.</Text>
   {portfolioCompleted?<View style={s.success}><Text style={s.successTitle}>✓ PORTFOLIO EVIDENCE SAVED</Text><Text style={s.successText}>This project now counts as evidence for your Data Analysis skill.</Text></View>:<Pressable onPress={completePortfolio} style={s.button}><Text style={s.buttonText}>Save evidence</Text></Pressable>}
  </View>
  <Pressable onPress={()=>router.push("/skills")} style={s.link}><Text style={s.linkText}>View Skill Passport →</Text></Pressable>
 </ScrollView><BottomNav/></View>
}
const s=StyleSheet.create({screen:{flex:1,backgroundColor:"#F8FAFC"},c:{padding:22,paddingBottom:100},eyebrow:{fontSize:11,fontWeight:"900",letterSpacing:1,color:"#2563EB",marginTop:18},title:{fontSize:30,fontWeight:"800",color:"#0F172A",marginTop:6},sub:{fontSize:14,lineHeight:21,color:"#475569",marginTop:7},card:{backgroundColor:"#FFF",borderRadius:17,borderWidth:1,borderColor:"#E2E8F0",padding:17,marginTop:20},label:{fontSize:10,fontWeight:"900",letterSpacing:1,color:"#64748B",marginTop:5},project:{fontSize:19,fontWeight:"800",color:"#0F172A",marginTop:6,marginBottom:20},input:{minHeight:130,borderWidth:1,borderColor:"#CBD5E1",borderRadius:12,padding:13,textAlignVertical:"top",fontSize:14,color:"#0F172A",marginTop:8},hint:{fontSize:11,lineHeight:17,color:"#64748B",marginTop:9},button:{backgroundColor:"#0F172A",borderRadius:11,padding:13,marginTop:18},buttonText:{color:"#FFF",fontWeight:"800",textAlign:"center"},success:{backgroundColor:"#F0FDF4",borderRadius:12,padding:13,marginTop:18},successTitle:{fontSize:11,fontWeight:"900",color:"#15803D"},successText:{fontSize:12,lineHeight:18,color:"#166534",marginTop:4},link:{padding:16,alignItems:"center"},linkText:{fontWeight:"800",color:"#2563EB"}});
