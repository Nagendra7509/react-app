import React from 'react';
/*global fetch*/
import "./index.css";
import CovidGraph from "../CovidGraphs/index.js";
let oneCountry = [];
let statusOneCountry = false;


class ContriesData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { countryList: [], duplicateCountryList: [], Mode: "Light Mode" };
    }
    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({ countryList: json });
                this.setState({ duplicateCountryList: json });
            });
    }
    showCountryDetails = (event) => {
        const eventId = event.target.id;
        oneCountry = this.state.duplicateCountryList.filter(obj => obj.name == eventId);
        statusOneCountry = true;
        this.setState({ countryList: [] });

    }
    allCountryList = () => {
        return (this.state.countryList.map(country => {
            return <div className={this.state.Mode=="Light Mode"?"countryTemplate-white":"countryTemplate-black"} onClick={this.showCountryDetails}  key={country.name} id={country.name}>
                        <img src={country.flag} className="country-Images"  id={country.name}/>
                        <span><b>{country.name}</b></span>
                        <span><b>Population:</b>{country.population}</span>
                        <span><b>Region:</b>{country.region}</span>
                        <span><b>Capital:</b>{country.capital}</span>
                    </div>;
        }));
    }
    filterRegions = (event) => {
        const regionName = event.target.value;
        if (regionName != "All") {
            const regionList = this.state.duplicateCountryList.filter(obj => (obj.region == regionName));
            this.setState({ countryList: regionList });
        }
        else {
            this.setState({ countryList: this.state.duplicateCountryList });
        }
    }
    searchingCountry = (event) => {
        if (event.keyCode === 13) {
            const countryNameToBeSearch = event.target.value;
            const countryNameToBeSearchList = this.state.duplicateCountryList.filter(obj => obj.name.toLowerCase().includes(countryNameToBeSearch.toLowerCase()));
            this.setState({ countryList: countryNameToBeSearchList });
        }
    }
    backAgainToPrevious = () => {
        statusOneCountry = false;
        this.setState({ countryList: this.state.duplicateCountryList });
    }
    templateofOneCountry = () => {
        return (<div>
                     <div>
                         <button onClick={this.backAgainToPrevious} className={this.state.Mode=="Light Mode"?"backBtn-white":"backBtn-black"}>Back</button>
                     </div>
                     <div className={this.state.Mode=="Light Mode"?"one-Country-white":"one-Country-black"}>
                         <img src={oneCountry[0].flag} className="show-One-Country-img"/>
                         <div className={this.state.Mode=="Light Mode"?"one-Country-Details-white":"one-Country-Details-black"}>
                            <div className="country-Details-1">
                                <span><b>{oneCountry[0].name}</b></span>
                                <span><b>Nativename:</b>{oneCountry[0].nativeName}</span>
                                <span><b>Population:</b>{oneCountry[0].population}</span>
                                <span><b>Region:</b>{oneCountry[0].region}</span>
                                <span><b>SubRegion:</b>{oneCountry[0].subregion}</span>
                                <span><b>Capital:</b>{oneCountry[0].capital}</span>
                            </div>
                            <div className="country-Details-2">
                                <span><b>Top-Level-Domain:</b>{oneCountry[0].topLevelDomain[0]}</span>
                                <span><b>Currency:</b>{oneCountry[0].currencies[0].code} {oneCountry[0].currencies[0].name} {oneCountry[0].currencies[0].symbol}</span>
                                <span><b>Languages:</b>{oneCountry[0].languages[0].name}</span>
                            </div>
                         </div>
                     </div>
                 </div>);

    }
    modeChange = (event) => {
        if (this.state.Mode == "Light Mode") {
            this.setState({ Mode: "Dark Mode" });
        }
        else {
            this.setState({ Mode: "Light Mode" });
        }
    }
    render() {
        /*   return statusOneCountry ? <div className={this.state.Mode=="Light Mode"?"one-Country-header-white":"one-Country-header-black"}>{this.templateofOneCountry()}{<CovidGraph countryCode={oneCountry[0].alpha3Code}/>}</div> : (<div>
            <div className={this.state.Mode=="Light Mode"?"top-Panel-white":"top-Panel-black"}>
                <h1>Where in the World</h1>
                <button onClick={this.modeChange}>{this.state.Mode}</button>
            </div>
            <div className={this.state.Mode=="Light Mode"?"searchBar-dropDown-white":"searchBar-dropDown-black"}>
                <input type="text" placeholder="Search Country" className="search-Bar" onKeyDown={this.searchingCountry}/>
                <div>
                <select id="cars" onChange={this.filterRegions}>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americans</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
                </div>
            </div>
            <div className={this.state.Mode=="Light Mode"?"country-Status-App-white":"country-Status-App-black"}>
                 {this.state.countryList.length>0 && this.allCountryList()}
            </div>
            </div>);*/
        return (<div className={this.state.Mode=="Light Mode"?"app-white":"app-black"}>
                    <hr/>
                    <div className={this.state.Mode=="Light Mode"?"top-Panel-white":"top-Panel-black"}>
                            <span><b>Where in the World</b></span>
                            <button onClick={this.modeChange} className={this.state.Mode=="Light Mode"?"modeChange-white":"modeChange-black"}>{this.state.Mode}</button>
                    </div> 
                    {statusOneCountry ? <div className={this.state.Mode=="Light Mode"?"one-Country-header-white":"one-Country-header-black"}>{this.templateofOneCountry()}{<CovidGraph countryCode={oneCountry[0].alpha3Code} mode={this.state.Mode}/>}</div>:
                        <div>
                            <div className={this.state.Mode=="Light Mode"?"searchBar-dropDown-white":"searchBar-dropDown-black"}>
                                <input type="text" placeholder="Search for a country" className={this.state.Mode=="Light Mode"?"search-Bar-white":"search-Bar-black"} onKeyDown={this.searchingCountry}/>
                                <div>
                                    <select id="cars" onChange={this.filterRegions} className={this.state.Mode=="Light Mode"?"dropDown-white":"dropDown-black"}>
                                        <option value="All">All</option>
                                        <option value="Africa">Africa</option>
                                        <option value="Americas">Americans</option>
                                        <option value="Asia">Asia</option>
                                        <option value="Europe">Europe</option>
                                        <option value="Oceania">Oceania</option>
                                    </select>
                                </div>
                            </div>
                            <div className={this.state.Mode=="Light Mode"?"country-Status-App-white":"country-Status-App-black"}>
                                {this.state.countryList.length>0 && this.allCountryList()}
                            </div>
                        </div>
                    }
                </div>);
    }



}


function CountriesStatus() {
    return <ContriesData />;
}

export default CountriesStatus;
