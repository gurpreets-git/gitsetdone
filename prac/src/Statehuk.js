import React,{useState} from "react";

const Statehuk =() =>{

    const [num, setNum] = useState(()=>{return 0});
    const [text, setText]  = useState("blue");

    let sub = () =>{
        setNum(prevNum => prevNum-1);
    }
    let add = ()=>{
        setNum(prevNum=> prevNum+1);
    }
    return(
        <div>
            <button onClick={sub}>-</button>
            <span>{num}{text}</span>
            <button onClick={add}>+</button>
        </div>
    );
}
export default Statehuk