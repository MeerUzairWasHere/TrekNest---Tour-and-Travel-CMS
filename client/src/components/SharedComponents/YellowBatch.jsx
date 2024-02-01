import styled from "styled-components"
import banner from "../../assets/images/destination-banner-batch-bg.svg"

const YellowBatch = ({text,icon}) => {

  return (
    <YellowBatchWrapper className={icon ? "animate__animated  animate__zoomIn batch":"batch" } >
        <img src={banner} alt="banner svg" />
    <span className="batch-text">
    <span className="svg">{icon}</span>{text}
    </span>
    </YellowBatchWrapper>
  )
}
export default YellowBatch

const YellowBatchWrapper = styled.div`
   position: relative;
    width: 150px;
    img{
        width: 100%;
    }
    svg{
      width: 80%;
    }
.batch-text{
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
    font-family: var(--font-satisfy);
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: .72px;
   }
  
 
`