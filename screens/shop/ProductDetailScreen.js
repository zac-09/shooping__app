import React from "react";
import * as CartActions from "../../store/actions/cart";

import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet
} from "react-native";
import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
const ProductDetailScreen = props => {
  const productId = props.route.params.productId;

  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );
  const dispatch = useDispatch();
  props.navigation.setOptions({
    title: selectedProduct.title
  });
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.action}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(CartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "nunito-bold"
  },
  description: {
    fontFamily: "lato",

    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20
  },
  action: {
    marginVertical: 10,
    alignItems: "center"
  }
});
export default ProductDetailScreen;
