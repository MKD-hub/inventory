import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import ItemContainer from "../../components/ItemContainer"
import TypoStyles from "../../constants/Typo.ts" 

const HomeScreen = () => {
  return (
    <View style={styles.titleContainer}>
      <ItemContainer 
        name = {"NOC"}
        type = {"22wL"}
        price = {30}
        quantity = {300}
      />
    </View>
 );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    margin: 'auto' 
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  customText: {
    color: '#fff',
    alignSelf: 'center',
    justifySelf: 'center'
  },
});

export default HomeScreen;
