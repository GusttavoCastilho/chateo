import React from "react";

import * as S from "./styles";

type StoryItemProps = {
	name: string
}

export const StoryItem = ({ name }: StoryItemProps) => {
  return (
    <S.Container>
      <S.Border>
        <S.Image>
          <S.TextImage>SA</S.TextImage>
        </S.Image>
      </S.Border>

      <S.Name numberOfLines={1}>{name}</S.Name>
    </S.Container>
  );
};
