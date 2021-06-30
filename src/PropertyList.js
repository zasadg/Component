import React from 'react';
import PropertyCard from './components/PropertyCard';
import { isEmpty } from 'lodash';

const PropertyList = ({PropertyData}) => {
    return(
        <div className="flex flex-wrap">
           {
            !isEmpty(PropertyData) && PropertyData.map ((house, i) => <PropertyCard {...house} />)
            }
        </div>
    );   
}

export default PropertyList;