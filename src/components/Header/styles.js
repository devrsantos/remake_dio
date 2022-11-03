import styled from "styled-components";

const ContaianerHeader = styled.div`
    background-color: #151515;
    margin-top: 6px;
    width: 100%;
    height: 47px;

    display: flex;
    flex-direction: row;
`
const ImageLogo = styled.img`
    width: 63px;
    height: 25px;
    margin: 8px 0px 14px 60px;
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
    font-size: 18px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    list-style: none;
    color: #FFFFFF;

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
