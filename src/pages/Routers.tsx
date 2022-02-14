import { PATH } from "enum";
import {Navigate, Route, Routes} from "react-router-dom";
import {Login, NewPassword, Page404, Profile, Recovery, Registration, Test} from ".";


export const Routers = () => {
    return (
        <Routes>
            <Route path={'/*'} element={<Page404/>}/>
            <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.REGISTRATION} element={<Registration/>}/>
            <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
            <Route path={PATH.PAGE404} element={<Page404/>}/>
            <Route path={PATH.RECOVERY} element={<Recovery/>}/>
            <Route path={PATH.TEST} element={<Test/>}/>
        </Routes>
    );
};
