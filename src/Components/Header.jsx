import React from 'react'
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 26px 0;
    align-items: center;
    font-size: 1.8rem;
    .logoShop,.tools-list,cart-coin{
        display: flex;
        align-items: center;
        /* font-size: 2rem; */
        cursor: pointer;
    }
    .logo-icon{
        margin-right:24px
    }
    .tools-item{
        margin: 0 20px;
        .tools-link{
            color: black;
            font-weight:800;
        }
    }
    .tools-link:hover{
        color:rgb(255,109,4)
    }
    .cart-coin{
        font-weight:800;
        .cart{
            margin-left: 24px;
        }
    }

`
function Header() {
    return (
        <Router>
            <HeaderContainer>
                <div className='logoShop'>
                    <Link className="logo-icon" to="/">icon</Link>
                    <span><h2>BestShop</h2></span>
                </div>
                <div className="tools">
                    <ul className="tools-list">
                        <li className="tools-item">
                            <Link className="tools-link" to='/'>Home</Link>
                        </li>
                        <li className="tools-item">
                            <Link className="tools-link" to='/shop'>Shop</Link>
                        </li>
                        <li className="tools-item">
                            <Link className="tools-link" to='/blog'>Blog</Link>
                        </li>
                        <li className="tools-item">
                            <Link className="tools-link" to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='cart-coin'>
                    <span className="coin">$239</span>
                    <span className='cart'>icon</span>
                </div>
            </HeaderContainer>
        </Router>
    )
}

export default Header
