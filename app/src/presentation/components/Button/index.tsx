import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

export type ButtonProps = {
  title: string;
  type?: 'primary' | 'secondary' | 'ghost';
} & TouchableOpacityProps;

export const Button = ({ title, type = 'primary', disabled = false, ...props }: ButtonProps) => {
  return (
    <S.Container type={type} disabled={disabled} {...props}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
