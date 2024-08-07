import { View,  StyleSheet, Image, Dimensions,TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button} from '@rneui/themed';
import {Text} from '../components/Text/Text'
import { Link } from 'expo-router';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.hero}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      {/* Information */}
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.titleText} font='generic' size='large' color="#FFFFFF">Welcome to TeAIcher</Text>
          <Text style={styles.messageText} font='generic' size='medium' color="#FFFFFF">A personalized and fun way to learn</Text>
        </View>
        {/* Sign up Button */}
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
        {/* Log in  */}
        <View style={styles.bottom}>
            <Text style = {styles.bottomText}  font='generic' size='medium'  color="#FFFFFF" >Already got an account?  
              <View style={styles.login}>
  
                  <Link  href="/login"> 
                      <Text style={styles.loginText} font='generic' size='medium'  color="#FFFFFF" >
                      Sign In 
                      </Text>
                  </Link>
   
              </View>
            </Text>
    
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