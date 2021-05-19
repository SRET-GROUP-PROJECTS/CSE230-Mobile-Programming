import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';
import {firebase} from '../../firebase/config';
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
  const [state, setState] = useState({username:'',password: '', email: ''});
  

  const handleSubmit = () => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(state.email, state.password)
    .then((response) => {
        const uid = response.user.uid
        const data = {
            id: uid,
            email:state.email,
            username:state.username,
        };
        const usersRef = firebase.firestore().collection('users')
        usersRef
            .doc(uid)
            .set(data)
            .then(() => {
                navigation.navigate('Home', {user: data})
            })
            .catch((error) => {
                alert(error)
            });
    })
    .catch((error) => {
        alert(error)
});
    setState({username:'',password: '', email: ''});
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
          Signup
        </Text>
        <TextInput
          placeholder="Username"
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
          placeholder="Email"
          style={styles.input}
          onChangeText={(text) =>
            setState({
              ...state,
              email: text,
            })
          }
          value={state.email}
        />
        <TextInput
          placeholder="Password"
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
