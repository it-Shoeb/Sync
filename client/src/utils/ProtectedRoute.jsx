import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function ProtectedRoute() {
    const user = null
    const navigate = useNavigate();

    useEffect(() => {
        if (user === !null) {
            navigate('/', { replace: true }) //replace: true is used to client go back to the previous route throuhh here
        }
    }, [navigate, user])

    return <Outlet />;
}