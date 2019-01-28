import React from "react";
import "./table.css";

class Table extends React.Component {
    applyStyles = (event) =>{
        event.target.className = "user_selected";
    }

    render() {
        const items = this.props.filteredItems;
        let isChecked = this.props.isChecked;
        let count = this.props.count;
        let length = this.props.data.length;
        let order = this.props.order;
        return (
                <table className="table responsive">
                    <thead>
                        <tr>
                            <th className="text-center">
                                <span onClick={this.props.checkAll}>{count > 0 && count < length ? <img src={require('../../content/icons/square.svg')} alt="plus" /> : isChecked ? <img src={require('../../content/icons/check-square.svg')} alt='plus' /> : <img src={require('../../content/icons/blank-check-box.svg')} alt='plus' />}</span>
                            </th>
                            <th width="15%" onClick={(event) =>{this.applyStyles(event);this.props.sortTable("Column1","order1");}}>Column 1 { order.order1 === "" ? null: order.order1 === "asc" ?<img src={require('../../content/icons/caret-down.svg')} alt="plus" />:<img src={require('../../content/icons/caret-arrow-up.svg')} alt="plus" />}</th>
                            <th width="15%" onClick={(event) =>{this.applyStyles(event);this.props.sortTable("Column2","order2")}}>Column 2 { order.order2 === "" ? null: order.order2 === "asc" ?<img src={require('../../content/icons/caret-down.svg')} alt="plus" />:<img src={require('../../content/icons/caret-arrow-up.svg')} alt="plus" />}</th>
                            <th onClick={(event) =>{this.applyStyles(event);this.props.sortTable("Column3","order3")}}>Column 3 { order.order3 === "" ? null: order.order3 === "asc" ?<img src={require('../../content/icons/caret-down.svg')} alt="plus" />:<img src={require('../../content/icons/caret-arrow-up.svg')} alt="plus" />}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 ? items.map((item, index) => {
                            return (
                                <tr key={index} className={item.isSelected?"user_selected":null}>
                                    <td><span onClick={this.props.changeCheckBox.bind(this, index, item.isSelected)}>{item.isSelected ? <img src={require('../../content/icons/check-square.svg')} alt='plus' /> : <img src={require('../../content/icons/blank-check-box.svg')} alt='plus' />}</span>
                                    </td>
                                    <td>{item.Column1}</td>
                                    <td>{item.Column2}</td>
                                    <td>{item.Column3}{item.isSelected?<span className="pull-right"><img src={require('../../content/icons/options.svg')} alt="plus" /></span>:null}</td>
                                </tr>
                            )
                        }) : <tr><td colSpan="4" className="text-center">No Results Found</td></tr>}
                    </tbody>
                </table>
        )
    }
}

export default Table;