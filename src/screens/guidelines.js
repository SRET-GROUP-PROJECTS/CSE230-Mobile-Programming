import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {Component, useState} from 'react';

const Guidelines = () => {
  content = [
    {
      id: 1,
      title: 'What to do if someone is sick in your household?',
      body:
        "Prepare an isolated room or space for the person and keep them ventilated.Monitor the person's symptoms regularly and keep them hydrated, don't panic.Try to reduce contact with the sick person and use separate dishes and items for them, regularly disinfect and clean the touched surfaces.",
    },
  ];
  return (
    <View style={styles.main}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={content}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>Hello</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

styles = StyleSheet.create({
  main: {},
});

export default Guidelines;
