import React from 'react'
import styled from "styled-components";

const PagingContainer= styled.div`
    margin-left:2rem;
    .Paging-list{
        display: flex;
        padding: 1rem;
        border: 2px solid red;
        .Paging-item{
            padding: 2px 6px;
            border:2px solid green;
            margin:4px;
            background-color: black;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            .paging-link{
                display: block;
                color:white;
                font-size: 1.3rem;
            }
        }
    }
`
function Paging({count=0}) {
    // let array_count=
    return (
        <PagingContainer>
            <ul className="Paging-list">
                <li className="Paging-item"><a className="paging-link">-</a></li>
                
                {/* <li className="Paging-item"><a className="paging-link">1</a></li>
                <li className="Paging-item"><a className="paging-link">1</a></li>
                <li className="Paging-item"><a className="paging-link">1</a></li> */}
            </ul>

        </PagingContainer>
    )
}

export default Paging
