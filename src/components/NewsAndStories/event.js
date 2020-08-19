import React from 'react';

export default function Event ({events}) {
    return(
        events.map(e => {
            return(
                <div>
                    <h3>{e.name}</h3>
                    <iframe src={e.url} width="500" height="772" style={{border:"none", overflow:"hidden"}}  frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                </div>
            );
        })
        
    );
}