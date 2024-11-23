import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Explore');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/nasdaq-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.developerName}>Developed by Ibrahim Salem </Text>
    </View>
  );
};
