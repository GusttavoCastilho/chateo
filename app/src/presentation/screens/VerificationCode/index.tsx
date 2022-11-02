import React, { useState } from "react";
import { Platform } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { GoBack } from "../../components/GoBack";
import { Button } from "../../components/Button";
import { CodeConfirmInput } from "../../components/CodeConfirmInput";
import { Cursor } from "../../components/Cursor";

import * as S from "./styles";

type RouteProps = {
  params: {
    country: number;
    phone: number;
  };
};

export const VerificationCode = () => {
  const [code, setCode] = useState("");
  const { params } = useRoute<RouteProp<RouteProps, "params">>();
  const navigation = useNavigation();
  return (
    <S.Container>
      <GoBack onPress={() => navigation.goBack()} />

      <S.Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <S.Content>
          <S.Title>Enter Code</S.Title>

          <S.Description>
            {`We have sent you an SMS with the code\n to +${params?.country} ${params?.phone}`}
          </S.Description>

          <S.WrapperInput>
            <CodeConfirmInput
              length={4}
              value={code}
              onChangeText={setCode}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderItem={({ index, symbol, isFocused }) => (
                <S.Circle key={index}>
                  <S.TextCode>
                    {symbol || (!!isFocused && <Cursor />)}
                  </S.TextCode>
                </S.Circle>
              )}
            />
          </S.WrapperInput>
        </S.Content>

        <Button
          title="Resend Code"
          type="ghost"
          onPress={() => navigation.navigate("Profile")}
        />
      </S.Keyboard>
    </S.Container>
  );
};
