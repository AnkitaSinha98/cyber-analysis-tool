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
        <div className="Apps">
            <div>
            <input
            type="text-color black"
            placeholder="Search"
            value={searchTitle}
            onChange={this.onChangeSearch}
           />
           </div>
           <div>
            <button
            className = "btn btn-outline-secondary"
            type = "button"
            onClick={this.searchTitle}
            >Search</button>
            </div>
            <div>
            </div>

            <div className = "Appx">
            <div> Response Id : {scanresult.response_code} </div>
        
            <div> Message : {scanresult.verbose_msg}</div>
{/* 

            <table className ="table table-striped">
                <thead>
                    <tr>
                        <td > Response Id </td>
                        <td> Message </td>
                        <td> Scan ID </td>
                        <td> Scan Date</td>
                        <td> Resource </td>
                        <td> SHA 1 </td>
                        <td> SHA 256 </td>
                        <td> MD 5 </td>
                        <td> Total Engines </td>
                        <td> Total Engine Detected </td>
                        <td> PermaLink </td>
                        <td>Scan </td>
                    </tr>
                </thead>
                <tbody>
                            <tr>
                                <td> Response Id : {scanresult.response_code} </td>
                                <td> Message : {scanresult.verbose_msg}</td>
                                <td> {scanresult.scan_id} </td>
                                <td> {scanresult.scan_date} </td>
                                <td> {scanresult.resource}</td>
                                <td> {scanresult.sha1} </td>
                                <td> {scanresult.sha256} </td>
                                <td> {scanresult.md5} </td>
                                <td> {scanresult.tottal} </td>
                                <td> {scanresult.positives} </td>
                                <td> {scanresult.permalink} </td>
                                <td> {scanresult.scan} </td>
                            </tr>
                        
                </tbody>
            </table> */}
</div>
        </div>
    )

}}

export default ScanFile;