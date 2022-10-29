import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${props => props.theme.background};
`

export const Content = styled.View`
	flex: 1;
	padding: 10px 20px;
`