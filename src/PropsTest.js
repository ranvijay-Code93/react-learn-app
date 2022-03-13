import { useEffect } from 'react';
import './PropsTest.css';
import style from './custom.module.css';

function Propstest(props) {
    useEffect(() => {
        console.warn("______useEffect props_______");
    });
    return (
        <div>
            <div style={{ color: 'red', backgroundColor: 'yellow' }}>Hello {props.userName} testing click count: {props.clickCount} data total: {props.dataTotal}</div>
            <br />
            <div className='primary borderCol'>Address: {props.address.city}, {props.address.state}</div>
            <div>
                <button className={`${style.test} ${style.textCol}`} onClick={props.testFunction}>Test props function call</button>
            </div>
        </div>
    )
}
export default Propstest;