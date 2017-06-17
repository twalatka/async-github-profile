import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import injectStyles from 'react-jss'

import ProfileInfo from './ProfileInfo'
import RepoRow from '../repos/RepoRow'
import axios from 'axios'

const styles = {
  underNavbar: {
    marginTop: 80
  }
}

class Profile extends Component {
  constructor () {
    super()
    this.state = {
      userAvatar: ''
    }
  }
  componentWillMount () {
    axios.get('https://api.github.com/users/twalatka')
      .then((userInfo) => {
        this.setState({
          userAvatar: userInfo.data.avatar_url
        })
      })
      .catch((error) => {
        console.error(error)
      }),
    axios.get('https://api.github.com/users/twalatka/repos')
    .then((userRepos) => {
      this.setState({
        userRepos({
          
        })
      })
    })
  }

  render () {
    const classes = this.props.classes

    return (
      <Container className={classes.underNavbar}>
        <Row>
          <Col sm="4">
            <ProfileInfo avatarUrl={this.state.userAvatar}/>
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
