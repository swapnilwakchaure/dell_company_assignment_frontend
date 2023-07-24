import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import SingleProduct from "./SingleProduct";
import PrivateRoute from "../Components/PrivateRoute";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/single/:id" element={<PrivateRoute><SingleProduct /></PrivateRoute>} />
            <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    )
}

export default AllRoutes;