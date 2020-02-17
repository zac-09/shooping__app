import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/UI/HeaderButton";
import OrderItem from "../../components/shop/OrderItem";
const OrdersScreen = props => {
  const orders = useSelector(state => state.orders.orders);
  props.navigation.setOptions({
    title: "Orders",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="md-menu"
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  });
  return (
    <FlatList
      renderItem={itemData => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readbleDate}
          items={itemData.item.items}
        />
      )}
      data={orders}
    />
  );
};

export default OrdersScreen;
