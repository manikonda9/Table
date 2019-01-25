import React from "react";
import "./table.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/font-awesome/css/font-awesome.css";
import plus from "../content/icons/plus.svg"

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isChecked:false,
            selectCount : 0,
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
                }
            ]
        }
    }

    componentWillMount = () => {
        let items = this.state.data;
        items.forEach(function(element){
            element.isSelected = false;
        });

        this.setState({
            items: this.state.data,
            selectCount :0
        })
    }

    onInputHandleChange = (event) => {
        this.setState({
            searchItem: event.target.value
        })
    }

    changeCheckBox = (id,value) =>{
        let items = this.state.data;
        let count = this.state.selectCount;
        items.forEach(function(element,index){
            if(index === id){
                if(value){
                    element.isSelected = false;
                    count--;
                }else{
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

    searchInTable = (event) => {
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
            searchItem: ""
        })
    }

    checkAll = (event) =>{
        const checkValue = event.target.checked;
        let items = this.state.data;
        let count;
        if(checkValue){
            items.forEach(function(element){
                element.isSelected = true;
            })
            count = items.length;
        }else{
            items.forEach(function(element){
                element.isSelected = false;
            })
            count = 0;
        }

        this.setState({
            items:items,
            selectCount : count,
            isChecked : checkValue
        })
    }
    render() {
        const items = this.state.items;
        let isChecked = this.state.isChecked;
        let count = this.state.selectCount;
        return (
            <section>
                <section className="row filters">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 items">Items ({items.length})</div>
                            <div className="col-5 text-center selected">{this.state.selectCount? this.state.selectCount:"Nothing"} Selected <img src={require('../content/icons/caret-down.svg')} alt="plus" /></div>
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
                            <div className="col-10 sidebar"><form onSubmit={this.searchInTable}><input type="text" placeholder="Find" value={this.state.searchItem} onChange={this.onInputHandleChange} /></form></div>
                            <div className="col-2 pull-right"><img src={require('../content/icons/settings.svg')} alt="plus" /></div>
                        </div>
                    </div>
                </section>
                <table className="table responsive">
                    <thead>
                        <tr>
                            <th className="text-center">
                            {/* {isChecked?<img src={require('../content/icons/check-square.svg')} alt='plus' />:<img src={require('../content/icons/blank-check-box.svg')} alt='plus' />} */}
                            <input type="checkbox" checked={isChecked} onChange={this.checkAll} /></th>
                            <th width="20%">Column 1 <img src={require('../content/icons/caret-down.svg')} alt="plus" /></th>
                            <th width="15%">Column 2</th>
                            <th>Column 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length>0?items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{/*<img src={require('../content/icons/blank-check-box.svg')} alt="plus" />*/}<input type="checkbox" checked={item.isSelected} onChange={this.changeCheckBox.bind(this,index,item.isSelected)} /></td>
                                    <td>{item.Column1}{/* <img src={require('../content/icons/square.svg')} alt="plus" /> */}</td> 
                                    <td>{item.Column2}{/*<img src={require('../content/icons/check-square.svg')} alt="plus" /> */}</td>
                                    <td>{item.Column3}</td>
                                </tr>
                            )
                        }):<tr><td colSpan="4" className="text-center">No Results Found</td></tr>}
                    </tbody>
                    <tfoot></tfoot>
                </table>

                {/*<div className="pagination">
                    <div>1-50 of 275</div>
                    <div>
                        <img src={require('../content/icons/left.svg')} alt="plus" />
                        <span> 1 of 6 </span>
                        <img src={require('../content/icons/right.svg')} alt="plus" />
                    </div>
                    <div>
                        <label>Items per page :</label>
                        <select>
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </div>
                    </div>*/}
            </section>
        )
    }
}

export default Table;