import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductPage = (data) => {
    const { _id, img1, model, name, price } = data;

    return (
        <Main>
            <Link to={`/single/${_id}`}>
            <Img src={img1} alt="product-image" />
            </Link>
            <Model>{model}</Model>
            <Name>{name}</Name>
            <Price>₹ {price}</Price>
        </Main>
    )
}


export default ProductPage;


const Main = styled.div`
  padding: 10px 20px;
  text-align: start;
  line-height: 15px;
  margin: 10px 0px;
  border: 1px solid;
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  margin: auto;
  cursor: pointer;
`

const Model = styled.p`
  font-size: 16px;
  margin-left: 20px;
  color: #0672cb;
`

const Name = styled.p`
  margin-left: 20px;
  font-size: 16px;
`

const Price = styled.p`
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
`