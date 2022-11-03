import React from 'react'
import { ContaianerHeader, HoverLink, ImageLogo, ItensList, ListMenu } from './styles'
import logo from "./../../assets/logo.png"
import { ButtonPrimary } from '../Button/styles'
const Header = () => {
    return (
        <>
            <ContaianerHeader>
                <ImageLogo src={logo} alt="Logo Principal da Dio" />
                <ListMenu>
                    <HoverLink>
                        <ItensList>Home</ItensList>
                    </HoverLink>
                </ListMenu>
                <ButtonPrimary onClick={() => alert("Entrar")}>ENTRAR</ButtonPrimary>
                <ButtonPrimary onClick={() => alert("Cadastrar")}>CADASTRAR</ButtonPrimary>
            </ContaianerHeader>
        </>
    )
}

export { Header }