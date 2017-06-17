import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import injectSheet from 'react-jss'

const styles = {
  underNavbar: {
    marginTop: 80
  }
}

class Blog extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={this.props.classes.underNavbar}>Blog</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default injectSheet(styles)(Blog)
