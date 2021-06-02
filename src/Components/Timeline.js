import React, { useEffect, useState } from 'react'
import styled from "styled-components";



const TimelineStyled = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        font-size: 2rem;
        font-weight: 500;
    }
`

function Timeline({count}) {
    const [second,setSecond]=useState(0);

    // useEffect(()=>{
    //     const interval=()
    // })
    return (
        <TimelineStyled>
            <p>Timeflip</p>
            <p>Flip : {count}</p>
        </TimelineStyled>
    )
}

export default Timeline
