import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { GrSystem, GrMemory } from "react-icons/gr";
import { GiProcessor } from "react-icons/gi";
import { MdOutlineVideoCameraFront, MdMemory, MdKeyboard } from "react-icons/md";
import { ImDisplay } from "react-icons/im";


const SingleProduct = () => {

    const { id } = useParams();
    const { isLoading, data } = useSelector((store) => store.ProductReducer);
    const [singleData, setSingleData] = useState({});
    const [specs, setSpecs] = useState({});
    const [perform, setPerform] = useState([]);

    useEffect(() => {
        let productData = data.find((el) => el._id === id);
        productData && setSingleData(productData);
        productData && setSpecs(productData.specifications);
        productData && setPerform(productData.performance);
    }, []);

    return (
        <div>
            <Main>
                {isLoading ? <h2>Loading...</h2> :
                    <MultiImage>
                        <Img1 src={singleData.img1} alt='product-image' />
                        <Img1 src={singleData.img2} alt='product-image' />
                        <Img1 src={singleData.img3} alt='product-image' />
                        <Img1 src={singleData.img4} alt='product-image' />
                        <Img1 src={singleData.img5} alt='product-image' />
                    </MultiImage>
                }
                <div>
                    <Img src={singleData.img1} />
                </div>
                <Information>
                    <Name>{singleData.name}</Name>
                    <Model>Model: {singleData.service_tag}</Model>
                    <Model>{singleData.model}</Model>
                    <Price>₹ {singleData.price}</Price>
                    <Specs>
                        <MdMemory fontSize={'25px'} />
                        <p>Configuration: {singleData.configuration}</p>
                    </Specs>
                    <Specs>
                        <GiProcessor fontSize={'30px'} />
                        <p>Processor: {specs.processor}</p>
                    </Specs>
                    <Specs>
                        <GrSystem fontSize={'30px'} />
                        <p>Operating System: {specs.os}</p>
                    </Specs>
                    <Specs>
                        <MdOutlineVideoCameraFront fontSize={'25px'} />
                        <p>Video Card: {specs.video_card}</p>
                    </Specs>
                    <Specs>
                        <GrMemory fontSize={'25px'} />
                        <p>Memory: {specs.memory}</p>
                    </Specs>
                    <Specs>
                        <ImDisplay fontSize={'30px'} />
                        <p>Display: {specs.display}</p>
                    </Specs>
                    <Specs>
                        <MdKeyboard fontSize={'25px'} />
                        <p>Keyboard: {specs.keyboard}</p>
                    </Specs>
                </Information>
            </Main>

            <Performance>
                <p>1. {perform[0]}</p>
                <p>2. {perform[1]}</p>
                <p>3. {perform[2]}</p>
                <p>4. {perform[3]}</p>
            </Performance>
        </div>
    )
}

export default SingleProduct;



const Main = styled.div`
  border: 1px solid;
  width: 90%;
  margin: 100px auto;

  display: grid;
  grid-template-columns: 50px repeat(2, 1fr);

  @media (max-width: 670px) {
    grid-template-columns: 50px repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`

const MultiImage = styled.div`
  display: grid;
  padding: 10px;
  width: 80px;
`

const Img = styled.img`
  width: 80%;
  margin: 30px auto;
  display: block;
  justify-content: center;
  align-items: center;
`

const Img1 = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`


const Information = styled.div`
  border-left: 1px solid;
  line-height: 15px;

  @media (max-width: 670px) {
    width: 90%;
    max-width: 600px;
  }

  @media (max-width: 410px) {
    width: 90%;
    min-width: 360px;
  }
`

const Specs = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
`

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: start;
  margin-left: 32px;
`

const Name = styled.h2`
  text-align: start;
  margin-left: 32px;
  text-transform: capitalize;
`

const Model = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  text-align: start;
  margin-left: 32px;
`


const Performance = styled.div`
  width: 80%;
  margin: 50px auto;
  text-align: start;
  padding: 20px;
  font-size: 18px;
`