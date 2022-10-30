import React from "react";
import { FlatList } from "react-native";
import { Header } from "../../components/Header";

import MessageSvg from "../../assets/message.svg";
import ListCheckSvg from "../../assets/list-check.svg";
import * as S from "./styles";
import { stories, chats } from "./mock";
import { StoryItem } from "../../components/StoryItem";
import { Input } from "../../components/Input";
import { ChatItem } from "../../components/ChatItem";

export const Chats = () => {
  return (
    <S.Container>
      <Header title="Chats">
        <S.WrapperIcon>
          <S.WrapperMessageIcon>
            <MessageSvg />
          </S.WrapperMessageIcon>
          <ListCheckSvg />
        </S.WrapperIcon>
      </Header>

      <S.Content>
        <FlatList
          data={stories}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <StoryItem name={item.name} />}
          horizontal
        />

        <S.Divider />

        <S.WrapperInput>
          <Input placeholder="Search" />
        </S.WrapperInput>

        <FlatList
          data={chats}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ChatItem name={item.name} message={item.message} />
          )}
        />
      </S.Content>
    </S.Container>
  );
};
