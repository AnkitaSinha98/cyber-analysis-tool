import React from 'react';
import Scanservice from './Scanservice';
import Barchart from '../src/Barchart';
import Radar from '../src/Radarchart';



class Analyse extends React.Component{
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
    const {searchTitle} = this.state;
    return(
        <div className = "Appx">
        <div className="relative flex justify-center pt-12 lg:pt-30 px-8 py-10">
        <div className="rounded-lg shadow-2xl p-20 form">
        <label className="text-3xl text-white-100 font-bold cursive">Hash Analysis</label>
        <input placeholder="Enter hash value" value={searchTitle} onChange={this.onChangeSearch}/>
        <button type="submit" className="text-4xl text-white-100 cursive" onClick={this.searchTitle}>Scan</button>
        </div>
        </div>
        <label className="text-3xl text-white-100 font-bold cursive">Pie Chart Analysis</label>
        <td className="relative flex justify-center pt-12 lg:pt-30 px-8 py-10">  <Barchart/> <Barchart/> <Barchart/> </td>
        <label className="text-3xl text-white-100 font-bold cursive">Radar Chart Analysis</label>
        <td className="relative flex justify-center pt-12 py-5">  <Radar/></td>
  
        </div>
    )

}}

export default Analyse;