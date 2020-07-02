import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile37580Navigator from '../features/UserProfile37580/navigator';
import UserProfile47579Navigator from '../features/UserProfile47579/navigator';
import UserProfile57578Navigator from '../features/UserProfile57578/navigator';
import UserProfile67577Navigator from '../features/UserProfile67577/navigator';
import EmailAuth57575Navigator from '../features/EmailAuth57575/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile37580: { screen: UserProfile37580Navigator },
UserProfile47579: { screen: UserProfile47579Navigator },
UserProfile57578: { screen: UserProfile57578Navigator },
UserProfile67577: { screen: UserProfile67577Navigator },
EmailAuth57575: { screen: EmailAuth57575Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
