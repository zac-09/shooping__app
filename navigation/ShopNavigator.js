import React from "react";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import UserProductsScreen from "../screens/user/UserProductsScreen";
import EditProductScreen from "../screens/user/EditProductScreen";

const ProductNavigator = createStackNavigator();
function myProducts() {
  return (
    <ProductNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary
        },
        headerTitleStyle: {
          fontFamily: "lato-bold"
        },
        headerTintColor: "white"
      }}
    >
      <ProductNavigator.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
      />
      <ProductNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
      />
      <ProductNavigator.Screen name="Cart" component={CartScreen} />
    </ProductNavigator.Navigator>
  );
}
const ShopNavigator = createDrawerNavigator();

const OrdersNavigator = createStackNavigator();
function myOrders() {
  return (
    <OrdersNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary
        },
        headerTitleStyle: {
          fontFamily: "lato-bold"
        },
        headerTintColor: "white"
      }}
    >
      <OrdersNavigator.Screen name="Orders" component={OrdersScreen} />
    </OrdersNavigator.Navigator>
  );
}
const Admin = createStackNavigator();
function AdminNavigator() {
  return (
    <Admin.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary
        },
        headerTitleStyle: {
          fontFamily: "lato-bold"
        },
        headerTintColor: "white"
      }}
    >
      <Admin.Screen name="products" component={UserProductsScreen} />
      <Admin.Screen name="editScreen" component={EditProductScreen} />
    </Admin.Navigator>
  );
}
export const MainNavigator = () => {
  return (
    <ShopNavigator.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.primary,
        labelStyle: {
          fontFamily: "lato-bold"
        }
      }}
    >
      <ShopNavigator.Screen
        name="products"
        component={myProducts}
        options={{
          activeTintColor: Colors.primary,
          drawerIcon: DrawerNavigatorConfig => (
            <Ionicons
              name="md-cart"
              size={23}
              color={DrawerNavigatorConfig.tintColor}
            />
          )
        }}
      />
      <ShopNavigator.Screen
        name="order"
        component={myOrders}
        options={{
          drawerIcon: DrawerNavigatorConfig => (
            <Ionicons
              name="md-list"
              size={23}
              color={DrawerNavigatorConfig.tintColor}
            />
          )
        }}
      />
      <ShopNavigator.Screen
        name="admin"
        component={AdminNavigator}
        options={{
          drawerIcon: DrawerNavigatorConfig => (
            <Ionicons
              name="md-list"
              size={23}
              color={DrawerNavigatorConfig.tintColor}
            />
          )
        }}
      />
    </ShopNavigator.Navigator>
  );
};
