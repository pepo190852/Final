import React, { Component } from 'react'
import { render } from 'react-dom'
import Slider from 'react-slide-out'
import 'react-slide-out/lib/index.css'

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from 'react-twitter-embed'
import UserContext from '../components/UserContext'

const styles = {
  fontFamily: 'sans-serif',
  padding: '15px'
}

class Slide extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }
  openSlider = () => {
    this.setState({
      isOpen: true
    })
  }

  closeSlider = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <div style={styles}>
        <a onClick={this.openSlider}>Open</a>
        <Slider
          title="Tweets"
          footer={
            <div style={{ padding: '15px' }}>
              <a onClick={this.closeSlider}>Close</a>
            </div>
          }
          isOpen={this.state.isOpen}
          onOutsideClick={this.closeSlider}
        >
          <div style={{ padding: '15px' }}>
            <h3>
              <TwitterTweetEmbed tweetId={'1493757828971913223'} />
            </h3>
          </div>
          <div style={{ padding: '15px' }}>
            <h3>
              <TwitterTweetEmbed tweetId={'1495388321232846849'} />
            </h3>
          </div>
          <div style={{ padding: '15px' }}>
            <h3>
              <TwitterTweetEmbed tweetId={'1495388321232846849'} />
            </h3>
          </div>
        </Slider>
      </div>
    )
  }
}

export default Slide
