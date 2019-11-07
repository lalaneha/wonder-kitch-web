import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

// const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

// const data = [
//   ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
//   ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
//   ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
//   ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
// ];

const columns = ["Item", "Quantity"];

const data = [
  ["Bananas", 2],
  ["Oatmeal", 3],
  ["Onion", 5],
  ["apple", 4]
];

const TableEditablePage = props => {
  return (
    <MDBCard>
      <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
        Table Editable
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default TableEditablePage;