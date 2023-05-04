import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const useAuth = () => {
  const [loggedUser, setloggedUser] = useState();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  GoogleSignin.configure({
    webClientId:
      '239998931541-g19klat9tkuthil5d4jd22fvllcljp5q.apps.googleusercontent.com',
  });

  const checkUserIsAuth = async () => {
    setIsCheckingAuth(true);
    try {
      await auth().onAuthStateChanged((user) => {
        if (user) {
          setloggedUser(user);
          setIsCheckingAuth(false);
        } else {
          setloggedUser(null);
          setIsCheckingAuth(false);
        }
      });
    } catch (error) {
      console.log('checkUserIsAuth: ', error);
    }
  };

  const login = async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const { user } = await auth().signInWithCredential(googleCredential);

      AsyncStorage.setItem('loggedUser', JSON.stringify(user));
      setloggedUser(user);
    } catch (error) {
      console.log('login error: ', error);
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
      AsyncStorage.removeItem('loggedUser');
      setloggedUser(null);
    } catch (error) {
      console.log('logout error: ', error);
    }
  };

  useEffect(() => {
    checkUserIsAuth();
  }, []);

  return { loggedUser, isCheckingAuth, login, logout };
};
