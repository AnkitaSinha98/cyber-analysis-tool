import React from "react";
import Scanservice from "./Scanservice";

class Browsing extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.state = {
      scanresult: [],
      searchTitle: "",
    };
  }

  onChangeSearch(e) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle,
    });
  }

  searchTitle() {
    Scanservice.scanBrowsingService(this.state.searchTitle).then((response) => {
      this.setState({ scanresult: response.data });
      console.log(response.data.matches);
    });
  }

  //http://malware.testing.google.test/testing/malware/ ---> Malware Site
  render() {
    const { searchTitle, scanresult } = this.state;
    const fr = scanresult;
    console.log("Scan result fr", fr);

    return (
      <div>
        <div className="relative flex justify-center pt-12 lg:pt-30 px-8 py-10">
          <div className="rounded-lg shadow-2xl p-20 form">
            <label className="text-3xl text-white-100 font-bold cursive">
              Safe Search
            </label>
            <input
              placeholder="Enter the Browser URL"
              value={searchTitle}
              onChange={this.onChangeSearch}
            />
            <button
              type="submit"
              className="text-4xl text-white-100 cursive"
              onClick={this.searchTitle}
            >
              Scan
            </button>
          </div>
        </div>
        <div className="Appscan"></div>
      </div>
    );
  }
}

export default Browsing;
