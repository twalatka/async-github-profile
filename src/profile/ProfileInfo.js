import React, { Component } from 'react'

import { Card, CardTitle, CardBlock, CardImg, CardSubtitle } from 'reactstrap'
import PropTypes from 'prop-types'

class ProfileInfo extends Component {
  render () {
    return (
      <Card>
        <CardImg top className="w-100" src={this.props.avatarUrl} alt="Teresa Walatka"/>
        <CardBlock>
          <CardTitle>Teresa Walatka</CardTitle>
          <CardSubtitle>twalatka</CardSubtitle>
        </CardBlock>
      </Card>

    )
  }
}

ProfileInfo.propTypes = {
  avatarUrl: PropTypes.string.isRequired
}

export default ProfileInfo
