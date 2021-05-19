import {View, Button, Text, ScrollView, StyleSheet, Image} from 'react-native';

import React, {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

const ViewDetails = ({navigation, route}) => {
  const [venues, setVenues] = useState({venues: route.params.venue});
  console.log(venues);

  if (venues) {
    return (
      <View style={{padding: 20,backgroundColor:'F4F8FA'}}>
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
            console.log(center);

            return (
              <View style={styles.card} key={index}>
                <Text style={styles.text}>{center.name}</Text>
                <Text style={styles.bodyText}>{center.address}</Text>
               {center.fee_type=="PAID"?<View>
                 <Text>{center.fee_type}</Text>
                 <Text>{center.vaccine_fees[fee]}</Text>
               </View>:<Text></Text>}
                {center.sessions.map((session,index)=>{
                  return (
                    <View>
                    <Text>{session.vaccine}</Text>
                    <Text>{session.min_age_limit}</Text>
                    <Text>{session.available_capacity_dose1}</Text>
                    <Text>{session.available_capacity_dose2}</Text>
                  </View>
                  );
                })}
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
          backgroundColor:'F4F8FA'
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
    elevation: 10,
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
