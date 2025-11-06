import React from "react";
import { useParams } from "react-router-dom";
import { useGetCountryDetailsByNameQuery } from "../../services/countries";

function CountryDetails() {
    var {cname}=useParams()
    var{data,isLoading} = useGetCountryDetailsByNameQuery(cname)
    return(
        <div className="d1">
            <h1>CountryDetails of {cname}</h1>
            {
                data && <img src={data[0].flags?.png} alt="" width="200px" />
            }
        </div>
    )
}

export default CountryDetails;