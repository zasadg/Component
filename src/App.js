import React from "react";
import { PropertyData } from "./PropertyData";
import PropertyList from "./PropertyList";
import PropertyCard from "./components/PropertyCard";
import PropertyDetail from "./components/PropertyDetail";
function App() {
  return (
    // <PropertyList PropertyData = {PropertyData}/>
    <PropertyDetail PropertyData={PropertyData} />
  );
}
export default App;
