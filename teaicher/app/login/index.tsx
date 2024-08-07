import { View, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../../components/Text/Text';
import { Input } from '../../components/Input/input';
import { Button, Icon } from '@rneui/themed';

export default function HomeScreen() {
  const [inputValues, setInputValues] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (text: string, id: string) => {
    setInputValues({
      ...inputValues,
      [id]: text.trim() // Trim leading and trailing spaces
    });
  };
  const handleSubmit = () => {
    const { username, password } = inputValues;
    console.log('Username:', username);
    console.log('Password:', password);
    // You can also use the values here, for example, to send them to a server
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logo}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.titleText}>
        <Text
          style={styles.titleText}
          weight="bold"
          font="generic"
          size="large"
          color="#FFFFFF"
        >
          Sign in
        </Text>
      </View>
      <View style={styles.titleText}>
        <Input
          leftIcon={{ type: 'font-awesome', name: 'user', color: 'white' }}
          inputContainerStyle={styles.usernameInput}
          inputFont="generic"
          inputSize="medium"
          inputColor="#FFFFFF"
          placeHolder="username"
          value={inputValues.username}
          handleChange={handleInputChange}
          id="username" children={undefined}        />
        <Input
          leftIcon={{ type: 'material', name: 'password', color: 'white' }}
          inputContainerStyle={styles.usernameInput}
          inputFont="generic"
          inputSize="medium"
          inputColor="#FFFFFF"
          placeHolder="password"
          secureTextEntry={true}
          value={inputValues.password}
          handleChange={handleInputChange}
          id="password" children={undefined}        />
      </View>
      <View style={styles.buttonView}>
        <Button
          buttonStyle={styles.button}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            paddingBottom: 10,
            marginVertical: 0
          }}
          titleStyle={{ fontWeight: 'bold' }}
          onPress={handleSubmit}
        >
          Next
        </Button>
        <View style={styles.iconView}>
          <Icon
            raised
            name="google"
            type="antdesign"
            color="#DB4437"
            onPress={() => console.log('hello')}
          />
          <Icon
            raised
            name="facebook"
            type="font-awesome"
            color="#316FF6"
            onPress={() => console.log('hello')}
          />
          <Icon
            raised
            name="apple"
            type="font-awesome"
            color="black"
            onPress={() => console.log('hello')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 15
  },
  usernameInput: {
    borderRadius: 10,
    borderBlockColor: 'white',
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#032757'
  },
  bottom: {
    padding: 25
  },
  login: {
    padding: 5
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#032757'
  },
  content: {
    padding: 0
  },
  header: {
    paddingHorizontal: 25
  },
  logo: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F5F5F5',
    margin: 12,
    width: 150,
    height: 150,
    borderRadius: 150 / 2
  },
  logoImage: {
    alignSelf: 'center',
    width: '100%',
    height: 150
  },
  buttonView: {
    width: '60%',
    backgroundColor: '#032757',
    paddingVertical: 12,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20
  },
  button: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
