import { TouchableOpacity, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  icon?: React.ReactNode;
  title?: string;
  onClick?: () => void;
  bgColor: string;
}

const Button = ({icon, title, onClick, bgColor}: ButtonProps) => {

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      height: 6,
      backgroundColor: bgColor,
      borderRadius: 100,
      // width: 'fit'
   }
  });

  return (
    <TouchableOpacity style={styles.button} onPress = {() => onClick() }>
      {icon}
      <Text>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
