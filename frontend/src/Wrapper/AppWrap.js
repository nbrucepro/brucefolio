import React from "react";
import { Navigationdots, SocialMedia } from "../components";
const AppWrap = (Component, id, classNames) => function HOC() {
    return (
        <div id={id} className={`container ${classNames}`}>
            <SocialMedia />
            <div className="wrapper flex">
                <Component />
            <div className="copyright">
                <p className="p-text">Bruce @2</p>
                <p className="p-text">Bruce @2 alright reserved</p>
            </div>
            </div>
            <Navigationdots active={id} />
        </div>
    );
};
export default AppWrap;