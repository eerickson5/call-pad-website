import React from "react";

export default function AppInfoRow({title, body, tabletImage, phoneImage}){
    return(
        <div style={{marginTop: '30px'}}>
            <h3 className="ui grey inverted header">{title}</h3>
            <p>{body}</p>
        </div>
        
    )
}