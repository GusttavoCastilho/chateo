import React, { useState } from "react";
import { Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { GoBack } from "../../components/GoBack";

import * as S from "./styles";

import Flag from "../../assets/flag.svg";

export const Verification = () => {
  const [phone, setPhone] = useState({
    country: 0,
    phone: 0,
  });
  const navigation = useNavigation();
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

            <S.InputNumber
              onChangeText={(value) => setPhone({ country: 62, phone: value })}
            />
          </S.WrapperInput>
        </S.Content>

        <S.WrapperButton>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("VerificationCode", phone)}
          />
        </S.WrapperButton>
      </S.Keyboard>
    </S.Container>
  );
};
