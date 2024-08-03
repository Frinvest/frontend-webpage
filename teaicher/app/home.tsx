import { View,  StyleSheet, Image, Dimensions, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button,Text} from '@rneui/themed';
const {height} = Dimensions.get("window")
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
        <Text style={styles.title}>Welcome to TeAIcher
          </Text>
        <Text style={styles.message}>
            A personalized and fun way to learn
        </Text>
        </View>
          <View style={styles.buttonView}>
          <Button
              title="SIGN UP"
              buttonStyle={styles.button}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 0,
              }}
              titleStyle={{ fontWeight: 'bold' }}
            />
          </View>
  
        

        <View style={styles.bottom}>
            <Text style = {styles.bottomText}>Already got an account?  
            <View style={styles.login}>
            <Text style={styles.loginText} >
                 Log In 
            </Text>
          </View>
           </Text>
    
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomText:{
    fontFamily: 'Avenir-Medium',
    fontSize: 20,
    color:"#FFFFFF",
    textAlign:"center",
    marginBottom:10,
  },
  bottom:{
    padding:25,
  },
  loginText:{
    fontFamily: 'Avenir-Medium',
    fontSize: 20,
    color:"#FFFFFF",
    textAlign:"center",
    marginBottom:10,
    textDecorationLine: 'underline',
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
  title:{
    fontFamily: 'Avenir-Medium',
    fontSize: 35,
    color:"#FFFFFF",
    textAlign:"center",
    marginBottom:10,
  }, 
  message:{
    paddingTop: 15,
    fontSize: 20,
    color:"#FFFFFF",
    textAlign:"center",
    marginBottom:10,
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
    fontFamily:"Avenir-Medium",
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
});