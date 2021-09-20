import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import firebase from "firebase";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BeriPenilain from "../../Assets/Icons/awardPink.png";
import Dikirim from "../../Assets/Icons/carPink.png";
import TopUpPink from "../../Assets/Icons/creditCardPink.png";
import Dikemas from "../../Assets/Icons/inboxPink.png";
import TiketPesawat from "../../Assets/Icons/paperPlanePink.png";
import CardTransaksi from "../../Components/Complex/CardTransaksi";
import ButtonCustoms from "../../Components/Simple/Button";
import Gap from "../../Components/Simple/Gap";

export default function Profile({ navigation }) {
  const [name] = useState("");
  const [Click, setClick] = useState("Akun Pembeli");
  const [IconTransaksi] = useState([
    {
      id: 1,
      titleTransaksi: "TopUp & Tagihan",
      icon: TopUpPink,
    },

    {
      id: 2,
      titleTransaksi: "Tiket & Pesawat",
      icon: TiketPesawat,
    },
    {
      id: 3,
      titleTransaksi: "Dikemas",
      icon: Dikemas,
    },
    {
      id: 4,
      titleTransaksi: "Dikirim",
      icon: Dikirim,
    },
    {
      id: 5,
      titleTransaksi: "Beri Penilaian",
      icon: BeriPenilain,
    },
  ]);

  const user = firebase?.auth()?.currentUser;

  const displayName = user.displayName;

  const SignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("succes sign out");
        navigation.replace("Welcome");
      })
      .catch((error) => {
        // An error happened.
        console.log("gagal sign out", error.message);
      });

    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        // Update successful
        console.log("berhasil update");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 44,
          flexDirection: "row",
          marginTop: 55,
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginRight: 40,
          }}
        >
          My Account
        </Text>
        <View
          style={{
            width: "30%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="bell"
            size={26}
            style={{ color: "#231F20" }}
          />
          <MaterialCommunityIcons
            name="message-processing"
            size={26}
            style={{ color: "#231F20" }}
          />
          <Ionicons name="settings" size={26} style={{ color: "#231F20" }} />
        </View>
      </View>
      <Gap height={5} />
      <View style={styles.title}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "600", color: "#222B45" }}>
            {displayName}
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 16 }}>Silver Member</Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.66,
          backgroundColor: "#ffffff",
          flexDirection: "column",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            padding: 8,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              width: "45%",
              height: 85,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "45%",
                height: "90%",
                borderWidth: 1,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: "90%", height: "90%", left: 3 }}
                source={require("../../Assets/Images/picture.png")}
              />
            </View>
            <View
              style={{
                paddingLeft: 8,
                justifyContent: "center",
              }}
            >
              <Text style={{ marginBottom: 5, fontSize: 12 }}>Follower: 4</Text>
              <Text style={{ fontSize: 12 }}>Following: 31</Text>
            </View>
          </View>
          <View
            style={{
              height: 85,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Kupon Saya
              </Text>
              <Text style={{ fontSize: 14 }}>9 Kupon Baru</Text>
            </View>
          </View>
          <View
            style={{
              height: 85,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                paddingLeft: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{ marginBottom: 5, fontSize: 12 }}>
                Top Up Saldo:
              </Text>
              <Text style={{ fontSize: 14 }}>Rp. 1.055.000</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 60,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 1,
            borderTopColor: "#EDF1F7",
          }}
        >
          <TouchableOpacity
            style={{
              width: "50%",
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 3,
              borderBottomColor: Click === "Akun Pembeli" ? "red" : "#EDF1F7",
            }}
            onPress={() => {
              setClick("Akun Pembeli");
            }}
          >
            <Text style={{ fontSize: 15 }}>Akun Pembeli</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "50%",
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 3,
              borderBottomColor: Click === "Akun Toko" ? "red" : "#EDF1F7",
            }}
            onPress={() => {
              setClick("Akun Toko");
            }}
          >
            <Text style={{ fontSize: 15 }}>Akun Toko</Text>
          </TouchableOpacity>
        </View>
      </View>

      {Click === "Akun Pembeli" ? (
        <View>
          <View style={styles.title}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Transaksi
              </Text>
            </View>

            <TouchableOpacity style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 16 }}>
                Lihat Riwayat Transaksi {">"}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#ffffff",
              flexDirection: "column",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                height: 67,
                borderTopWidth: 1,
                borderTopColor: "#EDF1F7",
                paddingHorizontal: 15,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 15, color: "#222B45", paddingTop: 15 }}>
                Menunggu Pembayaran
              </Text>
              <Gap height={10} />
              <Text style={{ fontSize: 15, paddingBottom: 5 }}>
                Semua transaksi yang belum dibayar
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: 80,
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
                paddingLeft: 3,
              }}
            >
              {IconTransaksi.map((item) => {
                return (
                  <CardTransaksi
                    key={item.id}
                    titleTransaksi={item.titleTransaksi}
                    source={item.icon}
                  />
                );
              })}
            </View>
            <View
              style={{
                height: 80,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderTopWidth: 1,
                borderTopColor: "#EDF1F7",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 70,
                  borderTopWidth: 1,
                  borderTopColor: "#EDF1F7",
                  paddingHorizontal: 15,
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 15, color: "#222B45", paddingTop: 5 }}>
                  Komplain sebagai pembeli
                </Text>
                <Text style={{ fontSize: 15, paddingVertical: 5 }}>
                  Lihat status komplain
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <>
          <View style={styles.title}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Favorite Saya
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#ffffff",
              flexDirection: "column",
              borderRadius: 10,
              paddingHorizontal: 5,
            }}
          >
            <View
              style={{
                width: "100%",
                height: 60,
                borderTopWidth: 1,
                borderTopColor: "#EDF1F7",
                paddingHorizontal: 15,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 15, color: "#222B45" }}>
                Terakhir dilihat
              </Text>
              <Text style={styles.txt}>Cek produk terakhir yang dilihat</Text>
            </View>

            <View
              style={{
                width: "100%",
                height: 60,
                borderTopWidth: 1,
                borderTopColor: "#EDF1F7",
                paddingHorizontal: 15,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 15, color: "#222B45" }}>Wishlist</Text>
              <Text style={styles.txt}>Cek produk yang anda wishlist</Text>
            </View>
            <View
              style={{
                width: "100%",
                height: 60,
                borderTopWidth: 1,
                borderTopColor: "#EDF1F7",
                paddingHorizontal: 15,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 15, color: "#222B45" }}>
                Toko Favorit
              </Text>
              <Text style={styles.txt}>Lihat toko yang anda ikuti</Text>
            </View>
            <View
              style={{
                width: "100%",
                height: 60,
                borderTopWidth: 1,
                borderTopColor: "#EDF1F7",
                paddingHorizontal: 15,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 15, color: "#222B45" }}>Langganan</Text>
              <Text style={styles.txt}>Lihat toko yang anda ikuti</Text>
            </View>
          </View>
        </>
      )}
      <Gap height={20} />
      <View style={{ paddingHorizontal: 20 }}>
        <ButtonCustoms
          title="Sign Out"
          type="withColor"
          onPress={() => {
            SignOut();
          }}
        />
      </View>
      <Gap height={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },

  title: {
    width: "100%",
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapCategeriIcon: {
    width: "65%",
    height: 60,
    backgroundColor: "#F4F4F4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  images: {
    width: 30,
    height: 40,
  },
  txt: { fontSize: 15, color: "#828282" },
});
