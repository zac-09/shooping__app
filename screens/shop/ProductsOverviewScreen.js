import React from "react";
import Colors from "../../constants/Colors";

import { FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import * as CartActions from "../../store/actions/cart";
const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();
  const selectItemHandler = (id, title) => {
    props.navigation.navigate({
      name: "ProductDetail",
      params: {
        productId: id
      }
    });
  };
  props.navigation.setOptions({
    title: "All Products",
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Cart"
          iconName="md-cart"
          onPress={() => {
            props.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    )
  });
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            selectItemHandler(itemData.item.id, itemData.item.title);
          }}
        >
          <Button
            title="View Details"
            color={Colors.primary}
            onPress={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          />
          <Button
            title="to cart"
            color={Colors.primary}
            onPress={() => {
              dispatch(CartActions.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductsOverviewScreen;
