import React from 'react'
import styled from "styled-components"

const StaticalStyled=styled.div`
    .content{
        font-size: 2.125rem;
        font-weight: 400;
    }
`;
function statical() {
    return (
        <StaticalStyled>
            <h1 className='content'>Global</h1>
        </StaticalStyled>
    )
}

export default statical
