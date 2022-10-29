import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

export type ButtonProps = {
  title: string;
  type?: 'primary' | 'secondary' | 'ghost'
} & TouchableOpacityProps;

export const Button = ({ title, type = 'primary', ...props }: ButtonProps) => {
  return (
    <S.Container type={type} {...props}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
