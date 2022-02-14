import {NavLink} from "react-router-dom";
import {PATH} from "enum";
import style from './Header.module.css'


export const Header = () => {
    const classActive = (active: { isActive: boolean }) => active.isActive ? `${style.link} + ${style.act}` : style.link
    return (
        <header className={style.wrapper}>
            <NavLink className={classActive} to={PATH.LOGIN}>LOGIN</NavLink>
            <NavLink className={classActive} to={PATH.PROFILE}>PROFILE</NavLink>
            <NavLink className={classActive} to={PATH.REGISTRATION}>REGISTRATION</NavLink>
            <NavLink className={classActive} to={PATH.RECOVERY}>RECOVERY</NavLink>
            <NavLink className={classActive} to={PATH.PAGE404}>REGISTRATION</NavLink>
            <NavLink className={classActive} to={PATH.NEW_PASSWORD}>NEW_PASSWORD</NavLink>
            <NavLink className={classActive} to={PATH.TEST}>TEST</NavLink>
        </header>
    );
};
