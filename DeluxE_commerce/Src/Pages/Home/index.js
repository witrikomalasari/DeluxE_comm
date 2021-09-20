import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Cashback from "../../Assets/Icons/award.png";
import GratisOngkir from "../../Assets/Icons/car.png";
import Travel from "../../Assets/Icons/categoryicon.png";
import Dollar from "../../Assets/Icons/dollar.png";
import SeeAll from "../../Assets/Icons/Home.png";
import Allcategory from "../../Assets/Icons/iconretangle.png";
import Percent from "../../Assets/Icons/percent.png";
import Pin from "../../Assets/Icons/pin.png";
import TopUp from "../../Assets/Icons/repeat.png";
import InfoDiskon from "../../Assets/Images/addItem.png";
import StatusBar from "../../Assets/Images/Banner.png";
import CardProduct from "../../Components/Complex/CardProduct";
import CardProdVertical from "../../Components/Complex/CardProdVertical";
import Category from "../../Components/Complex/Category";
import Search from "../../Components/Complex/Search";
import Gap from "../../Components/Simple/Gap";
import {
  getAllProducts,
  getDetailProduct,
} from "../../Redux/Action/productAction";

export default function Home({ navigation }) {
  const allProduct = useSelector((state) => state.productReducer.allProduct);
  const dispatch = useDispatch();
  const [category] = useState([
    {
      id: 1,
      titleCategory: "Lihat Semua",
      icon: SeeAll,
    },

    {
      id: 2,
      titleCategory: "Gratis Ongkir Xtra",
      icon: GratisOngkir,
    },
    {
      id: 3,
      titleCategory: "TopUp & Tagihan",
      icon: TopUp,
    },
    {
      id: 4,
      titleCategory: "Deals Di Sekitar",
      icon: Pin,
    },
    {
      id: 5,
      titleCategory: "Cashback & Voucher",
      icon: Cashback,
    },
    {
      id: 6,
      titleCategory: "Travel & Entertainment",
      icon: Travel,
    },
  ]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.greenContainer}>
        <ImageBackground style={styles.topBanner} source={StatusBar}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              marginTop: 50,
              justifyContent: "space-around",
              alignItems: "center",
              paddingHorizontal: 15,
            }}
          >
            <Search name="search" placeholder="Searching..." />
            <MaterialCommunityIcons
              name="heart"
              size={26}
              style={{ color: "#4F4F4F" }}
            />
            <MaterialCommunityIcons
              name="message-processing"
              size={26}
              style={{ color: "#4F4F4F" }}
            />
            <MaterialCommunityIcons
              name="cart"
              size={26}
              style={{ color: "#4F4F4F" }}
            />
          </View>

          <View
            style={{
              width: "35%",
              height: 24,
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#4F4F4F",
              top: 125,
              left: 245,
              borderRadius: 8,
            }}
          >
            <Text
              style={{ color: "#ffffff", fontWeight: "bold", fontSize: 13 }}
            >
              Lihat semua promo
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.blueContainer}>
        <View
          style={{
            flex: 0.4,
            borderRadius: 8,
            margin: 15,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            padding: 10,
            backgroundColor: "#F4F4F4",
          }} // kupon
        >
          <View>
            <Image source={Allcategory} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              borderRightColor: "black",
              borderRightWidth: 0.5,
            }} // dollar
          >
            <Image style={{ width: 30, height: 30 }} source={Dollar} />

            <View style={{ flexDirection: "column", marginHorizontal: 5 }}>
              <Text>Rp. 1.055.000 </Text>
              <Text style={{ color: "red", fontWeight: "700" }}>Top up </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }} // kupon
          >
            <Image style={{ width: 30, height: 30 }} source={Percent} />
            <View style={{ flexDirection: "column", marginHorizontal: 10 }}>
              <Text>9 Kupon Baru </Text>
              <Text style={{ color: "red", fontWeight: "700" }}>
                Kupon Saya{" "}
              </Text>
            </View>
          </View>
        </View>
        <Gap height={5} />
        <View
          style={{
            width: "100%",
            height: 80,
            flexDirection: "row",
            marginBottom: 15,
            paddingLeft: 3,
          }}
        >
          {category.map((item) => {
            return (
              <Category
                key={item.id}
                titleCategory={item.titleCategory}
                source={item.icon}
              />
            );
          })}
        </View>
        <Gap height={70} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }} // category
        ></View>
      </View>
      <View style={styles.absoluteConteiner}>
        <Image source={InfoDiskon} />
      </View>
      <View style={styles.wrapCard}>
        <View style={styles.title}>
          <Text
            style={{
              fontSize: 18,
              color: "red",
              fontWeight: "bold",
              paddingHorizontal: 10,
              paddingLeft: 15,
            }}
          >
            Flash Sell
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "black",
              fontWeight: "500",
              left: 5,
            }}
          >
            03. 30. 30
          </Text>

          <TouchableOpacity
            style={{
              width: "55%",
              flexDirection: "row-reverse",
            }}
          >
            <Text>
              All <Text style={{ color: "red" }}> {">"} </Text>
            </Text>
          </TouchableOpacity>
        </View>

        <Gap height={5} />
        <FlatList
          data={allProduct}
          keyExtractor={(item) => `_${item.id}`}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  await dispatch(getDetailProduct(item.id));
                  navigation.navigate("Detail", {
                    idProduct: item.id,
                  });
                }}
              >
                <CardProduct
                  source={{ uri: item.image }}
                  productName={item.title}
                  price={item.price}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Gap height={10} />
      <View style={styles.wrapCard2}>
        <View style={styles.title}>
          <Text
            style={{
              fontSize: 18,
              color: "red",
              fontWeight: "bold",
              paddingHorizontal: 10,
              paddingLeft: 15,
            }}
          >
            Popular Product
          </Text>
          <TouchableOpacity
            style={{
              width: "55%",
              flexDirection: "row-reverse",
            }}
          >
            <Text>
              All <Text style={{ color: "red" }}> {">"} </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <Gap height={5} />
        <FlatList
          data={allProduct}
          keyExtractor={(item) => `#${item.id}`}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  await dispatch(getDetailProduct(item.id));
                  navigation.navigate("Detail", {
                    idProduct: item.id,
                  });
                }}
              >
                <CardProdVertical
                  source={{ uri: item.image }}
                  productName={item.title}
                  price={item.price}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Gap height={30} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  greenContainer: {
    width: "100%",
    alignItems: "center",
  },
  topBanner: {
    width: "100%",
    height: 240,
  },
  blueContainer: {
    width: "100%",
    backgroundColor: "#255BA5",
  },
  absoluteConteiner: {
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    bottom: 30,
  },
  wrapCard: {
    width: "100%",
    height: 320,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  wrapCard2: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
  },
  wrapCategeriIcon: {
    width: "70%",
    height: 60,
    backgroundColor: "#F4F4F4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  images: {
    width: 40,
    height: 40,
  },
});
