import React from "react";
import { Platform } from "react-native";

import { GoBack } from "../../components/GoBack";

import AvatarSvg from "../../assets/avatar.svg";
import ChangeAvatarSvg from "../../assets/change.svg";

import * as S from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export const Profile = () => {
  const navigation = useNavigation();
  return (
    <S.Container>
      <GoBack title="Your Profile" />

      <S.Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <S.Content>
          <S.Avatar>
            <AvatarSvg />
            <S.ChangeAvatar>
              <ChangeAvatarSvg />
            </S.ChangeAvatar>
          </S.Avatar>

          <S.WrapperInput>
            <Input placeholder="First Name (Required)" />
            <Input placeholder="Last Name (Optional)" />
          </S.WrapperInput>
        </S.Content>
        <S.WrapperButton>
          <Button title="Save" onPress={() => navigation.navigate('Contact')} />
        </S.WrapperButton>
      </S.Keyboard>
    </S.Container>
  );
};
