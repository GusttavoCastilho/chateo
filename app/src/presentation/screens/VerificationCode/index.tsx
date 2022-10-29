import React from "react";
import { Platform } from 'react-native'
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { GoBack } from "../../components/GoBack";

import * as S from "./styles";
import { Button } from "../../components/Button";

type RouteProps = {
  params: {
    country: number;
    phone: number;
  };
};

export const VerificationCode = () => {
  const { params } = useRoute<RouteProp<RouteProps, "params">>();
  const navigation = useNavigation()
  return (
    <S.Container>
      <GoBack />

      <S.Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <S.Content>
          <S.Title>Enter Code</S.Title>

          <S.Description>
            {`We have sent you an SMS with the code\n to +${params?.country} ${params?.phone}`}
          </S.Description>

          <S.WrapperInput>
            <S.CircleInput />
          </S.WrapperInput>
        </S.Content>

        <Button title="Resend Code" type="ghost" onPress={() => navigation.navigate('Profile')} />
      </S.Keyboard>
    </S.Container>
  );
};
