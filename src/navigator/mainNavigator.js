import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile37583Navigator from '../features/UserProfile37583/navigator';
import UserProfile47582Navigator from '../features/UserProfile47582/navigator';
import UserProfile57581Navigator from '../features/UserProfile57581/navigator';
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
UserProfile37583: { screen: UserProfile37583Navigator },
UserProfile47582: { screen: UserProfile47582Navigator },
UserProfile57581: { screen: UserProfile57581Navigator },
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
