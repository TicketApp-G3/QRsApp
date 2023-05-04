import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './src/navigation/AppStackNavigator';
import { AuthProvider } from './src/contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
