import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>PATH</Text>
      <Text style={styles.title}>Know where you are going.</Text>
      <Text style={styles.subtitle}>Discover a career path and know what you should do next.</Text>
      <Link href="/discover" style={styles.button}>Start discovering</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:28,justifyContent:"center",backgroundColor:"#F8FAFC"},
  eyebrow:{fontSize:16,fontWeight:"700",letterSpacing:2,color:"#2563EB",marginBottom:12},
  title:{fontSize:34,fontWeight:"800",color:"#0F172A",lineHeight:40},
  subtitle:{fontSize:17,lineHeight:25,color:"#475569",marginTop:14,marginBottom:28},
  button:{backgroundColor:"#0F172A",color:"#FFFFFF",paddingVertical:15,paddingHorizontal:18,borderRadius:12,overflow:"hidden",alignSelf:"flex-start"}
});
