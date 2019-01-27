import React from "react";
import "./pagination.css";

class Pagination extends React.Component {
    render() {
        return (
            <div className="pagination row">
                <div className="col-4">{this.state.begin}-{this.state.end > length ? length : this.state.end} of {length}</div>
                <div className="col-4 text-center">
                    <span>{this.state.currentPage > 1 ? <img src={require('../../content/icons/left.svg')} onClick={this.changeCurrentPage(this, "left")} alt="plus" /> : <img src={require('../../content/icons/gray-left.svg')} alt="plus" />}</span>
                    <span> {this.state.currentPage} of {this.state.numberOfPages} </span>
                    <span>{this.state.currentPage === this.state.numberOfPages ? <img src={require('../../content/icons/gray-right.svg')} alt="plus" /> : <img src={require('../../content/icons/right.svg')} onClick={this.changeCurrentPage(this, "right")} alt="plus" />}</span>
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

        )
    }
}

export default Pagination;