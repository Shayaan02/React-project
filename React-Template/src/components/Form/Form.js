import { useState } from "react";
const Form = (props) => {
  const [formObj, setFormObj] = useState({
    productname: "",
    Amount: 0,
    Date: "",
    category: "",
  });

  const formOnSubmit = (event) => {
    event.preventDefault();
    props.formOnSubmit(formObj);
  };
 
  return (
    <div>
      <form onSubmit={formOnSubmit}>
        <div className="wrapper">
        <div className="product-div">
          <input
          required
            type="text"
            placeholder="Product name"
            onChange={(e) =>
              setFormObj({ ...formObj, productname: e.target.value })
            }
            className="input-product__name"
          ></input>
          <input
          required
            type="number"
            placeholder="Amount"
            onChange={(e) =>
              setFormObj({ ...formObj, Amount: +e.target.value })
            }
            className="input-product__amount"
          ></input>
       </div>
       <div className="product-div2">
        <input
        required
          type="date"
          placeholder="date"
          onChange={(e) => setFormObj({ ...formObj, Date: e.target.value })}
          className="input-date"
        ></input>
        <input
        required
          type="text"
          placeholder="category"
          onChange={(e) => setFormObj({ ...formObj, category: e.target.value })}
          className="input-category"
        ></input>
        </div>
        <div className="submit">

        <input className="input-submit" type="submit"></input>
       </div>
       </div>
      </form>
            
    </div>
  );
};

export default Form;
