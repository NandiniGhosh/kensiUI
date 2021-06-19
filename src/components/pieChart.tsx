import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title,
    Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import {gql, useQuery} from "@apollo/client";

const PieChart = () => {
    const ALL_CONTINENTS = gql`  query {
        continents {
            name
              countries {
                languages {
                  code
                }
              }
            }
    }`;
    var { loading, error, data } = useQuery(ALL_CONTINENTS);
    const continents = data?.continents;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    let piechartData = [];
    if (typeof continents !== "undefined") {
        for(let i=0; i<continents.length; i++){
            let languageSet = new Set();
            var countries = continents[i]?.countries;
            for(let j=0; j<countries.length; j++){
                var langs = countries[j]?.languages;
                for(let k=0; k<langs.length; k++){
                    languageSet.add(langs[k]?.code);
                }
            }
            piechartData.push({continent : continents[i]?.name , unique_languages: languageSet.size})
        }
    }
    return (
        <Paper>
            <Chart data={piechartData} >
                <Title
                    text="Unique Languages"
                />
                <PieSeries
                    valueField="unique_languages"
                    argumentField="continent"
                />
                <Legend/>
                <Animation />
            </Chart>
        </Paper>
    );
}
export default PieChart;
