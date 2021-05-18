import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';

import BG from '../../images/image.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  center: {
    color: 'white',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#e5e5e5',
    marginVertical: 6,
    paddingHorizontal: 10,
    marginHorizontal: 40,
    borderRadius: 5,
  },
  redirect: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#1133aa',
    width: 100,
    alignSelf: 'center',
    marginVertical: 30,
    borderRadius: 5,
  },
});

const Login = ({navigation}) => {
  const [state, setState] = useState({username: '', password: ''});

  const handleSubmit = () => {
    console.log(state);
    setState({username: '', password: ''});
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BG}
        style={styles.titleContainer}></ImageBackground>

      <View>
        <Text
          style={{
            color: '#1133aa',
            paddingHorizontal: 40,
            paddingVertical: 20,
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Login
        </Text>
        <TextInput
          placeholder="username"
          style={styles.input}
          onChangeText={(text) =>
            setState({
              ...state,
              username: text,
            })
          }
          value={state.username}
        />
        <TextInput
          placeholder="password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) =>
            setState({
              ...state,
              password: text,
            })
          }
          value={state.password}
        />

        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.center}>Login</Text>
        </TouchableOpacity>

        <View style={styles.redirect}>
          <Text>Want to join us ! </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={{color: '#1133aa'}}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
