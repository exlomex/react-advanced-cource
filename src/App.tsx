import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/AboutPage.async";
import {Suspense, useContext, useState} from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";



export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {hover: false}, ['app123', 'dada'])}>
            <button onClick={toggleTheme}>смена темы</button>

            <Link to={'/'}>Главная страница</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};
