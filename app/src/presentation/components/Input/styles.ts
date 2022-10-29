import styled from "styled-components/native";

export const Container = styled.TextInput.attrs(({ theme }) => ({
	placeholderTextColor: theme.active
}))`
  width: 100%;
  height: 46px;
  border-radius: 4px;
  color: ${(props) => props.theme.active};
  background-color: #152033;
  padding: 6px 8px;
  margin-bottom: 18px;
`;
