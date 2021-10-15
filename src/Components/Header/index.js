import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



export const Header = () => {

  const img = {
    uri: 'https://images.tcdn.com.br/img/img_prod/603287/1542652890_foneland-logo.png'
  }

  return (
    <View style={{ height: 72, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, backgroundColor: '#fff' }}>

      <TouchableOpacity>
        <Ionicons name="menu" size={28} />
      </TouchableOpacity>

      <View style={{ flex: 1, paddingHorizontal: 30 }}>
        <Image source={img} resizeMode="stretch" style={{ height: '100%', width: '100%', }} />
      </View>

      <TouchableOpacity >
        <Ionicons name="search" size={28} />
      </TouchableOpacity>

    </View>
  );
}
