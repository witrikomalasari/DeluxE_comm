import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import Car from "../../Assets/Icons/carPink.png";
import cartWhite from "../../Assets/Icons/cartWhite.png";
import Star from "../../Assets/Icons/star.png";
import { getDetailProduct } from "../../Redux/Action/productAction";

export default function Detail() {
  const detailProduct = useSelector((state) => state.productReducer.product);

  useEffect(() => {
    getDetailProduct();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.picProduct}>
        <Image
          style={[styles.image, { marginTop: 40 }]}
          source={{ uri: detailProduct?.image }}
        />
      </View>

      <View style={styles.wrapDesc}>
        <View style={styles.iconHeart}>
          <View style={styles.desc}>
            <Text
              style={{
                fontWeight: "700",
                width: 250,
              }}
            >
              {detailProduct?.title}
            </Text>
            <View style={styles.harga}>
              <Text
                style={{
                  fontSize: 18,
                  color: "red",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                $ {detailProduct?.price}
              </Text>

              <Text
                style={{
                  borderWidth: 1,
                  marginLeft: 10,
                  paddingHorizontal: 5,
                  borderRadius: 5,
                  color: "red",
                  fontSize: 12,
                }}
              >
                Free Antiseptic
              </Text>
            </View>
          </View>
          <View>
            <MaterialCommunityIcons name="heart" size={30} />
          </View>
        </View>

        <View style={styles.wrapRating}>
          <View style={styles.rating}>
            <Image style={styles.star} source={Star} />
            <View style={{ flexDirection: "row" }}>
              <Text style={{ left: 5 }}>{detailProduct?.rating?.rate}</Text>
              <Text style={{ left: 10 }}>
                {detailProduct?.rating?.count} Sold /day
              </Text>
            </View>
          </View>
          <View style={styles.wrapCar}>
            <Image style={styles.car} source={Car} />
            <View style={{ flexDirection: "row" }}>
              <Text>Free Delivery</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomTransaksi}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 15,
            paddingBottom: 15,
          }} // kupon
        >
          <View
            style={{
              width: 35,
              height: 35,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#00D68F",
              borderRadius: 10,
            }}
          >
            <MaterialCommunityIcons
              name="message-processing-outline"
              size={20}
              style={{
                color: "#00D68F",
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: "40%",
              height: "70%",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#ffffff",
              borderRadius: 10,
              justifyContent: "center",
              alignItem: "center",
              borderColor: "#FD4D4D",
              borderWidth: 1,
            }}
          >
            <Text style={{ fontSize: 16 }}>Beli Sekarang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "40%",
              height: "70%",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FD4D4D",
              borderRadius: 10,
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                bottom: 10,
                fontWeight: "600",
              }}
            >
              <Image style={{ width: 40, height: 40 }} source={cartWhite} />+
              Keranjang
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  picProduct: {
    width: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: 420,
    resizeMode: "center",
  },
  wrapDesc: {
    width: "100%",
    height: "24%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  iconHeart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
  },

  desc: {
    fontWeight: "600",
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  harga: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  wrapRating: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    width: 25,
    height: 25,
  },
  wrapCar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  car: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  bottomTransaksi: {
    width: "100%",
    height: 80,
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#ffffff",
  },
});
