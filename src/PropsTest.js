function Propstest(props){
    return(
        <div>Hello {props.userName} testing click count: {props.clickCount}
        <br/>
        <div>Address: {props.address.city}, {props.address.state}</div>
        <div>
            <button onClick={props.testFunction}>Test props function call</button>
        </div>
        </div>
    )
}
export default Propstest;