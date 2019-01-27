import React from "react";
import "./table.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/font-awesome/css/font-awesome.css";
import plus from "../content/icons/plus.svg"

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsPerPage: 10,
            currentPage: 1,
            begin: 1,
            end: 10,
            filteredItems: [],
            isChecked: false,
            selectCount: 0,
            searchItem: "",
            data: [
                {
                    Column1: "Value1",
                    Column2: "Value2",
                    Column3: "Value3"
                },
                {
                    Column1: "Value4",
                    Column2: "Value5",
                    Column3: "Value6"
                },
                {
                    Column1: "Value7",
                    Column2: "Value8",
                    Column3: "Value9"
                },
                {
                    Column1: "Value10",
                    Column2: "Value11",
                    Column3: "Value12"
                },
                {
                    Column1: "Value13",
                    Column2: "Value14",
                    Column3: "Value15"
                },
                {
                    Column1: "Value16",
                    Column2: "Value17",
                    Column3: "Value18"
                },
                {
                    Column1: "Value19",
                    Column2: "Value20",
                    Column3: "Value21"
                },
                {
                    Column1: "Value22",
                    Column2: "Value23",
                    Column3: "Value24"
                },
                {
                    Column1: "Value25",
                    Column2: "Value26",
                    Column3: "Value27"
                },
                {
                    Column1: "Value28",
                    Column2: "Value29",
                    Column3: "Value30"
                },
                {
                    Column1: "Value31",
                    Column2: "Value32",
                    Column3: "Value33"
                },
                {
                    Column1: "Value34",
                    Column2: "Value35",
                    Column3: "Value36"
                },
                {
                    Column1: "Value37",
                    Column2: "Value38",
                    Column3: "Value39"
                },
                {
                    Column1: "Value1",
                    Column2: "Value2",
                    Column3: "Value3"
                },
                {
                    Column1: "Value4",
                    Column2: "Value5",
                    Column3: "Value6"
                },
                {
                    Column1: "Value7",
                    Column2: "Value8",
                    Column3: "Value9"
                },
                {
                    Column1: "Value10",
                    Column2: "Value11",
                    Column3: "Value12"
                },
                {
                    Column1: "Value13",
                    Column2: "Value14",
                    Column3: "Value15"
                },
                {
                    Column1: "Value16",
                    Column2: "Value17",
                    Column3: "Value18"
                },
                {
                    Column1: "Value19",
                    Column2: "Value20",
                    Column3: "Value21"
                },
                {
                    Column1: "Value22",
                    Column2: "Value23",
                    Column3: "Value24"
                },
                {
                    Column1: "Value25",
                    Column2: "Value26",
                    Column3: "Value27"
                },
                {
                    Column1: "Value28",
                    Column2: "Value29",
                    Column3: "Value30"
                },
                {
                    Column1: "Value31",
                    Column2: "Value32",
                    Column3: "Value33"
                },
                {
                    Column1: "Value34",
                    Column2: "Value35",
                    Column3: "Value36"
                },
                {
                    Column1: "Value37",
                    Column2: "Value38",
                    Column3: "Value39"
                }
            ],
            items: [
                {
                    Column1: "Value1",
                    Column2: "Value2",
                    Column3: "Value3"
                },
                {
                    Column1: "Value4",
                    Column2: "Value5",
                    Column3: "Value6"
                },
                {
                    Column1: "Value7",
                    Column2: "Value8",
                    Column3: "Value9"
                },
                {
                    Column1: "Value10",
                    Column2: "Value11",
                    Column3: "Value12"
                },
                {
                    Column1: "Value13",
                    Column2: "Value14",
                    Column3: "Value15"
                },
                {
                    Column1: "Value16",
                    Column2: "Value17",
                    Column3: "Value18"
                },
                {
                    Column1: "Value19",
                    Column2: "Value20",
                    Column3: "Value21"
                },
                {
                    Column1: "Value22",
                    Column2: "Value23",
                    Column3: "Value24"
                },
                {
                    Column1: "Value25",
                    Column2: "Value26",
                    Column3: "Value27"
                },
                {
                    Column1: "Value28",
                    Column2: "Value29",
                    Column3: "Value30"
                },
                {
                    Column1: "Value31",
                    Column2: "Value32",
                    Column3: "Value33"
                },
                {
                    Column1: "Value34",
                    Column2: "Value35",
                    Column3: "Value36"
                },
                {
                    Column1: "Value37",
                    Column2: "Value38",
                    Column3: "Value39"
                },
                {
                    Column1: "Value1",
                    Column2: "Value2",
                    Column3: "Value3"
                },
                {
                    Column1: "Value4",
                    Column2: "Value5",
                    Column3: "Value6"
                },
                {
                    Column1: "Value7",
                    Column2: "Value8",
                    Column3: "Value9"
                },
                {
                    Column1: "Value10",
                    Column2: "Value11",
                    Column3: "Value12"
                },
                {
                    Column1: "Value13",
                    Column2: "Value14",
                    Column3: "Value15"
                },
                {
                    Column1: "Value16",
                    Column2: "Value17",
                    Column3: "Value18"
                },
                {
                    Column1: "Value19",
                    Column2: "Value20",
                    Column3: "Value21"
                },
                {
                    Column1: "Value22",
                    Column2: "Value23",
                    Column3: "Value24"
                },
                {
                    Column1: "Value25",
                    Column2: "Value26",
                    Column3: "Value27"
                },
                {
                    Column1: "Value28",
                    Column2: "Value29",
                    Column3: "Value30"
                },
                {
                    Column1: "Value31",
                    Column2: "Value32",
                    Column3: "Value33"
                },
                {
                    Column1: "Value34",
                    Column2: "Value35",
                    Column3: "Value36"
                },
                {
                    Column1: "Value37",
                    Column2: "Value38",
                    Column3: "Value39"
                }
            ]
        }
    }

    componentWillMount = () => {
        let items = this.state.items;
        items.forEach(function (element) {
            element.isSelected = false;
        });

        this.setState({
            items: items,
            selectCount: 0
        });
        this.findItemsToDisplay();
    }

    findItemsToDisplay = (event) => {
        let value;
        if (event) {
            value = Number.parseInt(event.target.value);
        } else {
            value = this.state.itemsPerPage;
        }
        let begin = ((this.state.currentPage - 1) * value);
        let end = Number.parseInt(begin + value);
        let numberOfPages = this.state.items.length / value;
        numberOfPages = Math.ceil(numberOfPages);
        const filteredItems = this.state.items.slice(begin, end);
        this.setState({
            begin: begin + 1,
            end: end,
            itemsPerPage: value,
            filteredItems: filteredItems,
            numberOfPages: numberOfPages,
        });
    };

    changeCurrentPage = (value) => {
        /*if (value == "left") {
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        } else {
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }*/

        //this.findItemsToDisplay();
    }

    onInputHandleChange = (event) => {
        event.preventDefault();
        const searchValue = event.target.value;
        const value = searchValue.toLowerCase();
        const items = this.state.data;
        const list = [];
        items.forEach(function (element, index) {
            if (element.Column1.toLowerCase().indexOf(value) > -1 || element.Column2.toLowerCase().indexOf(value) > -1 || element.Column3.toLowerCase().indexOf(value) > -1) {
                list.push(element);
            }
        });

        this.setState({
            items: list,
            searchItem: searchValue
        });
        this.findItemsToDisplay()
    }

    changeCheckBox = (id, value) => {
        let items = this.state.data;
        let count = this.state.selectCount;
        items.forEach(function (element, index) {
            if (index === id) {
                if (value) {
                    element.isSelected = false;
                    count--;
                } else {
                    element.isSelected = true;
                    count++;
                }
            }
        })

        this.setState({
            items: items,
            selectCount: count
        })
    }

    /*searchInTable = (event) => {
        event.preventDefault();
        const items = this.state.data;
        const list = [];
        const value = this.state.searchItem;
        items.forEach(function (element, index) {
            if (element.Column1.toLowerCase().indexOf(value) > -1 || element.Column2.toLowerCase().indexOf(value) > -1 || element.Column3.toLowerCase().indexOf(value) > -1) {
                list.push(element);
            }
        });

        this.setState({
            items: list,
        })
    }*/

    checkAll = () => {
        const checkValue = !this.state.isChecked;
        let items = this.state.data;
        let count;
        if (checkValue) {
            items.forEach(function (element) {
                element.isSelected = true;
            })
            count = items.length;
        } else {
            items.forEach(function (element) {
                element.isSelected = false;
            })
            count = 0;
        }

        this.setState({
            items: items,
            selectCount: count,
            isChecked: checkValue
        })
    }
    render() {
        const items = this.state.filteredItems;
        let isChecked = this.state.isChecked;
        let count = this.state.selectCount;
        let length = this.state.data.length;
        return (
            <section>
                <section className="row filters">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 items">Items ({length})</div>
                            <div className="col-5 text-center selected">{this.state.selectCount ? this.state.selectCount : "Nothing"} Selected <img src={require('../content/icons/caret-down.svg')} alt="plus" /></div>
                            <div className="col-4 text-center"><button className="btn something_btn">Do something</button></div>
                            <div className="col-1 text-center"><img src={require('../content/icons/add.svg')} alt="plus" /></div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-3 text-center sidebar"><img src={require('../content/icons/check.svg')} alt="plus" /></div>
                            <div className="col-3 text-center"><img src={require('../content/icons/menu.svg')} alt="plus" /></div>
                            <div className="col-3 text-center"><img src={require('../content/icons/sort.svg')} alt="plus" /><img className="sort_down" src={require('../content/icons/caret-down.svg')} alt="plus" /></div>
                            <div className="col-3 text-center"><img src={require('../content/icons/funnel.svg')} alt="plus" /></div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-10 sidebar">{/*<form onSubmit={this.searchInTable}>*/}<input type="text" placeholder="Find" value={this.state.searchItem} onChange={this.onInputHandleChange} />{/*</form>*/}</div>
                            <div className="col-2 pull-right"><img src={require('../content/icons/settings.svg')} alt="plus" /></div>
                        </div>
                    </div>
                </section>
                <table className="table responsive">
                    <thead>
                        <tr>
                            <th className="text-center">
                                <span onClick={this.checkAll}>{count > 0 && count < length ? <img src={require('../content/icons/square.svg')} alt="plus" /> : isChecked ? <img src={require('../content/icons/check-square.svg')} alt='plus' /> : <img src={require('../content/icons/blank-check-box.svg')} alt='plus' />}</span>
                            </th>
                            <th width="20%">Column 1 <img src={require('../content/icons/caret-down.svg')} alt="plus" /></th>
                            <th width="15%">Column 2</th>
                            <th>Column 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 ? items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td><span onClick={this.changeCheckBox.bind(this, index, item.isSelected)}>{item.isSelected ? <img src={require('../content/icons/check-square.svg')} alt='plus' /> : <img src={require('../content/icons/blank-check-box.svg')} alt='plus' />}</span>
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

                <div className="pagination row">
                    <div className="col-4">{this.state.begin}-{this.state.end > length ? length : this.state.end} of {length}</div>
                    <div className="col-4 text-center">
                        <span>{this.state.currentPage > 1 ? <img src={require('../content/icons/left.svg')} onClick={this.changeCurrentPage(this, "left")} alt="plus" /> : <img src={require('../content/icons/gray-left.svg')} alt="plus" />}</span>
                        <span> {this.state.currentPage} of {this.state.numberOfPages} </span>
                        <span>{this.state.currentPage == this.state.numberOfPages ? <img src={require('../content/icons/gray-right.svg')} alt="plus" /> : <img src={require('../content/icons/right.svg')} onClick={this.changeCurrentPage(this, "right")} alt="plus" />}</span>
                    </div>
                    <div className="col-4 text-right">
                        <label>Items per page :</label>
                        <select onChange={this.findItemsToDisplay} value={this.state.itemsPerPage}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                </div>
            </section >
        )
    }
}

export default Table;