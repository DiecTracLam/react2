import React from 'react'
import styled from "styled-components";

const HeaderContainer=styled.div`
    background-color: blueviolet;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    .container-header{
        border-radius: 50px;
        width: 300px;
        height: 50px;
        overflow: hidden;
        background-color: white;
        display: flex;
        padding-left: 12px;
        i{
            font-size: 48px;
        }
    }
    .input-search{
        flex: 1;
        font-size: 1;
        font-size: 1.6rem;
        font-weight: bolder;
        border: none;
        outline: none;
    }
`
function Header({onchange}) {
    return (
        <HeaderContainer>
            <div className="container-header">
                <input className="input-search" type="text" placeholder="Search ... " onKeyUp={onchange}/>
            </div>  
        </HeaderContainer>
    )
}

export default Header
