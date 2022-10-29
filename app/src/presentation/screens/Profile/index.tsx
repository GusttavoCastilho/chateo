import React from "react";
import { Platform } from "react-native";

import { GoBack } from "../../components/GoBack";

import AvatarSvg from "../../assets/avatar.svg";
import ChangeAvatarSvg from "../../assets/change.svg";

import * as S from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Profile = () => {
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
          <Button title="Save" />
        </S.WrapperButton>
      </S.Keyboard>
    </S.Container>
  );
};
