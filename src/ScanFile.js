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
    const {searchTitle} = this.state;
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
            {/* <div>
            {
            this.state.scanresult.map((scan =>
              <th key={`${scan.scan_id}`}>
              <div>
              <div>
                {scan.resource}
                <div>
                  {
                    scan.scans.map(d => (
                      <div>
                        {d.Bkav}
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </th>
        ))
      }
    </div> */}
        </div>
    );
}

}

export default ScanFile;