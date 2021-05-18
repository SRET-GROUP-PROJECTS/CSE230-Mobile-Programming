import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import CenterImg from '../images/doctornurse.png';
import CenterImg2 from '../images/twoaunties.png';

const Home = () => {
  //   const images = ;

  return (
    <View style={{padding: 20, backgroundColor: '#fff', flex: 1}}>
      <FlatList
        data={[
          {
            image: require('../images/doctornurse.png'),
            id: 1,
          },
          {
            image: CenterImg2,
            id: 2,
          },
        ]}
        style={{width: '100%'}}
        horizontal={true}
        pagingEnabled={true}
        renderItem={({item, index}) => {
          return (
            <View style={{width: '100%'}}>
              <Image
                key={item.id}
                source={item.image}
                style={{
                  width: '100%',
                  height: 250,
                }}
              />
              <Text>{item.id}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;
