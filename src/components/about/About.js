import React from 'react'

export default function About(){
    return (
        <div
            align="center">
            <img src={require('../../assets/me.jpeg')} alt="Johnny Edgett" width="75%" height="75%" style={{ borderRadius: '50%'}}/>
            <br/>
            [GH]&nbsp;[LI]&nbsp;[EM]&nbsp;[IG]&nbsp;[FB]
            <br/>
        </div>
    )
}