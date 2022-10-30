import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import * as S from "./styles";

type MoreItemProps = {
  icon: string;
  title: string;
};

export const MoreItem = ({ icon, title }: MoreItemProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.WrapperIcon>
          <Ionicons name={icon} size={24} color="#F7F7FC" />
        </S.WrapperIcon>
        <S.Title>{title}</S.Title>
      </S.Content>

      <MaterialIcons name="keyboard-arrow-right" size={24} color="#F7F7FC" />
    </S.Container>
  );
};
