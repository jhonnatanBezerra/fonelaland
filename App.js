import React, { useState } from 'react';
import { Text, View, SafeAreaView, FlatList, StatusBar } from 'react-native';


import { Header } from './src/Components/Header';
import { CardProduto } from './src/Components/CardProduto';
import { CardMarca } from './src/Components/CardMarca';


export default function App() {

  const [produtos, setProdutos] = useState([
    { id: "00", name: "HyperX Cloud Alpha", preco: "599,90", image: "https://http2.mlstatic.com/D_NQ_NP_618863-MLA45812996847_052021-O.jpg" },
    { id: "01", name: "HyperX Cloud Beta", preco: "560,27", image: "https://www.portosoft.com.br/media/catalog/product/cache/1/image/540x/9df78eab33525d08d6e5fb8d27136e95/f/o/fone_hyperx.jpg" },
    { id: "02", name: "HyperX Cloud Charlie", preco: "500,99", image: "https://images-americanas.b2w.io/produtos/01/00/img/3389784/2/3389784244_1GG.jpg" },
    { id: "03", name: "HyperX Cloud Delta", preco: "128,00", image: "https://cf.shopee.co.th/file/bbd49fda4b9d259d13415b1af7bc2360" },
    { id: "04", name: "HyperX Cloud Eco", preco: "610,20", image: "https://a-static.mlcdn.com.br/618x463/fone-de-ouvido-headset-gamer-hyperx-cloudx-chat-para-xbox/maikshop/9766147419/7c01d93893b788eaaf4fc972b75a89de.jpg" },
    { id: "05", name: "HyperX Cloud Charlie", preco: "500,99", image: "https://images-americanas.b2w.io/produtos/01/00/img/3389784/2/3389784244_1GG.jpg" },
    { id: "06", name: "HyperX Cloud Alpha", preco: "599,90", image: "https://http2.mlstatic.com/D_NQ_NP_618863-MLA45812996847_052021-O.jpg" },
  ]);

  const [marca, setMarca] = useState([
    { id: "00", name: "JBL", logo: "https://www.logosvgpng.com/wp-content/uploads/2018/03/jbl-logo-vector.png" },
    { id: "01", name: "Beats", logo: "https://1000logos.net/wp-content/uploads/2021/05/Beats-by-Dre-logo.png" },
    { id: "02", name: "AKG", logo: "https://1ty.vn/datafiles/3/2018-06-09/AKG-logo-15284862397447.jpg" },
    { id: "03", name: "Razer", logo: "https://logos-world.net/wp-content/uploads/2020/11/Razer-Logo.png" },
    { id: "04", name: "Hyperx", logo: "https://www.gamehype.co.uk/wp-content/uploads/2018/08/hyper-x.png" },
  ]);

  const renderProductsList = (produto) => {
    return (
      <CardProduto produto={produto} />
    )
  }

  const renderBrandsList = (brand) => {
    return (
      <CardMarca marca={brand} />
    )
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View style={{ height: '100%', backgroundColor: 'transparent' }}>

        <Header />

        <View style={{ backgroundColor: '#f3f3ff', flex: 1, borderTopLeftRadius: 30, borderTopEndRadius: 30, paddingHorizontal: 20 }}>

          {/* MARCA */}
          <View >
            <Text style={{ marginVertical: 10, fontSize: 22 }}>Escolha marca</Text>

            <FlatList
              horizontal
              data={marca}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item }) => renderBrandsList(item)}
            />

          </View>

          {/* Produtos lista */}
          <View style={{ flex: 1 }}>
            <Text style={{ marginVertical: 10, fontSize: 22 }}>Produtos ({produtos.length})</Text>

            <FlatList
              columnWrapperStyle={{ justifyContent: "space-between", width: '100%', alignItems: 'flex-start' }}
              data={produtos}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item }) => renderProductsList(item)}
            />


          </View>

        </View>

        {/* tab navigation */}
        {/* <View style={{ height: 42, borderTopLeftRadius: 30, borderTopEndRadius: 30, borderColor: 'black', borderWidth: 0.3 }}>
          <Text style={{ textAlign: 'center' }}>Tab navigation</Text>
        </View> */}

      </View>
    </SafeAreaView>
  );
}

