import * as React from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const cardsData = [
  {
    id: 1,
    name: 'Card 1',
    image: require('../images/diamond.png'),
  },
  {
    id: 2,
    name: 'Card 2',
    image: require('../images/cherry.png'),
  },
];

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

const Card = ({item}: any) => (
  <View style={styles.card}>
    <Image source={item.image} style={styles.cardImage} />
    <Text style={styles.cardName}>{item.name}</Text>
  </View>
);

const FirstRoute = () => (
  <View style={{flex: 1}}>
    <FlatList
      data={cardsData}
      renderItem={({item}) => <Card item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#FFFFFF'}} />
);

const ThirdRoute = () => <View style={{flex: 1, backgroundColor: '#FFFFFF'}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Easy'},
    {key: 'second', title: 'Medium'},
    {key: 'third', title: 'Hard'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
