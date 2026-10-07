import { StyleSheet, Text, View } from "react-native";

export default function Discover() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover your path</Text>
      <Text style={styles.body}>We will use your education, interests, strengths, preferred work style and goals to suggest career paths worth exploring.</Text>
      <Text style={styles.note}>PATH will never claim that one career is guaranteed to be right for you.</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{flex:1,padding:28,justifyContent:"center",backgroundColor:"#FFFFFF"},
  title:{fontSize:30,fontWeight:"800",color:"#0F172A"},
  body:{fontSize:17,lineHeight:26,color:"#475569",marginTop:14},
  note:{fontSize:14,lineHeight:21,color:"#64748B",marginTop:20}
});
