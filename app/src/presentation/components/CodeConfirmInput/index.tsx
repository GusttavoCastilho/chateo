import React, { ReactNode } from "react";
import { TextInputProps } from "react-native";
import { getSymbols } from "../../utils/getSymbols";
import * as S from "./styles";

type RenderItemOptions = {
  symbol: string;
  index: number;
  isFocused: boolean;
};

type CodeConfirmInputProps = {
  length?: number;
  renderItem: (options: RenderItemOptions) => ReactNode;
} & TextInputProps;

const DEFAULT_LENGTH_COUNT = 2;

export const CodeConfirmInput = ({
  renderItem,
  length = DEFAULT_LENGTH_COUNT,
  value,
  onChangeText,
  ...props
}: CodeConfirmInputProps) => {
  const codeInput = getSymbols(value || "", length).map(
    (symbol, index, symbols) => {
      const isFirstEmptySymbol = symbols.indexOf("") === index;

      return renderItem({
        index,
        symbol,
        isFocused: isFirstEmptySymbol,
      });
    }
  );
  return (
    <S.Container>
		{codeInput}
      <S.Input
	  	{...props}
        disableFullscreenUI
        caretHidden={true}
        spellCheck={false}
        autoCorrect={false}
        blurOnSubmit={false}
        clearButtonMode="never"
        autoCapitalize="characters"
        underlineColorAndroid="transparent"
        maxLength={length}
        value={value}
		onChangeText={onChangeText}
      />
    </S.Container>
  );
};
