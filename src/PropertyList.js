import React from 'react';
import PropertyCard from './components/PropertyCard';
import { isEmpty } from 'lodash';

const PropertyList = ({PropertyData}) => {
    return(
        <div className="flex flex-wrap bg-white">   
            <p className="px-4 pt-4 pb-2 text-xl font-semibold ">Upcoming showing</p>
           {
            !isEmpty(PropertyData) && PropertyData.map ((house, i) => <PropertyCard {...house} />)
            }
        </div>
    );   
}

export default PropertyList;