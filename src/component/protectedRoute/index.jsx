import { Navigate, Outlet } from "react-router-dom"
import { Main } from "../main/Main";



export const ProtectedRoute = ({ children, redirectPath = "/login", isAllowed }) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={true} />
    }

    return <Main><Outlet /></Main>;
}