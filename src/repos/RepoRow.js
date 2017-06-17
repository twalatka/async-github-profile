import React, { Component } from 'react'

import { Row, Col, Card, CardHeader, CardBlock } from 'reactstrap'

class RepoRow extends Component {
  render () {
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>A Repo</CardHeader>
            <CardBlock>
              Hello
            </CardBlock>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default RepoRow
