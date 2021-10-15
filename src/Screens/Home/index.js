import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';

import { Header } from '../../Components/Header';
import { CardProduto } from '../../Components/CardProduto';

// import { Container } from './styles';

export const Home = () => {

  const [produtos, setProdutos] = useState([
    { id: "00", name: "Produto 01" },
    { id: "01", name: "Produto 02" },
    { id: "02", name: "Produto 03" },
    { id: "03", name: "Produto 04" },
    { id: "04", name: "Produto 05" }
  ]);

  const [marca, setMarca] = useState([
    { id: "00", name: "JBL" },
    { id: "01", name: "Beats" },
    { id: "02", name: "AKG" },
    { id: "03", name: "Razer" },
    { id: "04", name: "Hyperx" }
  ]);

  const renderProductsList = (produto) => {
    console.log('home');
    return (
      <CardProduto produto={produto} />
    )
  }

  return (
    <View style={{ height: '100%', backgroundColor: 'transparent' }}>

      {/* <Header /> */}

      <View style={{ backgroundColor: '#f3f3ff', flex: 1, borderTopLeftRadius: 30, borderTopEndRadius: 30, paddingHorizontal: 20 }}>

        {/* MARCA */}
        <View >
          <Text style={{ marginBottom: 24, fontSize: 22 }}>Escolha marca</Text>

          <FlatList
            horizontal
            data={marca}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={{ marginRight: 10, height: 75, width: 110, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Marca 1</Text>
              </View>
            )}
          />

        </View>

        {/* Produtos lista */}
        <View style={{ flex: 1 }}>
          <Text style={{ marginVertical: 24, fontSize: 22 }}>Produtos</Text>

          <FlatList
            columnWrapperStyle={{ justifyContent: "space-between", width: '100%', alignItems: 'flex-start' }}
            data={produtos}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => renderProductsList(item)}
          />


        </View>

      </View>

      {/* tab navigation */}
      <View style={{ height: 42, borderTopLeftRadius: 30, borderTopEndRadius: 30, borderColor: 'black', borderWidth: 0.3 }}>
        <Text style={{ textAlign: 'center' }}>Tab navigation</Text>
      </View>

    </View>
  );
}

