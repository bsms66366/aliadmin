// Home.js, just a name of the stack navigation

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Feed from "../screens/Feed";
import Profile from "../screens/Profile";


const Home = createStackNavigator(
    {
        Profile: Profile,
        Feed: Feed,
    },
    {
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
        },
    }
);

const container = createAppContainer(Home);

export default container;