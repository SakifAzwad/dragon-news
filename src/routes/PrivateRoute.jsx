/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthCon } from "../providers/AuthProv";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthCon);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;