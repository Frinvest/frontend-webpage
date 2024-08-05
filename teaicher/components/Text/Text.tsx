import { Text as RNText} from '@rneui/themed';
import { StyleSheet } from "react-native";
import type { StyleProp, TextStyle } from "react-native";
interface TextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    size?: "small" | "medium" | "large";
    weight?: "semibold" | "bold" | "regular";
    font?: "generic";
    color?: string;

  }
  export const Text = ({
    children,
    style,
    weight = "regular",
    size = "medium",
    font = "generic",
    color,
  }: TextProps) => {
    return (
      <RNText style={[style, styles[weight], styles[font],styles[size], { color: color }]}>
        {children}
      </RNText>
    );
  };


const styles = StyleSheet.create({
    generic:{
        fontFamily: 'Avenir-Medium',
    },
    small: {
      fontSize: 15,
    },
    medium: {
      fontSize: 20,
    },
    large: {
      fontSize: 35,
    },
    semibold: {
      fontWeight: "600",
    },
    bold: {
      fontWeight: "700",
    },
    regular: {
      fontWeight: "400",
    },
  });