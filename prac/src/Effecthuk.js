import React,{useState,useEffect} from "react";

const Effecthuk = ()=>{

    let [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener('resize',resizeWin);

        return ()=>{
            window.removeEventListener('resize',resizeWin);
        }
    },[windowWidth]);

    const resizeWin = ()=>{
        setWindowWidth(window.innerWidth);
    }
    return(<div>{windowWidth}</div>);
}
export default Effecthuk;