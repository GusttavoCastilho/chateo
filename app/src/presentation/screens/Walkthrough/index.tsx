import React from "react";
import { useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";

import * as S from "./styles";

import IllustrationLight from "../../assets/illustration.svg";
import IllustrationDark from "../../assets/illustration-dark.svg";

export const Walkthrough = () => {
  const scheme = useColorScheme();
  const navigation = useNavigation()
  return (
    <S.Container>
      <S.Header>
        {scheme === "light" ? <IllustrationLight /> : <IllustrationDark />}
        <S.Title>
          Connect easily with {"\n"}your family and friends {"\n"}over countries
        </S.Title>
      </S.Header>

      <S.WrapperButtons>
        <Button type="ghost" title="Terms & Privacy Policy" />
        <Button title="Start Messaging" onPress={() => navigation.navigate('Verification')} />
      </S.WrapperButtons>
    </S.Container>
  );
};
