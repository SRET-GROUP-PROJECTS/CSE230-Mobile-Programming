import {View, Button, Text, ScrollView, StyleSheet, Image} from 'react-native';

import React, {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

const ViewDetails = ({navigation, route}) => {
  const [venues, setVenues] = useState({venues: route.params.venue});
  console.log(venues);

  if (venues) {
    return (
      <View style={{padding: 20}}>
        <Text
          style={{
            padding: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Venues
        </Text>
        <ScrollView>
          {venues.venues.centers.map((center,index) => {
            return (
              <View style={styles.card} key={index}>
                <Text style={styles.text}>{center.name}</Text>
                <Text style={styles.bodyText}>{center.address}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Spinner
          visible={loading}
          // textContent={'Loading...'}
          // textStyle={{color: colors.text}}
          // overlayColor={colors.background}
          // cancelable={false}
          // color={colors.text}
          animation="fade"
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 4,
    width: "80%",
    alignSelf:'center'
  },
  titleText: {
    color: 'black',
    fontSize: 18,
  },
  text: {
    fontSize: 15,
    color: '#003F87',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  bodyText: {
    fontSize: 14,
    //color:"rgba(0,0,150,0.5)",
    color: '#369',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default ViewDetails;
