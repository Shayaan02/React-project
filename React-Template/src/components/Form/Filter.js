import React, { Fragment } from "react";

class Filter extends React.Component {  
  render() {
    return (
      <Fragment>
        <div className="div-container">
        {console.log(this.props)}
        {this.props.categ.map((value) => {
          return (
            <div>
              <button className="categ-button" onClick={() => this.props.filterButton(value)}>
                {value}
              </button>
            </div>
          );
        })}
        <button className="categ-button" onClick={() => this.props.allButton()}> All </button>
        </div>
      </Fragment>
    );
  }
}

export default Filter;
