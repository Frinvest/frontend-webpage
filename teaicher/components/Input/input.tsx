import { IconNode } from '@rneui/base';
import { Input as RNInput} from '@rneui/themed';
import { StyleSheet } from "react-native";
import type { StyleProp, TextStyle, ViewStyle} from "react-native";
interface InputProps {
    children: React.ReactNode;
    inputStyle?: StyleProp<TextStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    inputSize?: "small" | "medium" | "large";
    containerStyle?: StyleProp<ViewStyle>;
    inputWeight?: "semibold" | "bold" | "regular";
    inputFont?: "generic";
    placeHolder?: string;
    inputColor?: string;
    secureTextEntry?: boolean;
    value: string;
    handleChange: (text: string, id: string) => void;
    id: string;
    leftIcon?: IconNode | undefined; 
  }
  export const Input = ({
    placeHolder,
    children,
    containerStyle,
    inputContainerStyle,
    inputStyle,
    inputWeight = "regular",
    inputSize = "medium",
    inputFont = "generic",
    inputColor,
    secureTextEntry,
    value,
    id,
    leftIcon,
    handleChange,
  }: InputProps) => {
    return (
        <RNInput
        inputContainerStyle={inputContainerStyle}
        containerStyle={containerStyle}
        placeholder={placeHolder}
        leftIcon = {leftIcon}
        inputStyle={[inputStyle, styles[inputWeight], styles[inputSize], styles[inputFont], { color: inputColor }]}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => handleChange(text, id)}
      >
        {children}
      </RNInput>
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