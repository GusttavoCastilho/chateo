import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type ChatItemProps = {
  name: string;
  message: string;
} & TouchableOpacityProps;

export const ChatItem = ({ name, message, ...props }: ChatItemProps) => {
  return (
    <S.Container {...props}>
      <S.Avatar>
        <S.TextAvatar>RD</S.TextAvatar>
      </S.Avatar>

      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Message>{message}</S.Message>
      </S.Content>

      <S.WrapperTag>
        <S.TextDate>Today</S.TextDate>
        <S.Tag>
          <S.TextNumber>1</S.TextNumber>
        </S.Tag>
      </S.WrapperTag>
    </S.Container>
  );
};
