import React from "react";
import { FlatList } from "react-native";

import { Header } from "../../components/Header";
import { ContactItem } from "../../components/ContactItem";
import { Input } from "../../components/Input";
import { contacts } from "./mock";

import AddSvg from "../../assets/add.svg";

import * as S from "./styles";

export const Contacts = () => {
  return (
    <S.Container>
      <Header title="Contacts">
        <AddSvg />
      </Header>

      <S.Content>
        <Input placeholder="Search" />
      </S.Content>

      <FlatList
        data={contacts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ContactItem name={item.name} status={item.status} />}
      />
    </S.Container>
  );
};
