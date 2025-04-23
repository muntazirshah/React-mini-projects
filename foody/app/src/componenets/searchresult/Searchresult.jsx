import styled from "styled-components";
import {BASE_URL, Button ,Container} from "../../App";


function Searchresult({ data }) {
    return (
      <Foodcardcontianer>
        <Container>
        <FoodCards>
          {
            data?.map(({name,image,text, price}) => (
              <Foodcard key={name}>
                <div className="food_image">
                  <img src={BASE_URL + image} alt="" />
                </div>
                <div className="foodinfo">
                    <div className="info">
                        <h3>{name}</h3>
                        <p>{text}</p>
                    </div>
                    <Button>${price.toFixed(2)}</Button>
                </div>
              </Foodcard>
            ))
          }
        </FoodCards>
        </Container>
      </Foodcardcontianer>
    );
  }
  
export default Searchresult;

const Foodcardcontianer = styled.section`

background-image: url("/bg.png");
background-size: cover;
min-height: calc(100vh - 210px);


`;

const FoodCards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 80px;

`
 
const Foodcard = styled.div`
width: 340px;
  height: 167px;
  border: 0.66px solid;

border-image-source: radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;



  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .foodinfo{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }

`;






