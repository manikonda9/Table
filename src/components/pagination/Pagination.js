import React from "react";
import "../../content/css/pagination.css";

class Pagination extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="pagination row">
                <div className="col-4">{this.props.begin}-{this.props.end > this.props.length ? this.props.length : this.props.end} of {this.props.length}</div>
                <div className="col-4 text-center">
                    <span>{this.props.currentPage > 1 ? <img src={require('../../content/icons/left.svg')} onClick={this.props.changeCurrentPage.bind(this, "left")} alt="plus" /> : <img src={require('../../content/icons/gray-left.svg')} alt="plus" />}</span>
                    <span> {this.props.numberOfPages === 0 ? 0:this.props.currentPage} of {this.props.numberOfPages} </span>
                    <span>{this.props.currentPage === this.props.numberOfPages || this.props.numberOfPages === 0 ? <img src={require('../../content/icons/gray-right.svg')} alt="plus" /> : <img src={require('../../content/icons/right.svg')} onClick={this.props.changeCurrentPage.bind(this, "right")} alt="plus" />}</span>
                </div>
                <div className="col-4 text-right">
                    <label>Items per page : &nbsp;&nbsp;</label>
                    <select onChange={this.props.findItemsToDisplay} value={this.props.itemsPerPage}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>

        )
    }
}

export default Pagination;