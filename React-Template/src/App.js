import React, { Fragment, useState } from "react";
import Form from "./components/Form/Form";
import Filter from "./components/Form/Filter";
const App = () => {
  const [list, setList] = useState([]);
  const [orgList, setOrgList] = useState([]);
  const [categ, setCateg] = useState([]);

  const sendToForm = (formObj) => {
    setList([...list, formObj]);
    setOrgList([...orgList, formObj]);

    if (!categ.includes(formObj.category))
      setCateg([...categ, formObj.category]);
  };

  const filterButton = (value) => {
    console.log(value);
    setList([...orgList.filter((x) => x.category === value)]);
  };

  const allButton = () => {
    setList([...orgList]);
  };
  return (
    <Fragment>
      <Form formOnSubmit={sendToForm} />
      <Filter categ={categ} filterButton={filterButton} allButton={allButton} />

      <div className="list-container">

      {list.map((e, index) => {
        return (
       
            <div className="list-div">
              <p key={index}>
                <h2>{e.category} </h2>
              </p>
              <p key={index}> {e.Amount} </p>
              <p key={index}> {e.Date} </p>
              <p key={index}>
                <p> {e.productname} </p>
              </p>
            </div>
          
        );
      })}
      </div>
    </Fragment>
  );
};

export default App;
