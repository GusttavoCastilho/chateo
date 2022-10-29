import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";

import * as S from "./styles";

export const GoBack = ({ ...props }: TouchableOpacityProps) => {
  const theme = useTheme();
  return (
    <S.Container {...props}>
      <Ionicons name="chevron-back-sharp" size={26} color={theme.active} />
    </S.Container>
  );
};
