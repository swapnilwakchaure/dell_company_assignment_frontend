import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { MdOutlineMail } from "react-icons/md";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { login } from "../Redux/Auth/action";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passType, setPassType] = useState('password');
    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleShowPassword = () => {
        setPassType('text');
        setShowPass(!showPass);
    };

    const handleHidePassword = () => {
        setPassType('password');
        setShowPass(!showPass)
    };

    const handleRegister = () => {
        navigate('/register');
    }

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            const payload = { email, password };
            dispatch(login(payload));

            setEmail('');
            setPassword('');
        } else {
            alert('All fields are required');
        }
    }

    return (
        <Main>
            <Form onSubmit={handleSubmit}>

                <AuthRoute>
                    <Button
                        leftborder="20px"
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                    <Button
                        color="white"
                        rightborder="20px"
                        onClick={handleLogin}
                    >
                        Log In
                    </Button>
                </AuthRoute>

                <Box>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                    />
                    <MdOutlineMail style={{
                        position: 'absolute',
                        fontSize: '18px'
                    }} />
                </Box>
                <Box>
                    <Input
                        type={passType}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    />
                    {!showPass ?
                        <BsEye
                            onClick={handleShowPassword}
                            style={{
                                position: 'absolute',
                                fontSize: '18px'
                            }}
                        /> :
                        <BsEyeSlash
                            onClick={handleHidePassword}
                            style={{
                                position: 'absolute',
                                fontSize: '18px'
                            }}
                        />
                    }
                </Box>

                <Submit type="submit" value="Log In" />
            </Form>
        </Main>
    )
}

export default Login;


const Main = styled.div`
  width: 100%;
  height: 85vh;
  background: #FAFAFA;
  padding-top: 30px;
`

const Form = styled.form`
  width: 90%;
  max-width: 390px;
  margin: auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  background: white;
`

const AuthRoute = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  background: ${(props) => props.color};
  border-top-left-radius: ${(props) => props.leftborder};
  border-top-right-radius: ${(props) => props.rightborder};
`

const Box = styled.div`
  border: 1px solid;
  width: 80%;
  max-width: 376px;
  margin: 20px auto;
  padding: 6px 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 45px;
  border: 0;
  outline: 0;
  font-size: 17px;
`

const Submit = styled.input`
  display: block;
  width: 100%;
  padding: 14px 20px;
  margin: auto;
  margin-top: 30px;
  border: none;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`