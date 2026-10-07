import { Stack } from "expo-router";
import { PathProvider } from "../context/PathContext";

export default function RootLayout(){
  return <PathProvider><Stack screenOptions={{headerShown:false}}/></PathProvider>;
}