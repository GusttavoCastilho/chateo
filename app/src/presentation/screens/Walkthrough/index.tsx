import React from "react";
import { useColorScheme } from "react-native";
import * as S from "./styles";

import IllustrationLight from "../../assets/illustration.svg";
import IllustrationDark from "../../assets/illustration-dark.svg";
import { Button } from "../../components/Button";

export const Walkthrough = () => {
  const scheme = useColorScheme();
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
        <Button title="Start Messaging" />
      </S.WrapperButtons>
    </S.Container>
  );
};
