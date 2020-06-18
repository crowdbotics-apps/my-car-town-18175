import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile67828Navigator from '../features/UserProfile67828/navigator';
import Tutorial67827Navigator from '../features/Tutorial67827/navigator';
import NotificationList67799Navigator from '../features/NotificationList67799/navigator';
import Settings67798Navigator from '../features/Settings67798/navigator';
import Settings67790Navigator from '../features/Settings67790/navigator';
import UserProfile67788Navigator from '../features/UserProfile67788/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile67828: { screen: UserProfile67828Navigator },
Tutorial67827: { screen: Tutorial67827Navigator },
NotificationList67799: { screen: NotificationList67799Navigator },
Settings67798: { screen: Settings67798Navigator },
Settings67790: { screen: Settings67790Navigator },
UserProfile67788: { screen: UserProfile67788Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
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
