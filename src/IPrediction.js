import React from 'react';
import Scanservice from './Scanservice';
import "../src/ContactForm.css";


class IPrediction extends React.Component{
    constructor(props){
        super(props);
        this.onChangeSearch=this.onChangeSearch.bind(this);
        this.searchTitle=this.searchTitle.bind(this);
        this.onChangeSearchd=this.onChangeSearchd.bind(this);
        this.searchTitled=this.searchTitled.bind(this);
        this.state = {
            scanresult:[],
            searchTitle:"",
            scanresultd:[],
            searchTitled:""
        }
    }

    onChangeSearch(e){
        const searchTitle =e.target.value;
        this.setState({
            searchTitle:searchTitle
        });
    }

    searchTitle(){
        Scanservice.scanIPService(this.state.searchTitle).then(response => {
            this.setState({ scanresult: response.data})
                console.log("scanresult", this.state.scanresult)
        });
    }

    onChangeSearchd(e){
        const searchTitled =e.target.value;
        this.setState({
            searchTitled:searchTitled
        });
    }

    searchTitled(){
        Scanservice.scanDomainService(this.state.searchTitled).then(response => {
            this.setState({ scanresultd: response.data})
                console.log("scanresult domain", this.state.scanresultd)
        });
    }

render(){
    const {searchTitle,scanresult,searchTitled,scanresultd} = this.state;
    return(
        <div>
        <div className="relative flex justify-center pt-12 lg:pt-30 px-8 py-10">
        <div className="rounded-lg shadow-2xl p-20 form">
        <label className="text-2xl text-white-100 font-bold cursive">Enter any I.P address</label>
        <input placeholder="Enter any I.P address" value={searchTitle} onChange={this.onChangeSearch}/>
        <button type="submit" className="text-3xl text-white-100 cursive" onClick={this.searchTitle}>Search</button>
        </div>
        <div className="rounded-lg shadow-3xl p-20 ml-10 form ">
        <label className="text-2xl text-white-100 font-bold cursive">I.P address details</label>
        <div>Country Code: {scanresult.country}</div>
        <div>Owner: {scanresult.as_owner}</div>
        <div>ASN: {scanresult.asn}</div>
        <div>Dataset: {scanresult.verbose_msg}</div>
        </div>
        </div>
        
        <div className="relative flex justify-center pt- lg:pt-30 px-8 py-10">
        <div className="rounded-lg shadow-2xl p-20 form">
        <label className="text-2xl text-white-100 font-bold cursive">Enter any Domain address</label>
        <input placeholder="Enter any Domain address" value={searchTitled} onChange={this.onChangeSearchd}/>
        <button type="submit" className="text-3xl text-white-100 cursive" onClick={this.searchTitled}>Search</button>
        </div>
        <div className="rounded-lg shadow-3xl p-20 ml-10 form ">
        <label className="text-2xl text-white-100 font-bold cursive">Domain Address details</label>
        <div>Category: {scanresultd.BitDefendercategory}</div>
        <div>Owner: {scanresultd.as_owner}</div>
        <div>ASN: {scanresultd.asn}</div>
        <div>Dataset: {scanresultd.verbose_msg}</div>
        </div>
        </div>
        </div>
    )

}}

export default IPrediction;