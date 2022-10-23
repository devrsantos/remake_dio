import styled from "styled-components";

const ContaianerHeader = styled.div`
    background-color: rgb(21, 21, 21);
    padding: 8px 16px;
    width: 97.5%;
    height: 43.391px;

    display: flex;
    flex-direction: row;
`
const ImageLogo = styled.img`
    width: 110px;
    height: 100%;
`
const ListMenu = styled.ul`
    height: 22px;
    width: 720px;

    margin-top: 12px;

    display: flex;
    flex-direction: row;
    justify-content: end;
`;

const ItensList = styled.li`
    padding-left: 10px;
    font-size: 16px;
    font-family: "Open Sans";
    list-style: none;

    &:focus-visible {
        outline: auto;
        outline-style: auto;
        outline-width: 1px;
    }
`

const HoverLink = styled.a`
    &:hover {
        cursor: pointer;
        color: rgb(228, 16, 93);
    }
`

export {ContaianerHeader, ImageLogo, ListMenu, ItensList, HoverLink}
