import { useState } from "react";

const Square =({value})=>{
    // let flag = false;
    // const [value, setValue] = useState("");
    // const HandleClick=()=>{
    //     if(value===""){
    //         if(flag===false){
    //             setValue("X");
    //             flag=true;
    //         }
    //         else{
    //             setValue("O");
    //             flag=false;
    //         }
    //     }
    // }

    return(
        <button
         className="square"
        >
            {value}
        </button>
    )
}

export default Square;