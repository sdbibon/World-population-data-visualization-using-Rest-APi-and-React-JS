import React, { Component } from "react";
import $ from "jquery";
import WorldMap from "./map";
import Chart from "./chart";

class ZoomPan extends Component {
  constructor() {
    super();
    this.state = {
      center: [0, 20],
      zoom: 1,
      cities: [
        { name: "Switzerland", coordinates: [8.5417, 47.3769] },
        { name: "Malaysia", coordinates: [103.8198, 1.3521] },
        { name: "Nigeria", coordinates: [3.3792, 6.5244] },
        { name: "China", coordinates: [121.4737, 31.2304] }
      ],
      cityInfo: [
        {
          name: "populationByYear",
          label: "Population by Year"
        },
        { name: "populationByAge", label: "Gender Population by Age" },
        { name: "lifeExpectancy", label: "Remaining Life Expectancy" }
      ],
      yearSelected: "",
      ageList: "",
      populationYear: false,
      populationAge: false,
      lifeExpectancy: false,
      info: "",
      chartType: "",
      dob: "",
      sex: "",
      countryName: "",
      fieldSelected: ""
    };
    this.handleCitySelection = this.handleCitySelection.bind(this);
    this.handleCountrySelection = this.handleCountrySelection.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.getCityInfo = this.getCityInfo.bind(this);
    this.cityPopulation = this.cityPopulation.bind(this);
    this.cityAgePopulation = this.cityAgePopulation.bind(this);
    this.handleSetDOB = this.handleSetDOB.bind(this);
    this.handleSetYear = this.handleSetYear.bind(this);
    this.handleSetSex = this.handleSetSex.bind(this);
    this.getLifeExpectancy = this.getLifeExpectancy.bind(this);
    this.subCatReset = this.subCatReset.bind(this);
  }

  handleCitySelection(evt) {
    const cityId = evt.target.getAttribute("data-city");
    const city = this.state.cities[cityId];
    this.setState({
      center: city.coordinates,
      zoom: 2,
      countryName: city.name,
      selectCity: city.name
    });
  }
  handleCountrySelection(evt) {
    this.setState({
      countryName: evt.properties.name
    });
  }
  handleReset() {
    this.setState({
      center: [0, 20],
      zoom: 1,
      populationYear: false,
      populationAge: false,
      lifeExpectancy: false,
      info: "",
      countryName: ""
    });
  }

  subCatReset() {
    this.setState({
      populationYear: false,
      populationAge: false,
      lifeExpectancy: false,
      info: ""
    });
  }
  getCityInfo(evt) {
    const cityInfoId = evt.target.getAttribute("data-cityInfo");
    const cityInfo = this.state.cityInfo[cityInfoId];
    if (cityInfo.name === "populationByYear") {
      this.setState({
        populationYear: true
      });
    }
    if (cityInfo.name === "populationByAge") {
      this.setState({
        populationAge: true
      });
    }
    if (cityInfo.name === "lifeExpectancy") {
      this.setState({
        lifeExpectancy: true
      });
    }
  }

