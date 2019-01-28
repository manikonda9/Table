import React from "react";
import Filters from "../filters/Filters";
import Table from "../table/Table";
import Pagination from "../pagination/Pagination";

class ProductTable extends React.Component {
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
        }
    }

    componentWillMount = () => {
        let items = this.state.data;
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
        let items;
        if (event) {
            value = Number.parseInt(event.target.value);
        } else {
            value = this.state.itemsPerPage;
        }

        if(this.state.items){
            items = this.state.items;
        }else{
            items = this.state.data;
        }
        let begin = ((this.state.currentPage - 1) * value);
        let end = Number.parseInt(begin + value);
        let numberOfPages = items.length / value;
        numberOfPages = Math.ceil(numberOfPages);
        const filteredItems = items.slice(begin, end);
        this.setState({
            begin: begin + 1,
            end: end,
            itemsPerPage: value,
            filteredItems: filteredItems,
            numberOfPages: numberOfPages,
        });
    };

    changeCurrentPage = (value) => {
        if (value == "left") {
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        } else {
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }

        this.findItemsToDisplay();
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
        this.findItemsToDisplay();
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
                <Filters length={length} searchItem={this.state.searchItem} selectCount={this.state.selectCount} change={this.onInputHandleChange} />
                <Table filteredItems={items} isChecked={isChecked} count={count} length={length} 
                data={this.state.data}
                checkAll={this.checkAll} 
                changeCheckBox={this.changeCheckBox} />
                <Pagination length={length} begin={this.state.begin} end={this.state.end} currentPage={this.state.currentPage} 
                 itemsPerPage={this.state.itemsPerPage} findItemsToDisplay={this.findItemsToDisplay} numberOfPages={this.state.numberOfPages}
                 changeCurrentPage={this.changeCurrentPage} />
            </section>
        )
    }
}

export default ProductTable;