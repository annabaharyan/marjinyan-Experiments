import React, { Component } from "react";
import ModulItem from "./ModulItem";

export default class ModuleList extends Component {
  render() {
    const { modules, onSelect, onDelete } = this.props;

   
    return (
      <div className="moduleList">
        {modules.map((item, index) => {
          return (
            <ModulItem
              key={item.id}
              {...item}
              onSelectModule={onSelect}
              onDeleteModule={onDelete}
            />
          );
        })}
      </div>
    );
  }
}