  // Function to get the city population by year
  cityPopulation(event) {
    const populationYear = this.state.yearSelected;
    this.setState({ fieldSelected: populationYear });
    event.preventDefault();
    console.log(this.state.yearSelected);
    $.ajax({
      url: `https://api.population.io:443/1.0/population/${populationYear}/${
        this.state.countryName
      }/`,
      dataType: "json",
      success: function(data) {
        const tempAge = {
          labels: [],
          datasets: [
            {
              label: "Population",
              data: [],
              // fill: [
              // "rgba(54, 162, 235, 0.6)",
              // ]
              backgroundColor: [
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)"
              ]
            }
          ]
        };
        data.map((dataList, i) => {
          const obj = `Age ${dataList.age}`;
          tempAge.labels.push(obj);
          const data = dataList.total;
          tempAge.datasets[0].data.push(data);
        });
        this.setState({
          info: tempAge,
          chartType: "Line"
        });
      }.bind(this)
    });
  }

  // Function to get the gender population by age
  cityAgePopulation(evt) {
    const age = this.state.ageList;
    this.setState({ fieldSelected: age });
    evt.preventDefault();
    $.ajax({
      url: `https://api.population.io:443/1.0/population/2019/${
        this.state.countryName
      }/${age}/`,
      dataType: "json",
      success: function(data) {
        const tempAge = {
          labels: ["Male", "Female"],
          datasets: [
            {
              label: "Population",
              data: [],
              backgroundColor: [
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)"
              ]
            }
          ]
        };
        data.map((dataList, i) => {
          const male = dataList.males;
          const female = dataList.females;
          tempAge.datasets[0].data.push(male, female);
        });
        this.setState({
          info: tempAge,
          chartType: "Bar"
        });
      }.bind(this)
    });
  }

  handleSetDOB(event) {
    this.setState({ dob: event.target.value });
  }

  handleSetSex(event) {
    this.setState({ sex: event.target.value.toLowerCase() });
    console.log(this.state.sex);
  }

  handleSetYear(event) {
    this.setState({ yearSelected: event.target.value });
  }
  handleSetAge(event) {
    this.setState({ ageList: event.target.value });
  }

  // Function to calculate the life expectancy
  getLifeExpectancy(event) {
    const sex = this.state.sex;
    const dob = this.state.dob;
    console.log(sex);
    event.preventDefault();
    $.ajax({
      url: `https://api.population.io:443/1.0/life-expectancy/total/${sex}/${
        this.state.countryName
      }/${dob}/`,
      dataType: "json",
      success: function(data) {
        const tempAge = {
          labels: ["Tentative Years Left", "Years lived"],

          datasets: [
            {
              label: "Life Expectancy",
              data: [],
              backgroundColor: [
                "rgba(255, 206, 86, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)"
              ]
            }
          ]
        };
        let ageFInd = +new Date(dob);
        let ageCalculated = ~~((Date.now() - ageFInd) / 31557600000);
        tempAge.datasets[0].data.push(
          data.total_life_expectancy - ageCalculated
        );
        tempAge.datasets[0].data.push(ageCalculated);
        this.setState({
          info: tempAge,
          chartType: "Pie"
        });
      }.bind(this)
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#ffffff" }}>
        <div
          style={{
            fontFamily: "'Rubik' sans-serif",
            marginTop: "10px",
            marginLeft: "20px",
            marginRight: "20px"
          }}
        >
          <center />
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <span
              style={{
                fontSize: "50px",
                textAlign: "center",
                color: "black",
                textShadow: "-2px 2px #58FAF4"
              }}
            >
              <bold>WORLD POPULATION</bold>
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                border: "1px solid #e1e1e1",
                padding: "10px",
                borderRadius: "10px"
              }}
            >
              <div
                style={{
                  marginTop: "10px",
                  padding: "0px 10px",
                  border: " 1px solid #e1e1e1",
                  borderRadius: "5px",
                  backgroundColor: "#f7f7f7"
                }}
              >
                <p style={{ color: "#585858", fontSize: "15px" }}>
                  Click on the country to zoom:
                </p>
              </div>

              {this.state.cities.map((city, i) => (
                <button
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    color: "white",
                    borderRadius: "4px",
                    textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                    background: "rgb(66, 184, 221)",
                    border: "0px",
                    padding: "5px",
                    fontSize: "13px"
                  }}
                  key={i}
                  className="btn px1"
                  data-city={i}
                  onClick={this.handleCitySelection}
                >
                  {city.name}
                </button>
              ))}
              <button
                style={{
                  display: "flex",
                  marginTop: "20px",
                  color: "white",
                  borderRadius: "4px",
                  textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                  background: "#F72B4D",
                  border: "0px",
                  padding: "5px",
                  fontSize: "13px"
                }}
                onClick={this.handleReset}
              >
                {"Back"}
              </button>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <WorldMap
                handleCountrySelection={this.handleCountrySelection}
                countryName={this.state.countryName}
                cities={this.state.cities}
                center={this.state.center}
                zoom={this.state.zoom}
              />
            </div>
          </div>
          {this.state.countryName && (
            <div
              style={{
                marginTop: "10px",
                padding: "0px 10px",
                border: " 1px solid #e1e1e1",
                borderRadius: "5px",
                backgroundColor: "#f7f7f7"
              }}
            >
              <p style={{ color: "#585858", fontSize: "15px" }}>
                Country : {this.state.countryName}
              </p>
            </div>
          )}
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <div className="list" style={{ width: "207px" }}>
                {this.state.countryName &&
                  this.state.cityInfo.map((cityInfo, i) => (
                    <button
                      style={{
                        display: "flex",
                        marginTop: "20px",
                        color: "white",
                        borderRadius: "4px",
                        textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                        background: "rgb(66, 184, 221)",
                        border: "0px",
                        padding: "5px",
                        fontSize: "13px"
                      }}
                      key={i}
                      className="btn px1"
                      data-cityInfo={i}
                      onClick={this.getCityInfo}
                    >
                      {cityInfo.label}
                    </button>
                  ))}
                {this.state.countryName && (
                  <button
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      color: "white",
                      borderRadius: "4px",
                      textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                      background: "#F72B4D",
                      border: "0px",
                      padding: "5px",
                      fontSize: "13px"
                    }}
                    className="btn btn-primary"
                    onClick={this.subCatReset}
                  >
                    {"Back"}
                  </button>
                )}
              </div>
              <div
                className="sub-list"
                style={{ marginTop: "20px", marginLeft: "20px" }}
              >
                {this.state.populationYear && !this.state.info ? (
                  <form onSubmit={this.cityPopulation}>
                    <div style={{ marginTop: "30px" }}>
                      <span style={{ marginRight: "5px" }}>
                        Enter the year:
                      </span>
                      <input
                        style={{ marginRight: "5px", width: "90px" }}
                        type="number"
                        min="1950"
                        max="2050"
                        value={this.state.value}
                        onChange={this.handleSetYear}
                        placeholder="YYYY"
                      />
                      <input
                        style={{
                          color: "white",
                          borderRadius: "4px",
                          textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                          background: "rgb(66, 184, 221)",
                          border: "0px",
                          padding: "5px",
                          fontSize: "13px"
                        }}
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                ) : this.state.populationAge && !this.state.info ? (
                  <form onSubmit={this.cityAgePopulation}>
                    <div style={{ marginTop: "30px" }}>
                      <span style={{ marginRight: "5px" }}>Enter the age:</span>
                      <input
                        style={{ marginRight: "5px", width: "90px" }}
                        type="number"
                        min="0"
                        max="100"
                        value={this.state.value}
                        onChange={this.handleSetAge}
                        placeholder="0-100"
                      />
                      <input
                        style={{
                          color: "white",
                          borderRadius: "4px",
                          textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                          background: "rgb(66, 184, 221)",
                          border: "0px",
                          padding: "5px",
                          fontSize: "13px"
                        }}
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                ) : this.state.lifeExpectancy && !this.state.info ? (
                  <form onSubmit={this.getLifeExpectancy}>
                    <div style={{ marginTop: "40px" }}>
                      <label style={{ marginRight: "10px" }}>
                        Date of Birth:
                        <input
                          style={{ marginLeft: "5px", width: "130px" }}
                          type="date"
                          value={this.state.value}
                          onChange={this.handleSetDOB}
                          placeholder="YYYY-MM-DD"
                        />
                      </label>
                      <label>
                        Gender:
                        <select onChange={this.handleSetSex}>
                          <option value="not selected">Not selected</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </label>
                      <input
                        style={{
                          marginLeft: "10px",
                          color: "white",
                          borderRadius: "4px",
                          textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                          background: "rgb(66, 184, 221)",
                          border: "0px",
                          padding: "5px",
                          fontSize: "13px"
                        }}
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                ) : null}
              </div>
            </div>
            {this.state.info && (
              <div className="chart" style={{ width: "100%", height: "500px" }}>
                <Chart
                  fieldSelected={this.state.fieldSelected}
                  chartData={this.state.info}
                  legendPosition="bottom"
                  chartType={this.state.chartType}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ZoomPan;
