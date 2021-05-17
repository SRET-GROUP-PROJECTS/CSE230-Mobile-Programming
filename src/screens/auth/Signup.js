import React from 'react';
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
    height: 295,
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

const Signup = ({navigation}) => {
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
          Signup
        </Text>
        <TextInput placeholder="email" style={styles.input} />
        <TextInput placeholder="username" style={styles.input} />
        <TextInput placeholder="password" style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.center}>Signup</Text>
        </TouchableOpacity>

        <View style={styles.redirect}>
          <Text>Already a member ! </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={{color: '#1133aa'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
