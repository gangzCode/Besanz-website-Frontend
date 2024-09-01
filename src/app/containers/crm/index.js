import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { crmData } from '../../data/crm';
import CrmCard from '../../components/card/crmCard';

const LoginImage =()=>{
 
    return (
      <Container  className="justify-content-center mx-30 mb-10"  style={{ustifyContent:'center', alignItems:"center"}}>
        <h2 className='text-center' style={{color:'#233146', fontSize: '55px'}}>
          Integrations
        </h2>

        <h3 className='text-center mb-5' >
          100 + CRM & MIS connects to grow your business
        </h3>

        <Row className="justify-content-md-center" style={{marginLeft:"6%"}}>
          {crmData &&
            crmData.map((item, key) => {
              return (
                <Col className="justify-content-center" key={item.id} xs={12} md={6} lg={4} xl={3}>
                  <CrmCard data={item} />
                </Col>
              );
            })}
        </Row>
    </Container>
    );

        }

export default LoginImage;