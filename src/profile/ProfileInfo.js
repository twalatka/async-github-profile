import React, { Component } from 'react'

import { Card, CardTitle, CardBlock, CardImg, CardSubtitle } from 'reactstrap'

class ProfileInfo extends Component {
  render () {
    return (
      <Card>
        <CardImg top className="w-100" src="https://avatars0.githubusercontent.com/u/712023?v=3" alt="Aric Beagley"/>
        <CardBlock>
          <CardTitle>Aric</CardTitle>
          <CardSubtitle>abeagley</CardSubtitle>
        </CardBlock>
      </Card>
    )
  }
}

export default ProfileInfo
