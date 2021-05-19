import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

var flag = 0;
const Profile = () => {
  const male = require('../images/male.png');
  const female = require('../images/femenine.png');
  //   const ProfileImg = require('./assets/profile_vector.png');
  const [gender, genderState] = useState(0);
  const saveHandler=()=>{

  }
  return (
    <View
      style={{backgroundColor: 'white', flex: 1, justifyContent: 'flex-start'}}>
      <ScrollView style={{flex: 1, height: HEIGHT}}>
        {/* <View style={{ borderColor: "#1464F4", borderTopWidth: 0.5 }} /> */}

        <View
          style={{
            paddingHorizontal: 20,
            backgroundColor: '#1464F4',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            height: HEIGHT * 0.18,
            paddingVertical: 20,
          }}>
          <Text style={{color: '#fefe', fontWeight: '500', paddingTop: 20}}>
            Welcome
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold', paddingBottom: 20}}>
            Patrick
          </Text>
          <View style={styles.backButton}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: 18,
                width: 18,
                marginTop: 18,
                marginLeft: 20,
              }}
            />
            <Text style={styles.backText}> Back to Home</Text>
          </View>
          {/* </LinearGradient> */}
        </View>
        {/* <View style={{ borderColor: "#1464F4", borderTopWidth: 0.5 }} /> */}
        <View style={{paddingLeft: 20, paddingTop: 20}}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor="grey"
            style={styles.textInput}
            multiline={true}
            defaultValue="name"
            maxLength={165}
            onChangeText={(text) => {
              console.log(text);
            }}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#123"
            style={styles.textInput}
            multiline={true}
            maxLength={165}
            defaultValue="enigma@gmail.com"
            onChangeText={(text) => {
              console.log(text);
            }}
          />
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            placeholder="Phone number"
            placeholderTextColor="grey"
            style={styles.textInput}
            multiline={true}
            maxLength={165}
            onChangeText={(text) => {
              console.log(text);
            }}
          />
          <Text style={styles.label}>Gender</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                genderState(1);
              }}>
              <View
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  backgroundColor: '#F0F8FF',
                  marginRight: 20,
                  borderColor:
                    gender == 0 ? null : gender == 1 ? '#49abc3' : null,
                  borderWidth: gender == 1 ? 1 : 0,
                  borderRadius: 8,
                }}>
                <Image source={male} style={{width: 40, height: 40}} />
                <Text style={{paddingVertical: 10}}>Male</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                genderState(2);
              }}>
              <View
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  backgroundColor: '#F0F8FF',
                  marginRight: 10,
                  borderColor:
                    gender == 0 ? null : gender == 2 ? '#49abc3' : null,
                  borderWidth: gender == 2 ? 1 : 0,
                  borderRadius: 8,
                }}>
                <Image source={female} style={{width: 40, height: 40}} />
                <Text style={{paddingVertical: 10}}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingTop: 10,
              paddingRight: 10,
            }}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              placeholder="age"
              placeholderTextColor="grey"
              style={[styles.textInput]}
              multiline={true}
              maxLength={165}
              onChangeText={(text) => {
                console.log(text);
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10
            }}
            onPress={()=>{
              AsyncStorage.setItem("authState","null")
            }}
            >
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                backgroundColor: '#1464F4',
                width: 100,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontSize: 15}}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  label: {
    color: '#113366',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 10,
    marginLeft: 10,
  },
  textInput: {
    backgroundColor: '#fefefe',
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    color: '#123',
    fontWeight: '600',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginVertical: 8,
    borderRadius: 10,
    width: 335,
  },
  backButton: {
    marginTop: 8,
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#00B2EE',
    borderRadius: 22,
    width: 180,
    height: 50,
    flexDirection: 'row',
  },
  backText: {
    paddingRight: 25,
    paddingVertical: 15,
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});
