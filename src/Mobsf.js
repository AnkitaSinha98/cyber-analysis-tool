import React from "react";
import "../src/App.css";
import { post } from "axios";
import exportFromJSON from "export-from-json";

const fileName = "exportfile";
const exportType = "txt";

const fileNamemob = "exportfilemob";
const exportTypemob = "txt";

class Mobsf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      scanresult: [],
      scanresultmob: [],
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then((response) => {
      this.setState({ scanresult: response.data });
      this.fileScan(
        response.data.file_name,
        response.data.hash,
        response.data.scan_type,
        response.data.status
      ).then((response) => {
        this.setState({ scanresultmob: response.data });
        console.log("File Scan", response.data);
      });
      console.log("File upload", response.data);
    });
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  fileUpload(file) {
    const url = "http://localhost:8000/api/v1/upload";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization:
          "9c80958b09321e399258024c72defe8336bc4e3e3f3fdf9b2f619ca38e5e8978",
      },
    };

    return post(url, formData, config);
  }

  fileScan(file_name, hash, scan_type, status) {
    const url = "http://localhost:8000/api/v1/scan";
    const formData = new FormData();
    formData.append("file_name", file_name);
    formData.append("hash", hash);
    formData.append("scan_type", scan_type);

    const config = {
      headers: {
        "content-type": "application/json",
        Authorization:
          "9c80958b09321e399258024c72defe8336bc4e3e3f3fdf9b2f619ca38e5e8978",
      },
    };

    return post(url, formData, config);
  }

  ExportToExcel = () => {
    const { scanresult } = this.state;
    console.log("Scan result Export", scanresult);
    const data = JSON.stringify(scanresult);
    exportFromJSON({ data, fileName, exportType });
  };

  ExportToExcelScan = () => {
    const { scanresultmob } = this.state;
    console.log("Scan result Export", scanresultmob);
    const data = JSON.stringify(scanresultmob);
    exportFromJSON({ data, fileNamemob, exportTypemob });
  };

  render() {
    return (
      <div>
        <div className="relative flex justify-center pt-12 lg:pt-30 px-8 py-10">
          <div className="rounded-lg shadow-2xl p-20 form">
            <label className="text-3xl text-white-100 font-bold cursive">
              Mobsf Scan
            </label>
            <form
              onSubmit={this.onFormSubmit}
              className="ml-20 text-l text-white-100 "
            >
              <input type="file" onChange={this.onChange} />
              <br />
              <button type="submit" className=" ml-20 text-2xl cursive">
                Upload
              </button>
            </form>
          </div>
        </div>
        <div className="Appx ">
          <div>
            <button
              type="submit"
              className="text-4xl text-black cursive"
              onClick={this.ExportToExcel}
            >
              Export Upload Data
            </button>
            <br />
            <br />
            <button
              type="submit"
              className="text-4xl text-black cursive"
              onClick={this.ExportToExcelScan}
            >
              Export Scan Data
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Mobsf;
