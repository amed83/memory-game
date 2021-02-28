import styled, { css } from 'styled-components';

export const StyledCard = styled.div`
  position: relative;
  cursor: pointer;
  perspective: 1000px;
  transition: all .25s ease-in-out;
  width:200px;
  height:200px;
  display:flex;
  align-items:center;
  margin:10px;
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
  transition: all .25s ease-in-out;
`
export const StyledCardFront = styled.div`
  ${StyledCardSide};
  width:100%;
  height:100%;
  background-color: green;
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
  background-size:100%;
  background-color:	${props => props.color};
  transform: rotateY(-180deg);
  ${props => {
    if (props.isFlipped) {
      return `
       transform: perspective(1000px) rotateY(0deg);
      `
    }
  }}
`