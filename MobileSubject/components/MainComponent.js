// redux
import { connect } from 'react-redux';
import { fetchLeaders, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
// const mapStateToProps = state => {
//   return {
//     leaders: state.leaders
//   }
// };

const mapDispatchToProps = dispatch => ({
  fetchLeaders: () => dispatch(fetchLeaders()),
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, Image  } from 'react-native-elements';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Linking } from 'react-native';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import AboutUs from './AboutUsComponent';
import ContactUs from './ContactUsComponent'
import Dishdetail from './DishdetailComponent';
import Reservation from './ReservationComponent'
import Input from './InputComponent'

import { baseUrl } from '../shared/baseUrl';

const MainNavigator = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: '#7cc', height: 80, alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: baseUrl + 'images/logo.png' }} style={{ margin: 10, width: 80, height: 60 }} />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>Nhật Thiện</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Help'
        icon={({ focused, color, size }) => <Icon name='help' size={size} color={focused ? '#7cc' : '#ccc'} />}
        onPress={() => Linking.openURL('https://reactnavigation.org/docs/getting-started')} />
    </DrawerContentScrollView>
  );
}

function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator initialRouteName='Home' drawerContent={props => <CustomDrawerContent {...props} />}>
      
      <MainNavigator.Screen name='Home' component={HomeNavigatorScreen}
      //Thêm icon---
              options={{
                title: 'Home',
                drawerIcon: ({ focused, size }) => (<Icon name='home' size={size} color={focused ? '#7cc' : '#ccc'} />)
              }}
      //----
      />
      <MainNavigator.Screen name='Menu' component={MenuNavigatorScreen} 
              options={{
                title: 'Menu',
                drawerIcon: ({ focused, size }) => (<Icon name='menu' size={size} color={focused ? '#7cc' : '#ccc'} />)
              }}
      />
      <MainNavigator.Screen name='AboutUs' component={AboutUsNavigatorScreen} options={{title: 'About Us'}} 
              options={{
                title: 'About Us',
                drawerIcon: ({ focused, size }) => (<Icon name='info' size={size} color={focused ? '#7cc' : '#ccc'} />)
              }}
      />
      <MainNavigator.Screen name='ContactUs' component={ContactUsNavigatorScreen} options={{title: 'Contact Us'}} 
              options={{
                title: 'Contact Us',
                drawerIcon: ({ focused, size }) => (<Icon name='contacts' size={size} color={focused ? '#7cc' : '#ccc'} />)
              }}
      />
      <MainNavigator.Screen name='Reservation' component={ReservationNavigatorScreen}
        options={{
          title: 'Reserve Table',
          drawerIcon: ({ focused, size }) => (<Icon name='cutlery' type='font-awesome' size={size} color={focused ? '#7cc' : '#ccc'} />)
        }} />
      <MainNavigator.Screen name='Input' component={InputNavigatorScreen}
        options={{
          title: 'Input',
          drawerIcon: ({ focused, size }) => (<Icon name='cutlery' type='font-awesome' size={size} color={focused ? '#7cc' : '#ccc'} />)
        }} />
    </MainNavigator.Navigator>
  );
}

const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#9999FF' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <HomeNavigator.Screen name='Home' component={Home} 
      options={({ navigation }) => ({
        headerTitle: 'Home',
        headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
      })}
      />
    </HomeNavigator.Navigator>
  );
}

const MenuNavigator = createStackNavigator();
function MenuNavigatorScreen() {
  return (
    <MenuNavigator.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <MenuNavigator.Screen name='Menu' component={Menu} 
            options={({ navigation }) => ({
              headerTitle: 'Menu',
              headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
            })}
            />
      <MenuNavigator.Screen name='Dishdetail' component={Dishdetail} options={{ headerTitle: 'Dish Detail' }} />
    </MenuNavigator.Navigator>
  );
}

const AboutUsNavigator = createStackNavigator();
function AboutUsNavigatorScreen() {
  return (
    <AboutUsNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <AboutUsNavigator.Screen name='AboutUs' component={AboutUs} 
      //----icon menu---
            options={({ navigation }) => ({
              headerTitle: 'About Us',
              headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
            })}
      //------------------
      />
    </AboutUsNavigator.Navigator>
  );
}

const ContactUSNavigator = createStackNavigator();
function ContactUsNavigatorScreen() {
  return (
    <ContactUSNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <ContactUSNavigator.Screen name='ContactUs' component={ContactUs} 
            options={({ navigation }) => ({
              headerTitle: 'Contact Us',
              headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
            })}
      />
    </ContactUSNavigator.Navigator>
  );
}

const ReservationNavigator = createStackNavigator();
function ReservationNavigatorScreen() {
  return (
    <ReservationNavigator.Navigator initialRouteName='Reservation'
      screenOptions={{
        headerStyle: { backgroundColor: '#7cc' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <ReservationNavigator.Screen name='Reservation' component={Reservation}
        options={({ navigation }) => ({
          headerTitle: 'Reserve Table',
          headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
        })} />
    </ReservationNavigator.Navigator>
  );
}

const InputNavigator = createStackNavigator();
function InputNavigatorScreen() {
  return (
    <InputNavigator.Navigator initialRouteName='input'
      screenOptions={{
        headerStyle: { backgroundColor: '#7cc' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <InputNavigator.Screen name='input' component={Input}
        options={({ navigation }) => ({
          headerTitle: 'input',
          headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
        })} />
    </InputNavigator.Navigator>
  );
}

class Main extends Component {

  componentDidMount() {
    // redux
    this.props.fetchLeaders();
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}
export default connect(null, mapDispatchToProps)(Main);