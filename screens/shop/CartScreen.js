import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../../components/shop/CartItem";
import * as CartActions from "../../store/actions/cart";
import * as ordersActions from "../../store/actions/order";
import Card from "../../components/UI/Card";
import Colors from "../../constants/Colors";
const CartScreen = props => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const CardItems = useSelector(state => {
    const transformedCardItems = [];
    for (const key in state.cart.items) {
      transformedCardItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }
    return transformedCardItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });
  const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>{cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.accent}
          title="OrderNow"
          disabled={CardItems.length === 0}
          onPress={() => {
            dispatch(ordersActions.addOrder(CardItems, cartTotalAmount));
          }}
        />
      </Card>
      <View>
        <FlatList
          data={CardItems}
          keyExtractor={item => item.productId}
          renderItem={itemData => (
            <CardItem
              deletable
              quantity={itemData.item.quantity}
              title={itemData.item.productTitle}
              amount={itemData.item.sum}
              onRemove={() => {
                dispatch(CartActions.removeFromCart(itemData.item.productId));
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18
  },
  amount: {
    color: Colors.primary
  }
});

export default CartScreen;
