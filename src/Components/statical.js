import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import CountUp from 'react-countup'
const StaticalStyled=styled.div`
    margin: 50px 0;
    width: 900px;
    text-align: center;
    .content{
        font-size: 2.125rem;
        font-weight: 400;
    }
    .statical{
        display: flex;
        justify-content: space-around;
        .infected{
            border-bottom:10px solid rgba(0,0,255,.5) ;
        }
        .Deaths{
            border-bottom:10px solid rgba(255,0,0,.5);
        }
        .Recovered{
            border-bottom:10px solid rgba(0,255,0,.5);
        }
        .list{
            text-align: start;
            padding: 24px;
            flex:0 0 25%;
            box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
            background-color: white;
        h3,p{
            color:rgba(0, 0, 0, 0.54);
            font-size: 1rem;
            font-weight: 400;
        }
        span{
            font-size: 1.5rem;
            font-weight:400;
        }
        .des{
            font-size: 0.875rem;
            color: black;
        }
    }
    }
`;
function Statical({recover=109301406,Infected=171706512,death=3692510}) {
    // function swap(number){
    //     number=number.toString();
    //     if(number >3){
    //         let s1="";
    //         let count=0;
    //         for(let i=number.length-1;i>=0;i--){
    //             count++;
    //             if(count%3==0 && i!=0){
    //                 s1=","+number.substring(i,i+count)+s1;
    //                 count=0
    //             }
    //             if(i === 0){
    //                 s1=number.substring(i,count)+s1;
    //             }
    //         }
    //         return s1;
    //     }
    // }
    // recover=swap(recover)
    // Infected=swap(Infected)
    // death=swap(death);
    var d=new Date();
    var weekday = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date=weekday[d.getDay()];
    const day=d.getUTCDate();
    console.log(date)

    return (
        <StaticalStyled>
            <h1 className='content'>Global</h1>
            <div className="statical">
                <div className="list infected">
                    <h3>Infected</h3>
                    <CountUp start={0} end={Infected} duration={2.75} separator=","/>
                    <p>Wed Jun 02 2021</p>
                    <p className='des'>Number of active cases from COVID-19.</p>
                </div>
                <div className="list Recovered">
                    <h3>Recovered</h3>
                    <CountUp start={0} end={recover} duration={2.75} separator=","/>
                    <p>Wed Jun 02 2021</p>
                    <p className='des'>Number of active cases from COVID-19.</p>
                </div>
                <div className="list Deaths">
                    <h3>Deaths</h3>
                    <CountUp start={0} end={death} duration={2.75} separator=","/>
                    <p>Wed Jun 02 2021</p>
                    <p className='des'>Number of active cases from COVID-19.</p>
                </div>
            </div>
        </StaticalStyled>
    )
}

export default Statical
