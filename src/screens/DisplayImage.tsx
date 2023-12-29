import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Removed unnecessary import of createNativeStackNavigator

interface AppButtonProps {
  onPress: () => void;
  title: string;
}

const AppButton: React.FC<AppButtonProps> = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

interface DisplayImageProps {
  source: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
}

const DisplayImage: React.FC<DisplayImageProps> = ({source, style}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.imageContainer, style]}>
      <Image source={source} style={styles.image} />
      <View style={styles.spacer} />
      <AppButton
        title="Hey there!"
        onPress={() => navigation.navigate('Home' as never)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 100,
    marginTop: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  spacer: {
    height: 50,
  },
});

export default DisplayImage;
