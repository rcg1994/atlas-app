import React, { PureComponent } from 'react'
import { Text, Easing, Animated, BackHandler, Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
  // createAppContainer
} from 'react-navigation'
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import { TabPages, AppPages } from './NavPages'
import Colors from '../Theme/Colors'
import { Iconfont } from '../Resources'

const TabNavigatorConfig = {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      const iconConf = {
        Home: 'atlas',
        Components: 'components'
        // About: 'mine'
      }
      return (
        <Iconfont
          name={iconConf[routeName]}
          color={focused ? tintColor : '#777'}
          size={30}
        />
      )
    },
    tabBarLabel: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      const labelConf = {
        Home: '主页',
        Components: '组件库'
        // About: '状态'
      }
      return (
        <Text
          style={{
            color: focused ? tintColor : '#777',
            fontSize: 10,
            marginBottom: 2,
            textAlign: 'center',
            fontWeight: '200'
          }}
        >
          {labelConf[routeName]}
        </Text>
      )
    }
  }),
  tabBarOptions: {
    activeTintColor: Colors.primary,
    style: {
      backgroundColor: Colors.tabBackground,
      borderTopColor: Colors.borderLight
    }
  },
  animationEnabled: false,
  swipeEnabled: false,
  lazy: false
}

const AppNavigatorConfig = {
  headerMode: 'none',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps
      const { index } = scene
      const width = layout.initWidth
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, -width]
      })
      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1]
      })

      return { opacity, transform: [{ translateX }] }
    }
  })
}

const AppNavigator = createStackNavigator(
  {
    Root: {
      screen: createBottomTabNavigator(TabPages, TabNavigatorConfig)
    },
    ...AppPages
  },
  AppNavigatorConfig
)

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  state => state.router,
  'root'
)

const App = createReduxContainer(AppNavigator, 'root')

// react-redux 7.0.0 中不推荐使用装饰器
// @connect(({ app, router }) => ({ app, router }))
class ReduxNavigation extends PureComponent {
  componentWillMount () {
    if (Platform.OS === 'ios') return
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount () {
    if (Platform.OS === 'ios') return
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const { dispatch, router } = this.props
    // change to whatever is your first screen, otherwise unpredictable results may occur
    if (router.routes.length === 1 && (router.routes[0].routeName === 'Root')) {
      return false
    }
    // if (shouldCloseApp(nav)) return false
    dispatch({ type: 'Navigation/BACK' })
    return true
  }

  render () {
    // const { app, dispatch, router } = this.props
    // if (app.loading) return <Loading />
    const { dispatch, router } = this.props

    return <App dispatch={dispatch} state={router} />
  }
}

const mapStateToProps = ({ router }) => ({
  router
})

export default connect(mapStateToProps)(ReduxNavigation)
