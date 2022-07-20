import React from "react";
import {useParams} from "react-router-dom"

export default function User(){

    let { username } = useParams()

    return(
        <div>
            <center style={{marginTop: 5 +'em', fontSize: 30 + 'px'}}>
                User: 
            </center>
        </div>
    )

}