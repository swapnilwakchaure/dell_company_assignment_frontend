import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CgSearch } from "react-icons/cg";
import { ImUser } from "react-icons/im";
import { MdLanguage } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { username } from "./username";
import { useEffect, useState } from "react";
import { getData } from "../Redux/Product/action";

const Navbar = () => {

  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);
  const [query, setQuery] = useState('');
  const page = 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(page, query));
  }, []);

  let { isAuth, auth } = useSelector((store) => store.AuthReducer);

  const handleLogout = () => {
    setLogout(!logout);
  }

  const handleUserLogout = () => {
    alert(`${auth[0].name} is successfully logout`);
    window.location.reload();
  }

  const handleHome = () => {
    navigate('/');
  }

  return (
    <div>
      <Desktop>
        <Logo onClick={handleHome} src="https://download.logo.wine/logo/Dell_Technologies/Dell_Technologies-Logo.wine.png" alt="logo" />
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
        {!isAuth ?
          <User>
            <ImUser style={{
              fontSize: '20px',
            }} />
            <Link to='/register'>Sign In</Link>
          </User> :
          <UserBox onClick={handleLogout}>
            {auth[0].imgUrl ? <UserImage src={auth[0].imgUrl} /> :
              <UserName>{username(auth[0].name)}</UserName>}
            {logout && <Logout onClick={handleUserLogout}>Logout</Logout>}
          </UserBox>
        }
        <Language>
          <MdLanguage style={{
            fontSize: '20px'
          }} />
          <Select>
            <option value="">Language</option>
          </Select>
        </Language>
      </Desktop>

      <Mobile>
        <MenuBar>
          <Logo src="https://download.logo.wine/logo/Dell_Technologies/Dell_Technologies-Logo.wine.png" alt="logo" />
          {!isAuth ?
            <User>
              <ImUser style={{
                fontSize: '20px',
              }} />
              <Link to='/register'>Sign In</Link>
            </User> :
            <UserBox>
              {auth[0].imgUrl ? <UserImage src={auth[0].imgUrl} /> :
                <UserName>{username(auth[0].name)}</UserName>}
              <UserName>{username(auth[0].name)}</UserName>
            </UserBox>
          }
          <Language>
            <MdLanguage style={{
              fontSize: '20px'
            }} />
            <Select>
              <option value="">Language</option>
            </Select>
          </Language>
        </MenuBar>
        <SearchBox>
          <Input type="text" placeholder="search here" />
          <CgSearch style={{
            fontSize: '20px',
            padding: '0px 10px'
          }} />
        </SearchBox>
      </Mobile>
    </div>
  )
}

export default Navbar;


const Desktop = styled.div`
  width: 100%;
  height: 5rem;
  display: grid;
  grid-template-columns: 0rem 1fr 3fr 1fr 1fr 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: sticky;
  top: 0;

  @media (max-width: 850px) {
    display: none;
  }
`

const Logo = styled.img`
  display: block;
  width: 200px;
  height: 5rem;
  grid-column: 2/3;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
`

const SearchBox = styled.div`
  width: 80%;
  height: 2rem;
  border: 1px solid;
  border-radius: 5px;
  margin: auto;
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

const User = styled.div`
  border: 1px solid;
  width: 90px;
  height: 2rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 4/5;
  gap: 5%;
  border-radius: 2px;

  @media (max-width: 850px) {
    grid-column: 3/4;
  }

  @media (max-width: 469px) {
    width: 60px;
    border: none;
  }
`

const Select = styled.select`
  border: none;
  outline: none;
  display: flex;
  font-size: 16px;
`

const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const UserImage = styled.img`
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`

const UserName = styled.p`
  font-size: 20px;
`

const Logout = styled.p`
  position: absolute;
  top: 50%;
`

const Language = styled.div`
  width: 120px;
  height: 2rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  grid-column: 5/6;
  border-radius: 2px;

  @media (max-width: 850px) {
    grid-column: 4/5;
  }

  @media (max-width: 469px) {
    width: 60px;
    border: none;
  }
`







const Mobile = styled.div`
  display: none;
  height: 8rem;

  @media (max-width: 850px) {
    display: block;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: sticky;
    top: 0;
  }
`

const MenuBar = styled.div`
  display: grid;
  grid-template-columns: 0fr repeat(3, 1fr) 1rem;
`
