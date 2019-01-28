import React from "react";
import "./filters.css";

class Filters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <section className="row filters">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="row">
                        <div className="col-12 col-sm-2 col-md-2 col-lg-2 items">Items ({this.props.length})</div>
                        <div className="col-12 col-sm-5 col-md-5 col-lg-5 text-center selected">{this.props.selectCount ? this.props.selectCount : "Nothing"} Selected <img src={require('../../content/icons/caret-down.svg')} alt="plus" /></div>
                        <div className="col-10 col-sm-4 col-md-4 col-lg-4 text-center"><button className="btn something_btn">Do something</button></div>
                        <div className="col-2 col-sm-1 col-md-1 col-lg-1 text-center"><img src={require('../../content/icons/add.svg')} alt="plus" /></div>
                    </div>
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                    <div className="row">
                        <div className="col-3 text-center sidebar"><img src={require('../../content/icons/check.svg')} alt="plus" /></div>
                        <div className="col-3 text-center"><img src={require('../../content/icons/menu.svg')} alt="plus" /></div>
                        <div className="col-3 text-center"><img src={require('../../content/icons/sort.svg')} alt="plus" /><img className="sort_down" src={require('../../content/icons/caret-down.svg')} alt="plus" /></div>
                        <div className="col-3 text-center"><img src={require('../../content/icons/funnel.svg')} alt="plus" /></div>
                    </div>
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                    <div className="row">
                        <div className="col-10 sidebar">{/*<form onSubmit={this.searchInTable}>*/}<input type="text" placeholder="Find" value={this.props.searchItem} onChange={this.props.change} />{/*</form>*/}</div>
                        <div className="col-2 pull-right"><img src={require('../../content/icons/settings.svg')} alt="plus" /></div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Filters;