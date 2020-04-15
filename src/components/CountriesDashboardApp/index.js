import React from 'react';
import { IoMdSearch } from "react-icons/io";
/*global fetch*/
import "./index.css";
let isOneCountryStatus = false;
let oneCountryDetails;
class CountriesDashboardApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { countries: [], duplicateCountriesList: [], selectedTheme: 'Light-Mode', searchText: '', selectedRegion: '' };
    }
    componentDidMount() {
        this.getCountries();
    }

    getCountries = () => {
        fetch(`https://restcountries.eu/rest/v2/all`)
            .then(response => response.json())
            .then(json => {
                this.setState({ countries: json, duplicateCountriesList: json });
            });
    }
    getRegionOptions = () => {

    }
    displayCountries = () => {

    }
    handleOnClickOnOneCountry = (event) => {
        const oneCountryName = event.target.id;
        //console.log(oneCountryName);
        oneCountryDetails = this.state.duplicateCountriesList.find(eachCountry => eachCountry.name == oneCountryName || eachCountry.alpha3Code == oneCountryName);
        isOneCountryStatus = true;
        this.setState({ countries: [] });
    }
    handleOnClickBack = () => {
        isOneCountryStatus = false;
        this.setState({ countries: this.state.duplicateCountriesList });
    }
    filterCountriesBySelectedRegion = () => {
        const regionSelected = this.state.selectedRegion;
        const selectedRegionsList = this.state.countries.filter(eachCountry => eachCountry.region == regionSelected);
        if (regionSelected == "All") {
            this.setState({ countries: this.state.duplicateCountriesList });
        }
        else {
            this.setState({ countries: selectedRegionsList });
        }
    }
    filterCountriesBySearchText = () => {
        const countryToBeSearch = this.state.searchText;
        if (countryToBeSearch != "") {
            const countrieslistOfSearched = this.state.duplicateCountriesList.filter(eachCountry => eachCountry.name.toLowerCase().includes(countryToBeSearch.toLowerCase()));
            this.setState({ countries: countrieslistOfSearched });
        }
        else {
            this.setState({ countries: this.state.duplicateCountriesList });
        }
    }
    onChangeTheme = () => {
        if (this.state.selectedTheme == 'Light-Mode')
            this.setState({ selectedTheme: 'Dark-Mode' });
        else
            this.setState({ selectedTheme: 'Light-Mode' });
    }
    onChangeSearchText = (event) => {
        this.setState({ searchText: event.target.value });
        setTimeout(this.filterCountriesBySearchText, 10);
    }
    onChangeSelectedRegion = (event) => {
        this.setState({ selectedRegion: event.target.value });
        setTimeout(this.filterCountriesBySelectedRegion, 10);
    }
    render() {
        console.log(this.state.selectedTheme);
        return <div className={`body-Country-Dash-Board ${this.state.selectedTheme}`}>
                    <hr></hr>
                    <Header onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
                    {/*<CountriesFilterBar searchText={this.state.searchText} selectedRegion={this.state.selectedRegion} selectedTheme={this.state.selectedTheme} onChangeSelectedRegion={this.onChangeSelectedRegion} onChangeSearchText={this.onChangeSearchText}/>*/}
                    {isOneCountryStatus?<CountryCard selectedTheme={this.state.selectedTheme} allCountries={this.state.duplicateCountriesList} handleOnClickOnOneCountry={this.handleOnClickOnOneCountry} handleOnClickBack={this.handleOnClickBack}/>:<div className={this.state.selectedTheme}><CountriesFilterBar searchText={this.state.searchText} selectedRegion={this.state.selectedRegion} selectedTheme={this.state.selectedTheme} onChangeSelectedRegion={this.onChangeSelectedRegion} onChangeSearchText={this.onChangeSearchText}/><div className={`all-Countries ${this.state.selectedTheme}`}><Countries selectedTheme={this.state.selectedTheme} countries={this.state.countries} handleOnClickOnOneCountry={this.handleOnClickOnOneCountry}/></div></div>}
                </div>;
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate() {
        return true;
    }
    render() {
        return <div className={`${this.props.selectedTheme} header`}>
            <span>Where in the world</span>
            <button  className={`themeButton ${this.props.selectedTheme}`}onClick={this.props.onChangeTheme}>{this.props.selectedTheme}</button>
        </div>
    }
}

class CountriesFilterBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="filter-Bar">
            <SearchCountry onChangeSearchText={this.props.onChangeSearchText} searchText={this.props.searchText} selectedTheme={this.props.selectedTheme}/>
            <SelectRegion onChangeSelectedRegion={this.props.onChangeSelectedRegion} selectedRegion={this.props.selectedRegion} selectedTheme={this.props.selectedTheme}/>
        </div>
    }
}

class SearchCountry extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <input onChange={this.props.onChangeSearchText} type="text" placeholder="search for a country" className={`search-Bar ${this.props.selectedTheme}`}/>;
    }
}

class SelectRegion extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <select className={`dropdown ${this.props.selectedTheme}`} onChange={this.props.onChangeSelectedRegion}>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
        </select>
    }
}

class Countries extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.props.countries.map(eachCountry =>
            <div key={eachCountry.name} id={eachCountry.name} className={`card ${this.props.selectedTheme}`}  onClick={this.props.handleOnClickOnOneCountry}>
                <div className="country-Img-Name" id={eachCountry.name}>
                    <img src={eachCountry.flag} className="country-Img" id={eachCountry.name}/>
                    <span className="country-Name" id={eachCountry.name}><b>{eachCountry.name}</b></span>
                </div>
                <div className="country-Sub-Details" id={eachCountry.name}>
                    <span id={eachCountry.name}><b>Population: </b>{eachCountry.population}</span>
                    <span id={eachCountry.name}><b>Region: </b>{eachCountry.region}</span>
                    <span id={eachCountry.name}><b>Capital: </b>{eachCountry.capital}</span>
                </div>
            </div>

        );
    }
}

class CountryCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.selectedTheme);
        return (<div className={`country-Card ${this.props.selectedTheme}`}>
            <button onClick={this.props.handleOnClickBack} className={`back-Button-Styles ${this.props.selectedTheme}`}>Back</button>
            <div className="one-Country">
                <img src={oneCountryDetails.flag} className="one-Country-img"/>
                <div className="one-Country-All-Details">
                    <span><b>{oneCountryDetails.name}</b></span>
                    <div className="one-Country-Details">
                        <div className="country-Sub-Details-1">
                            <span><b>Nativename: </b>{oneCountryDetails.nativeName}</span>
                            <span><b>Population: </b>{oneCountryDetails.population}</span>
                            <span><b>Region: </b>{oneCountryDetails.region}</span>
                            <span><b>SubRegion: </b>{oneCountryDetails.subregion}</span>
                            <span><b>Capital: </b>{oneCountryDetails.capital}</span>
                        </div>
                        <div className="country-Sub-Details-2">
                            <span><b>Top-Level-Domain: </b>{oneCountryDetails.topLevelDomain[0]}</span>
                            <span><b>Currency: </b>{oneCountryDetails.currencies[0].code} {oneCountryDetails.currencies[0].name} {oneCountryDetails.currencies[0].symbol}</span>
                            <span><b>Languages: </b>{oneCountryDetails.languages.map(eachLanguage=>eachLanguage.name).join(',')}</span>
                        </div>
                    </div>
                    <span className="border-Countries-Details"><b>Border Countries: </b><br/>{oneCountryDetails.borders.map(eachCountry=><button onClick={this.props.handleOnClickOnOneCountry} id={eachCountry}className="border-Countries" key={eachCountry}>{eachCountry}</button>)}</span>
                </div>
            </div>
        </div>);
    }
}

export default CountriesDashboardApp;
