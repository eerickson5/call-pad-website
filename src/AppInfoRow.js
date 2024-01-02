import React from "react";
import { Container } from "semantic-ui-react";

export default function AppInfoRow({title, body, tabletImage, phoneImage}){
    return(
        <div style={{marginTop: '30px'}}>
            <h3 className="ui header">{title}</h3>
            <p>{body}</p>
        </div>
        
    )
}