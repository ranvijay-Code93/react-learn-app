import React from "react";
import { Link } from "react-router-dom";
import { Nav as Navig } from "react-bootstrap";
function Nav() {
    return (
        <>
            <Navig activeKey="/" variant="pills">
                <Navig.Item><Link className = "nav-link" to="/">Home</Link></Navig.Item>
                <Navig.Item><Link className = "nav-link" to="/learnRef">Learn Ref</Link></Navig.Item>
                <Navig.Item><Link className = "nav-link" to="/learnContext">Learn context</Link></Navig.Item>
                <Navig.Item><Link className = "nav-link" to="/learnPrevState">Learn prev state</Link></Navig.Item>
                <Navig.Item><Link className = "nav-link" to="/learnPrevProps">Learn prev props</Link></Navig.Item>
                <Navig.Item><Link className = "nav-link" to="/learnArrayRendering">Learn array rendering</Link></Navig.Item>
                <Navig.Item><Link className = "nav-link" to="/learnControlledComponent">Learn controlled component</Link></Navig.Item>
                <Navig.Item><Link className = "nav-link" to="/testFormFields">Learn form fields</Link></Navig.Item>
            </Navig>
            <hr />
        </>
    )
}
export default Nav;