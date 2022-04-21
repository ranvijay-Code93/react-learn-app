import { useEffect } from 'react';
import './PropsTest.css';
import style from './custom.module.css';
import UseMemoTest from './UseMemoTest';

function Propstest(props) {
    let name="ranvijay";
    useEffect(() => {
        console.warn("______useEffect props_______");
    });
    return (
        <>
            <div style={{ color: 'red', backgroundColor: 'yellow' }}>Hello {props.userName} testing click count: {props.clickCount} data total: {props.dataTotal}</div>
            <br />
            <div className='primary borderCol'>Address: {props.address.city}, {props.address.state}</div>
            <div>
                <button className={`${style.test} ${style.textCol}`} onClick={props.testFunction}>Test props function call</button>
                <button onClick={()=>props.testChildToParent(name)}>Test child to parent</button>
            </div>
            <UseMemoTest />
        </>
    )
}
export default Propstest;