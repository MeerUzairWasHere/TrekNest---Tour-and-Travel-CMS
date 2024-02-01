import styled from "styled-components"
import left from '../../assets/images/sanista-left.svg'
import right from '../../assets/images/sanista-right.svg'

const SanistaText = ({text}) => {
  return (
    <SanistaSpan>
        <img src={left} alt="svg" />
        {text}
        <img src={right} alt="svg" />
    </SanistaSpan>
  )
}
export default SanistaText



const SanistaSpan = styled.span`
       color: var(--primary-color1);
    font-family: var(--font-satisfy);
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: .4px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
`