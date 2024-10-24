import { View, Text, StyleSheet } from 'react-native';
import TypoStyles from "../constants/Typo";
import { Colors } from "@/constants/Colors";
import { Trash, RefreshCw, Coins } from 'lucide-react-native';
import Button from './Button';
import Toast from 'react-native-toast-message';
interface ItemContainerProps {
  name: string;
  type: string;
  price: number;
  quantity: number
}

const ItemContainer = ({ name, type, price, quantity } : ItemContainerProps ) => {

  return (
   <View style={[styles.container, Colors.cardLight]}>

      <View style={styles.horizontalContainer}>
        <Text style={TypoStyles.bold}>
           name: {name}
        </Text>

        <View style = {styles.buttonsContainer}>
          {/* TODO: make buttons with just the icons. */}
           
          <Button
            icon = {<Trash color = {'#fff'} size = {16} />}
            bgColor = {'#c1121f'}
            onClick = { () => Toast.show({ type: 'success', text1: 'text' }) }
          />
          <Button
            icon = {<RefreshCw color = {'#fff'} size = {16} />}
            bgColor = {'#00b4df'}
          />
          <Button
            icon = {<Coins color = {'#fff'} size = {16} />}
            bgColor = {"#bc6c25"}
          />
        </View>
      </View>

      <Text style={TypoStyles.bold}>
        name: {name}
      </Text>

      <Text style={TypoStyles.bold}>
        type: {type}
      </Text>

      <Text>
        price per unit: {price} Birr
      </Text>

      <Text>
        quantity: {quantity}
      </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 8,
    padding: 8,
    gap: 4,
    borderRadius: 8
  },
  
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


  buttonsContainer: {
    flex: 1,
    gap: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }

 
});

export default ItemContainer;
