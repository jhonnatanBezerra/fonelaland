import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CardProduto = ({ produto }) => {

  const img = {
    uri: produto.image
  }

  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity style={{ marginBottom: 10, width: '48%', height: 208, backgroundColor: '#fff', borderRadius: 20, padding: 20 }}>

      <TouchableOpacity style={{ position: 'absolute', right: 10, top: 10, width: 25, height: 25, alignItems: 'center', justifyContent: 'center' }} onPress={() => setPressed(!pressed)}>
        {pressed ?
          <Ionicons name="heart" size={20} color="red" />
          :
          <Ionicons name="heart-outline" size={20} />
        }
      </TouchableOpacity>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image source={img} resizeMode="stretch" style={{ height: 90, width: 90, }} />
      </View>

      <Text style={{ marginTop: 10, textAlign: 'left', color: '#444', fontWeight: '600' }}>{produto.name}</Text>
      <Text style={{ marginTop: 5, textAlign: 'left', color: '#444', fontWeight: '600' }}>R$ {produto.preco}</Text>

    </TouchableOpacity>
  );
}
