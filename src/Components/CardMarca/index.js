import React from 'react';
import { View, Text, Image } from 'react-native';


export const CardMarca = ({ marca }) => {

  const img = {
    uri: marca.logo
  }

  return (
    <View style={{ marginRight: 10, height: 75, width: 110, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={img} resizeMode="stretch" style={{ height: 50, width: 50, }} />
      {/* <Text>{marca.name}</Text> */}
    </View>
  );
}

