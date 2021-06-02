import { useState } from "react";
import styled from "styled-components";

const Inputcomponent = styled.input`
  background-color: aliceblue;
`;
const NewComponent = () => {
  // em xài ở đây nè
  //đúng chưa a
  // cái này hả a
  // à ok a
  // để e sửa lại
  // nhanws tren group nha a
  // rồi a 
  let [Newcontent, setNewcontent] = useState("");
  let [content, setContent] = useState([
    {
      name: "di hoc",
      success: false,
    },
    {
      name: "Hoc bai",
      success: false,
    },
  ]);
  let done = (index) => {
    return () => {
      let prev = new Array(...content);
      prev[index].success = !prev[index].success;
      setContent(prev);
    };
  };
  return (
    <div>
      {/* em đổi ở đây   */}
      <Inputcomponent
        onChange={(e) => {
          setNewcontent(e.target.value);
        }}
      ></Inputcomponent>
      <button
        onClick={() => {
          setContent((list) => [...list, { name: Newcontent, success: false }]);
        }}
      >
        Click
      </button>
      {content.map((elements, index) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                marginRight: "20px",
                width: "160px",
                textDecoration: elements.success ? "line-through" : "none",
              }}
            >
              {elements.name}{" "}
            </p>
            <button onClick={done(index)}> Done</button>
          </div>
        );
      })}
    </div>
  );
};
export { NewComponent };
// https://affectionate-lamarr-d6918b.netlify.app/
