import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import apiProvider from '../api/apiProvider';

export const useAuth = () => {
  const [loggedUser, setloggedUser] = useState();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '239998931541-g19klat9tkuthil5d4jd22fvllcljp5q.apps.googleusercontent.com',
    });
  }, []);

  const getUserData = async () => {
    const { user } = await GoogleSignin.getCurrentUser();

    const formattedUserData = {
      userId: user.id,
      name: user.givenName,
      lastName: user.familyName,
      email: user.email,
    };

    const pageUserDate = {
      ...formattedUserData,
      profileImage: user.photo,
    };

    apiProvider().login({
      userData: formattedUserData,
      onSuccess: () => {
        AsyncStorage.setItem('loggedUser', JSON.stringify(pageUserDate));
        setloggedUser(pageUserDate);
      },
      onFailure: () => setloggedUser(null),
    });
  };

  const checkUserIsAuth = async () => {
    setIsCheckingAuth(true);
    try {
      await auth().onAuthStateChanged((user) => {
        if (user) {
          getUserData();
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
      await auth().signInWithCredential(googleCredential);

      getUserData();
    } catch (error) {
      console.log('login error: ', error);
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
      await GoogleSignin.revokeAccess();
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
