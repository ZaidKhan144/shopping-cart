import styled from 'styled-components'


export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -3;

    & video {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: relative;
        top: 0;
        left: 0;
        z-index: -2;
        opacity: .95;
        max-width: 100%;
        display: block;
    }
    & h1{
        position: absolute;
        top: 500px;
        left: 10%;
        right: 0;
        bottom: 0;
        color: #fff;
        /* background-color: #573232; */
        margin: 0;
        font-size: 3em;
        font-family: 'Noto Sans JP', sans-serif;
    }
`
export default Overlay
