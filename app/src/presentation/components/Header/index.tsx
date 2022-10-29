import React from 'react'

import * as S from './styles'

type HeaderProps = {
	title: string;
	children?: React.ReactNode
}

export const Header = ({ title, children }: HeaderProps) => {
	return (
		<S.Container>
			<S.Title>{title}</S.Title>
			{!!children && children}
		</S.Container>
	)
}