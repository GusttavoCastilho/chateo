import React from "react";
import { GoBack } from "../../components/GoBack";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Ionicons } from "@expo/vector-icons";

import SendSvg from "../../assets/send.svg";

import * as S from "./styles";
import { Platform } from "react-native";

export const PersonalChat = () => {
  return (
    <S.Container>
      <S.WrapperHeader>
        <GoBack style={{ paddingRight: 0 }} />
        <Header title="Athalia Putri">
          <S.WrapperIcons>
            <Ionicons name="md-search-sharp" size={24} color="#F7F7FC" />
            <Ionicons
              name="menu"
              size={24}
              color="#F7F7FC"
              style={{ marginLeft: 10 }}
            />
          </S.WrapperIcons>
        </Header>
      </S.WrapperHeader>

      <S.Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {/* Content */}
        <S.Content></S.Content>

        {/* Bottom */}
        <S.Bottom>
          <S.WrapperBottom>
            <Ionicons name="add" size={24} color="#ADB5BD" />
            <S.WrapperInput>
              <Input placeholder="Enter a Message" />
            </S.WrapperInput>

            <SendSvg />
          </S.WrapperBottom>
        </S.Bottom>
      </S.Keyboard>
    </S.Container>
  );
};
