import React from "react";
import { useQuery, gql } from "@apollo/client";
import CountryCard from "./countryCard";
// Component
interface IProps {
    continent: string,
}

type Country = {
    code: string;
    name: string;
};
const CountryGrid = ({continent}: IProps) => {
    var QUERY = gql`query {
    continent (code :"${continent}") {
              countries {
                code
                name
              }
            }
        }`;

    if  (continent === "all") {
        QUERY = gql`query {
      countries {
        code
        name
      }
    }`;
    }
    const { loading, error, data } = useQuery(QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    var countries = data?.continent?.countries;
    if  (continent === "all") {
        countries =  data?.countries;
    }
    console.log(countries);
    return (
        <div className="card-body">
            {countries?.map((cnt: Country ) => (
                <CountryCard country={cnt.name} code={cnt.code} />
            ))}
        </div>
    );
};
export default CountryGrid;
