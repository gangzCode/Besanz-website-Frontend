import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css"
const CrmCard = ({data}) => {
  return (
    <Link href={data.url} key={data.id}>
        <Container style={{minWidth:200}}
        className="mt-3  align-middle justify-center item-center content-center pt-1  crm-link">       
            <Row>
                <Col sm={1} xs={2}  >
                <Image className='pt-1' width={20} height={25} style={{resizeMode:"contain"}} src={data.image} />
                </Col>
                <Col sm={10}  xs={10}>
                  <p className='pt-2 ps-2'>{data.name}</p>
                </Col>
            </Row>
        </Container>
    </Link>
  )
}

export default CrmCard