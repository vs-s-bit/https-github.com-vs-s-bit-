import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { usePath } from "../context/PathContext";

export default function Interview(){
 const {completeInterview}=usePath(); const [answer,setAnswer]=useState("");
 const ready=answer.trim().length>=20;
 return <View style={s.c}><Text style={s.e}>INTERVIEW • 20 MIN</Text><Text style={s.t}>Practice your first interview</Text><Text style={s.sub}>Answer one realistic question about the project you completed.</Text><Text style={s.q}>Tell me about your first dataset analysis and what you learned.</Text><TextInput value={answer} onChangeText={setAnswer} multiline placeholder="Write your answer in your own words..." style={s.input}/><Text style={s.note}>PATH checks that you provided a meaningful answer. It does not judge your appearance.</Text><Pressable disabled={!ready} onPress={()=>{completeInterview();router.replace("/next-step")}} style={[s.b,!ready&&s.disabled]}><Text style={s.bt}>Save interview practice →</Text></Pressable></View>
}
const s=StyleSheet.create({c:{flex:1,padding:24,justifyContent:"center",backgroundColor:"#F8FAFC"},e:{fontSize:12,fontWeight:"900",letterSpacing:1,color:"#2563EB"},t:{fontSize:30,fontWeight:"800",color:"#0F172A",marginTop:8},sub:{fontSize:15,lineHeight:23,color:"#64748B",marginTop:8},q:{fontSize:18,lineHeight:26,fontWeight:"800",color:"#0F172A",marginTop:24},input:{height:150,marginTop:14,padding:14,borderWidth:1,borderColor:"#CBD5E1",borderRadius:12,backgroundColor:"#FFF",textAlignVertical:"top",fontSize:15},note:{fontSize:12,lineHeight:18,color:"#64748B",marginTop:10},b:{backgroundColor:"#0F172A",padding:16,borderRadius:12,marginTop:18},disabled:{opacity:.45},bt:{color:"#FFF",textAlign:"center",fontWeight:"800"}});