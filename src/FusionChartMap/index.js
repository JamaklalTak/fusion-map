import React, { useState } from 'react';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import WorlWithCountries from 'fusioncharts/maps/fusioncharts.worldwithcountries';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Maps, WorlWithCountries, FusionTheme);

const FusionChartMap = () => {
  const [activeCountry, setActiveCountry] = useState('');

  const dataSource = {
    chart: {
      caption: 'Average Annual Population Growth',
      subcaption: ' 1955-2015',
      showLabels: '0',
      nullentityfillcolor: '#E3F2FD',
      entityFillHoverColor: '#e80f0f'
    },
    colorrange: {
      gradient: "0",
      color: [
        {
          displayvalue: 'active',
          code: "#e80f0f"
        }
      ]
    },
    //Note: keep data here related to countries
    // data: [ 
    //   { id: 'NA', value: '.82', showLabel: '1' },
    //   { id: 'SA', value: '2.04', showLabel: '1' },
    //   { id: 'AS', value: '1.78', showLabel: '1' },
    //   { id: 'EU', value: '.40', showLabel: '1' },
    //   { id: 'AF', value: '2.58', showLabel: '1' },
    //   { id: 'AU', value: '1.30', showLabel: '1' }
    // ]
  };

  const chartConfigs = {
    type: 'maps/worldwithcountries',
    width: 900,
    height: 600,
    dataFormat: 'json',
    dataSource: dataSource,
    events: {
      "entityRollover": function(evt, data) {
        _handleRollOver(evt, data);
      },
      "entityRollout": function(evt, data) {
        _handleRollOut(evt, data);
      },
      "entityClick": function(evt, data) {
        _handleCountryClick(evt, data);
      },
    },
  };

  const _handleRollOver = (evt, data) => {
  };
  const _handleCountryClick = (evt, data) => {
    console.log('data', data);
  };
  const _handleRollOut = (evt, data) => {
  };

    return(
        <div>
          <ReactFC {...chartConfigs}/>
        </div>
    )
}

export default FusionChartMap;