import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Product/action";
import ProductPage from "../Components/ProductPage";
import styled from "styled-components";
import { CgSearch } from "react-icons/cg";


const Home = () => {

    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const { isLoading, isError, data } = useSelector((store) => store.ProductReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData(page, query));
    }, [page, query]);

    return (
        <div>

            <SearchBox>
                <Input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="search here"
                />
                <CgSearch style={{
                    fontSize: '20px',
                    padding: '0px 10px'
                }} />
            </SearchBox>

            {isLoading ? <h2>...Loading</h2> :
                <ProductContainer>
                    {data.length > 0 && data.map((el) => {
                        return <ProductPage
                            key={el.id}
                            _id={el._id}
                            img1={el.img1}
                            model={el.model}
                            name={el.name}
                            price={el.price}
                        />
                    })}
                </ProductContainer>
            }

            {isError ? <h3>something went wrong</h3> : <div></div>}

            <Pagination>
                <Button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Prev
                </Button>
                <Page>{page}</Page>
                <Button
                    disabled={page === 3}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </Button>
            </Pagination>
        </div>
    )
}

export default Home;


const ProductContainer = styled.div`
  width: 90%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  gap: 5px;
`


const Pagination = styled.div`
  margin: 50px auto;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Page = styled.p`
  border: 1px solid;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  background: #0672cb;
  color: white;
`


const SearchBox = styled.div`
  width: 80%;
  max-width: 480px;
  height: 2rem;
  border: 1px solid;
  border-radius: 5px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 3/4;

  @media (max-width: 850px) {
    width: 90%;
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
`