import React,{useState,useMemo} from "react";

const Memohuk = () =>{
    
    const [num, setNum] = useState(()=>{return 0});
    const [theme, setTheme] = useState(false);
    let dbl = useMemo(()=>{
        return dblNum(num);
    },[num])

    let changeTheme  = {
        backgroundColor: theme ? 'black' : 'white',
        color: theme ? 'white' : 'black',
    }
    return (
        <div>
            <input type="number"  value={num} onChange={e=>setNum(parseInt(e.target.value))}/>
            <button onClick={()=>{setTheme(prevTheme => !prevTheme)}}>Set Theme</button>
            <div style={changeTheme}>{dbl}</div>
        </div>
    );
}

let dblNum = (x) => {
    for(let i=0;i<1000000000;i++){}
    return x*2;
}
export default Memohuk;