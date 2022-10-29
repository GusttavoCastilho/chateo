import React from "react";
import * as S from "./styles";

type ContactItemProps = {
  name: string;
  status: string;
};

export const ContactItem = ({ name, status }: ContactItemProps) => {
  return (
    <S.Container>
      <S.Avatar></S.Avatar>

      <S.Content>
        <S.Name>{name}</S.Name>
		<S.Status>{status}</S.Status>
      </S.Content>
    </S.Container>
  );
};
