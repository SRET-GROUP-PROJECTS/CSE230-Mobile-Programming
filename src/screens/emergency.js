import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const DATA = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Chandler Bing"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    
    name: "Monica Geller"
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    name: "Joey Tribbiani"
  },
 
]

const Emergency = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <View style={styles.ripple_1}></View>
        <View style={styles.ripple_2}></View>
        <TouchableOpacity style={styles.sos_button}>
          <Text style={styles.sos_button_text}>SOS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <FlatList
          contentContainerStyle={{paddingVertical: 42}}
          data={DATA}
          renderItem={({item,index}) => (
            <View style={styles.contact_tile}>
              <Image style={styles.contact_image} source={{uri: item.url}}/>
              <Text style={styles.contact_name}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.add_contact_button}>
        <Text style={{color: '#F4F8FA', fontSize: 16, fontWeight: 'bold'}}>
          Add Contact
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: width,
    height: height,
    position: 'relative',
  },
  top: {
    width: width,
    height: height * 0.6,
    backgroundColor: '#D4EBFA',
    position: 'relative',
    zIndex: 10
  },
  bottom: {
    width: width,
    height: height * 0.4,
    backgroundColor: '#F4F8FA',
    position: 'relative',
    zIndex: 10
  },
  sos_button: {
    backgroundColor: '#E72B2C',
    width: 150,
    height: 150,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 50,
    top: height * 0.6 * 0.5,
    left: width * 0.5,
    transform: [
      {
        translateX: -75
      },
      {
        translateY: -75
      }
    ] 
  },
  ripple_1: {
    position: 'absolute',
    backgroundColor: '#E72B2C10',
    width: 320,
    height: 320,
    borderRadius: 300,
    top: height * 0.6 * 0.5,
    left: width * 0.5,
    transform: [
      {
        translateX: -(320/2)
      },
      {
        translateY: -(320/2)
      }
    ] 
  },
  ripple_2: {
    position: 'absolute',
    backgroundColor: '#E72B2C15',
    width: 240,
    height: 240,
    borderRadius: 300,
    top: height * 0.6 * 0.5,
    left: width * 0.5,
    transform: [
      {
        translateX: -(240/2)
      },
      {
        translateY: -(240/2)
      }
    ] 
  },
  sos_button_text: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#F4F8FA',
  },
  add_contact_button: {
    width: 220,
    height: 56,
    elevation: 5,
    backgroundColor: '#72B5ED',
    position: 'absolute',
    bottom: height * 0.4,
    left: width * 0.5,
    zIndex: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      {
        translateX: -110
      },
      {
        translateY: 28
      }
    ]  
  },
  contact_tile:{
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  contact_image: {
    height: 50,
    width: 50,
    borderRadius: 1000,
    marginRight: 14
  }
});

export default Emergency;