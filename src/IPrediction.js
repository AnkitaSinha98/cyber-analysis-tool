import React from 'react';
import Scanservice from './Scanservice';
import "../src/ContactForm.css";


class IPrediction extends React.Component{
    constructor(props){
        super(props);
        this.onChangeSearch=this.onChangeSearch.bind(this);
        this.searchTitle=this.searchTitle.bind(this);
        this.state = {
            scanresult:[],
            searchTitle:""
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

render(){
    const {searchTitle, scanresult} = this.state;
    return(
        
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
    )

}}

export default IPrediction;