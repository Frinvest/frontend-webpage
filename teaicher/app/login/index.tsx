import { View,  StyleSheet, Image, Dimensions,TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button} from '@rneui/themed';
import {Text} from '../../components/Text/Text'
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Information */}
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.titleText} font='generic' size='large' color="#FFFFFF">Welcome to TeAIcher</Text>
          <Text style={styles.messageText} font='generic' size='medium' color="#FFFFFF">A personalized and fun way to learn</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ALL TEXT STYLES
  bottomText:{
    textAlign:"center",
    marginBottom:10,
  },
  loginText:{
    textAlign:"center",
    marginBottom:10,
    textDecorationLine: 'underline',
  },
  titleText:{
    textAlign:"center",
    marginBottom:10,
  }, 
  messageText:{
    paddingTop: 15,
    textAlign:"center",
    marginBottom:10,
  },
// -----------------------

  bottom:{
    padding:25,
  },
  login:{
    padding:5,
  },
  container:{
    flex:1,
    backgroundColor:"#032757",
  },
  content:{
    padding: 0,
  },
  header:{
    paddingHorizontal: 25,
  },
  hero: {
    alignItems:"center",
    alignSelf:"center",
    backgroundColor: '#F5F5F5',
    margin: 12,
    width: 300,
    height: 300,
    borderRadius: 300/2
  },
  heroImage: {
    alignSelf:"center",
    width: '100%',
    height: 300,
  },

   /** Button */
   buttonView: {
    width: "60%",
    backgroundColor: '#032757',
    paddingVertical: 12,
    marginTop:30,
    justifyContent: "center", 
    alignItems: "center", 
    alignSelf:"center",
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
});