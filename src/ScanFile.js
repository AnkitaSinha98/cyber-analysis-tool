import React from 'react';
import Scanservice from './Scanservice';


class ScanFile extends React.Component{
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
        Scanservice.scanHashService(this.state.searchTitle).then(response => {
            this.setState({ scanresult: response.data})
                console.log("scanresult", this.state.scanresult)
        });
    }

render(){
    const {searchTitle,scanresult} = this.state;
    return(
        <div>
        <div className="relative flex justify-center pt-12 lg:pt-30 px-8 py-10">
        <div className="rounded-lg shadow-2xl p-20 form">
        <label className="text-3xl text-white-100 font-bold cursive">Enter hash code</label>
        <input placeholder="Enter hash value" value={searchTitle} onChange={this.onChangeSearch}/>
        <button type="submit" className="text-4xl text-white-100 cursive" onClick={this.searchTitle}>Scan</button>
        </div>
        </div>
            <div className = "Appscan">
            <hr />  
            <div> Response Id : {scanresult.response_code} </div>
            <hr />
            <div> Message : {scanresult.verbose_msg} </div>
            <hr />
            <div> Scan ID : {scanresult.scan_id} </div>
            <hr />
            <div> Scan Date : {scanresult.scan_date} </div>
            <hr />
            <div> Resource: {scanresult.resource} </div>
            <hr />
            <div> SHA1 : {scanresult.sha1} </div>
            <hr />
            <div> SHA256 : {scanresult.sha256} </div>
            <hr />
            <div> MD5 : {scanresult.md5} </div>
            <hr />
            <div> Total Engines : {scanresult.total} </div>
            <hr />
            <div> Total Engine Detected : {scanresult.positives} </div>
            <hr />
            <div> Scan : {scanresult.scan} </div>
        </div>
        </div>
    )

}}

export default ScanFile;