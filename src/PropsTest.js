import { useEffect, memo } from 'react';
import './PropsTest.css';
import style from './custom.module.css';
import UseMemoTest from './UseMemoTest';

function Propstest(props) {
    console.warn("Rendering child component");
    const userName="Ranvijay";
    const address={state:"UP",city:"Noida"};
    useEffect(() => {
        console.warn("______useEffect props_______");
    });
    return (
        <>
            <div style={{ color: 'red', backgroundColor: 'yellow' }}>Hello {userName} testing click count: {props?.clickCount} data total: {props?.dataTotal}</div>
            <br />
            <div className='primary borderCol'>Address: {address?.city}, {address?.state}</div>
            <div>
                <button className={`${style.test} ${style.textCol}`} onClick={props.testFunction}>Test props function call</button>
                <button onClick={()=>props.testChildToParent(userName)}>Test child to parent</button>
            </div>
            <UseMemoTest />
        </>
    )
}
export default memo(Propstest);