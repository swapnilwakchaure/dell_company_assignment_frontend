import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";
import styled from "styled-components";

import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { PiUserLight } from "react-icons/pi";

import { checkPassStrength } from "../Components/checkPassStrength";
import { register } from "../Redux/Auth/action";


const Register = () => {

    const [image, setImage] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passType, setPassType] = useState('password');
    const [showPass, setShowPass] = useState(false);
    const [strength, setStrength] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlePassword = (e) => {
        let pass = e.target.value;
        setPassword(pass);
        let str = checkPassStrength(pass);
        setStrength(str);
    }

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

    const handleFileInput = (e) => {
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('image', file);

        axios
            .post('https://dell-company-assignment-backend-api-url.vercel.app/auth/upload', formData)
            .then((res) => {
                // console.log('res: ', res.data.data);
                setImgUrl(res.data.data);
            })
            .catch((error) => {
                console.log('error: ', error);
            })

        const url = URL.createObjectURL(file);
        setImage(url);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && password) {
            if (strength === 'Strong') {
                const payload = { imgUrl, name, email, password };
                dispatch(register(payload));
                // console.log('payload: ', payload);

                setImage(null);
                setName('');
                setEmail('');
                setPassword('');
            } else {
                alert('password will be strong');
            }
        } else {
            alert('All fields are required');
        }
    }

    return (
        <Main>
            <Form onSubmit={handleSubmit}>

                <AuthRoute>
                    <Button
                        color="white"
                        leftborder="20px"
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                    <Button
                        rightborder="20px"
                        onClick={handleLogin}
                    >
                        Log In
                    </Button>
                </AuthRoute>

                {image ?
                    <Image src={image} alt="user" /> :
                    <PiUserLight
                        style={{
                            display: 'block',
                            border: '2px solid',
                            margin: 'auto',
                            borderRadius: '50%',
                            width: '100px',
                            height: '100px',
                            marginBottom: '20px',
                        }}
                    />
                }

                <File
                    type="file"
                    onChange={handleFileInput}
                />

                <Box>
                    <Input
                        autoFocus
                        type="text"
                        minLength={8}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                    />
                    <FiUser style={{
                        position: 'absolute',
                        fontSize: '18px'
                    }} />
                </Box>
                <Box>
                    <Input
                        type="email"
                        value={email}
                        minLength={8}
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
                        onChange={handlePassword}
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
                {password.length > 2 && <Message>password strength is: {strength}</Message>}

                <Submit type="submit" value="Register" />
            </Form>
        </Main>
    )
}

export default Register;


const Main = styled.div`
  width: 100%;
  height: 90vh;
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

const Image = styled.img`
  display: block;
  margin: auto;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const File = styled.input`
  display: block;
  width: 210px;
  margin: auto;
  font-size: 16px;
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

const Message = styled.p`
  width: 175px;
  font-size: 13px;
  font-style: Italic;
  margin: 0px 25px;
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

