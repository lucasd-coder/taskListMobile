import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';


interface ToggleProps extends TouchableOpacityProps {
   text: string;

}

export function Toggle({ text,...rest}: ToggleProps) {
    return (
        <TouchableOpacity {...rest}>
         <Text>{text}</Text> 
        </TouchableOpacity>
    );
}

