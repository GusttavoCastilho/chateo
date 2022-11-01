import styled, { css, DefaultTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { ButtonProps } from ".";

type ContainerProps = Omit<ButtonProps, "title">;

const ContainerModifiers = {
  primary: (theme: DefaultTheme, disabled?: boolean) => css`
    background-color: ${theme.brand};
    border-radius: 30px;
    opacity: ${disabled ? 0.2 : 1};
  `,
  secondary: (theme: DefaultTheme) => css``,
  ghost: (theme: DefaultTheme) => css``,
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ type, theme, disabled }) => css`
    min-width: 100%;
    height: 52px;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    ${!!type && ContainerModifiers[type](theme, disabled)};
  `}
`;

export const Title = styled.Text`
  color: white;
  font-size: ${RFValue(14)}px;
  font-weight: 600;
`;
