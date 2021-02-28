import styled, { css } from 'styled-components';

export const StyledCard = styled.div`
  position: relative;
  cursor: pointer;
  perspective: 1000px;
  transition: all .25s ease-in-out;
  width:180px;
  height:180px;
  display:flex;
  align-items:center;
  margin:10px;
  border-radius:10px;
  @media only screen and (min-width : 768px){
    width:140px;
    height:140px;
  }
  @media only screen and (max-width : 767px){
    width:90px;
    height:90px;
  }
`
const StyledCardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius:10px;
  transition: all .25s ease-in-out;
`

export const StyledLogo = styled.div`
  border: solid black 2px;
  border-radius: 50%;
  width:50%;
  height:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:2rem;
  font-weight:bold;
`

export const StyledCardFront = styled.div`
  ${StyledCardSide};
  width:100%;
  height:100%;
  border:solid black 1px;
  display:flex;
  align-items:center;
  ${props => {
    if (props.isFlipped) {
      return `
      transform: perspective(1000px) rotateY(-180deg);
      `
    }
  }}`

export const StyledCardBack = styled.div`
  ${StyledCardSide};
  width:100%;
  height:100%;
  background-color:	${props => props.color};
  transform: rotateY(-180deg);
  @keyframes zoomCard {
    0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(1.1,1.1);
    }
    100% {
        transform: scale(1,1);
    }
}
  ${props => {
    if (props.matched && props.isFlipped) {
      return `animation:zoomCard 1s;
        transform: perspective(1000px) rotateY(0deg);
      `
    }
    if (props.isFlipped) {
      return `
       transform: perspective(1000px) rotateY(0deg);`
    }

  }}
`