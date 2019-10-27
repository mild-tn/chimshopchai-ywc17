/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { SubTitle } from '../Core/Text';
import MDreact from 'react-markdown/with-html';

const Bg = styled.div`
  margin: 70px 0px 70px 0px; 
`

const DetailLeft = ({ subTitle,pathImg }) => {
  return (
    <Bg>
      <Container>
        <Row>
          <Col lg={5} sm={12}>
            <SubTitle>
              <strong>
                <MDreact escapeHtml={false} source={subTitle}/>
              </strong>
            </SubTitle>
          </Col>
          <Col lg={7} sm={12} className="d-flex justify-content-center">
            <img src={pathImg} />
          </Col>
        </Row>
      </Container>
    </Bg>
  )
}

export default DetailLeft
