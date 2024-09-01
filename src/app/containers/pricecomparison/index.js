import React, { useState, useEffect } from "react";
import {
  // MDBBtn,
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import './index.css'
import { annualPriceComparison, monthlyPriceComparison } from "../../data/pricing-tables/pricedata";
import { useParams } from "react-router-dom";
import { AiOutlineMinus } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
// import { useTranslation } from "react-i18next";
// import {i18n} from "../../i18n";

export default function App() {

  const [data, setdata] = useState([])
  const params = useParams()

  useEffect(() => {
    if (params.type && params.type.includes("annual")) {
      setdata(annualPriceComparison['en'])
      console.log(annualPriceComparison)

    } else {
      setdata(monthlyPriceComparison['en'])
    }
  }, [params.type])



  return (
    <MDBContainer className="py-5">
      <MDBTable
        responsive
        ///striped
        className="comparison-table text-successtable-border border-light"
      >
        <MDBTableHead className="border-light">
          <tr className="head-row">
            <th scope="col"></th>
            {data.planNames && data.planNames.map((item, index) => (
              <th scope="col" key={index} style={{ textAlign: 'center' }}>
                <strong>{item}</strong>
              </th>
            ))}

          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.features && data.features.map((item, index) => (
            <tr className="body-row">
              <th scope="row" style={{ width: '30%' }}>{item.name}</th>
              {item.plan.length < 4 && [...Array(4 - item.plan.length).keys()].map((item, index) => (
                <td style={{ textAlign: 'center' }}> <AiOutlineMinus size={24} color={'gray'} /></td>

              ))}
              {item.plan && item.plan.map((plan, ind) => (
                <td style={{ textAlign: 'center' }}> <BiCheck size={28} color={'green'} /></td>
              ))}

            </tr>
          ))}


        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}