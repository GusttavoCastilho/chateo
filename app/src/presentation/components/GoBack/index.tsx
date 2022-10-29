import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";

import * as S from "./styles";

type GoBackProps = {
  title?: string
} & TouchableOpacityProps

export const GoBack = ({ title, ...props }: GoBackProps) => {
  const theme = useTheme();
  return (
    <S.Container {...props}>
      <Ionicons name="chevron-back-sharp" size={26} color={theme.active} />
      {!!title && <S.Title>{title}</S.Title>}
    </S.Container>
  );
};
