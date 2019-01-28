import React from "react";
import "./table.css";


class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = this.props.filteredItems;
        let isChecked = this.props.isChecked;
        let count = this.props.count;
        let length = this.props.data.length;
        return (
                <table className="table responsive">
                    <thead>
                        <tr>
                            <th className="text-center">
                                <span onClick={this.props.checkAll}>{count > 0 && count < length ? <img src={require('../../content/icons/square.svg')} alt="plus" /> : isChecked ? <img src={require('../../content/icons/check-square.svg')} alt='plus' /> : <img src={require('../../content/icons/blank-check-box.svg')} alt='plus' />}</span>
                            </th>
                            <th width="20%">Column 1 <img src={require('../../content/icons/caret-down.svg')} alt="plus" /></th>
                            <th width="15%">Column 2</th>
                            <th>Column 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 ? items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td><span onClick={this.props.changeCheckBox.bind(this, index, item.isSelected)}>{item.isSelected ? <img src={require('../../content/icons/check-square.svg')} alt='plus' /> : <img src={require('../../content/icons/blank-check-box.svg')} alt='plus' />}</span>
                                    </td>
                                    <td>{item.Column1}</td>
                                    <td>{item.Column2}</td>
                                    <td>{item.Column3}</td>
                                </tr>
                            )
                        }) : <tr><td colSpan="4" className="text-center">No Results Found</td></tr>}
                    </tbody>
                    <tfoot></tfoot>
                </table>
        )
    }
}

export default Table;