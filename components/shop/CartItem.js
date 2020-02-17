import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const CartItem = props => {
  return (
    <View style={styles.CartItem}>
      <View style={styles.itemData}>
        <Text tyle={styles.quantity}>{props.quantity} </Text>
        <Text tyle={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
        {props.deletable && (
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}
          >
            <Ionicons name="md-trash" size={23} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 20
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center"
  },
  quantity: {
    fontFamily: "lato",
    color: "#888",
    fontSize: 16
  },
  mainText: {
    fontFamily: "lato-bold",
    fontSize: 16
  },

  deleteButton: {
    marginLeft: 20
  }
});
export default CartItem;
