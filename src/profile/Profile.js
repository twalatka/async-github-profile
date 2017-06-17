import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import injectStyles from 'react-jss'

import ProfileInfo from './ProfileInfo'
import RepoRow from '../repos/RepoRow'

const styles = {
  underNavbar: {
    marginTop: 80
  }
}

class Profile extends Component {
  render () {
    const classes = this.props.classes

    return (
      <Container className={classes.underNavbar}>
        <Row>
          <Col sm="4">
            <ProfileInfo/>
          </Col>
          <Col sm="8">
            <h3>Projects</h3>
            <RepoRow/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default injectStyles(styles)(Profile)
