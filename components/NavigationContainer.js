const linking = {
    prefixes: ['https://mychat.com', 'mychat://'],
    config: {
      screens: {
        Home: '',
        Profile: ':id/profile',
        Settings: ':id/blog',
      }
    },
  };
  
  function App() {
    return (
      <NavigationContainer linking={linking} fallback={<SplashScreen />}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }