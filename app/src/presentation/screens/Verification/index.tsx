import React from "react";
import { Platform } from "react-native";
import { Button } from "../../components/Button";
import { GoBack } from "../../components/GoBack";
import * as S from "./styles";

import Flag from "../../assets/flag.svg";

export const Verification = () => {
  return (
    <S.Container>
      <GoBack />
      <S.Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <S.Content>
          <S.Title>Enter Your Phone Number</S.Title>
          <S.Description>
            Please confirm your country code and enter your phone number
          </S.Description>

          <S.WrapperInput>
            <S.Country>
              <Flag />
              <S.TextCountry>+62</S.TextCountry>
            </S.Country>

            <S.InputNumber />
          </S.WrapperInput>
        </S.Content>

        <S.WrapperButton>
          <Button title="Continue" />
        </S.WrapperButton>
      </S.Keyboard>
    </S.Container>
  );
};
