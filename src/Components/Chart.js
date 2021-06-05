import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

const ChartStyle = styled.div`
  width: 977px;
  height: 488px;
  canvas {
    width: 100%;
    height: 100%;
    transition: all linear 2s;
  }
`;
function Chart({ recover = 0, Infected = 0, death = 0 }) {
  return (
    <ChartStyle>
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              backgroundColor: [
                "rgba(0,0,255,.5)",
                "rgba(0,255,0,.5)",
                "rgba(255,0,0,.5)",
              ],
              data: [Infected, recover, death],
            },
          ],
        }}
        options={{
          legend: {
            display: false
          },
          animations: {
            tension: {
              duration: 5000,
              easing: "linear",
              from: 1,
              to: 0,
              loop: true,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      ></Bar>
    </ChartStyle>
  );
}

export default Chart;
