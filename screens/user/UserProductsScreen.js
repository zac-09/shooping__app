import React from "react";
import { FlatList, Button, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as productsActions from "../../store/actions/products";
import ProductItem from "../../components/shop/ProductItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";
const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();
  const editProductHandler = id => {
    props.navigation.navigate({
      name: "editScreen",
      params: {
        productId: id,
        type: "edit"
      }
    });
  };
  props.navigation.setOptions({
    title: "your products",
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
          title="Add"
          iconName="md-create"
          onPress={() => {
            props.navigation.navigate({
              name: "editScreen",
              params: {
                type: "add"
              }
            });
          }}
        />
      </HeaderButtons>
    )
  });
  const deleteHandler = id => {
    Alert.alert("Are you sure?", "Do you really want to delete this item?", [
      { text: "no", style: "default" },
      {
        text: "yes",
        style: "destructive",
        onPress: () => {
          dispatch(productsActions.deleteProduct(id));
        }
      }
    ]);
  };
  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          title={itemData.item.title}
          image={itemData.item.imageUrl}
          price={itemData.item.price}
          onSelect={() => {
            editProductHandler(itemData.item.id);
          }}
        >
          <Button
            title="Edit"
            color={Colors.primary}
            onPress={() => {
              editProductHandler(itemData.item.id);
            }}
          />
          <Button
            title="Delete"
            color={Colors.primary}
            onPress={deleteHandler.bind(this, itemData.item.id)}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProductsScreen;
