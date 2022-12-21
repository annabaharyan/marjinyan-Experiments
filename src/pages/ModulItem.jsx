import React, { Component } from "react";

export default class ModulItem extends Component {
  render() {
    const {
      id,
      title,
      duration,
      pricePerMonth,
      onSelectModule,
      onDeleteModule,
    } = this.props;
    return (
      <div className="moduleItem">
        <h2>{title}</h2>
        <p>{duration}</p>
        <p>{pricePerMonth} AMD</p>
        {onSelectModule && (
          <>
            <button onClick={() => onSelectModule(id)}>Add</button>
            <button onClick={() => onDeleteModule(id)}>Delete</button>
          </>
        )}
      </div>
    );
  }
}
