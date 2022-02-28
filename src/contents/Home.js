import GoogleMapReact from 'google-map-react'
import React, { Component } from 'react'
import { MarkerComponent } from '../components/Marker'
import { Marker } from '../components/Marker'
import shops from '../data/lastedtweets.json'
import places from '../data/cafe.json'
import Slider from 'react-slide-out';
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


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: 18.7953513,
        lng: 98.957477
      },
      zoom: 15,
      places: places,
      shops: shops,
      showShop: null,
      showPlace: null,
      showAllMap: true,
      showInfo: null,
      showPlaceIndex: null,
      status_id: null,
      showLegend: false
    }
  }

  handleShow = (index) => {
    console.log('xxx', index)
    this.setState({
      showPlace: this.state.showPlace === index ? null : index
    })
  }


  handleShowShop = (index) => {
    console.log('zz', this.state.shops[index])
    this.setState({
      showShop: this.state.showShop === index ? null : index
    })
  }

  render() {
    console.log('s', this.state)
    return (
      <div className="condiv home">
        <div className="map" style={{ height: '83vh', width: '100vw' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyCZcg_DL8Nve_PrjQtFiCXzLDXmMEH1VmA'
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            {!this.state.showAllMap
              ? shops.map((shop, index) => {
                  if (shop.name) {
                    return (
                      <Marker
                        key={index}
                        index={index}
                        showPlace={this.state.showShop}
                        handleShow={() => this.handleShowShop(index)}
                        name={shop.name}
                        lat={shop.lat}
                        lng={shop.long}
                        place={shop}
                      /> 
                     
                    )
                  }
                })
              : places.map((place, index) => {
                  if (place.name) {
                    return (
                      <MarkerComponent
                        key={index}
                        index={index}
                        showPlace={this.state.showPlace}
                        handleShow={() =>this.handleShow(index)}
                        name={place.name}
                        lat={place.lat}
                        lng={place.long}
                        place={place}
                      />
                    )
                  }
                })}
          </GoogleMapReact>
          <button
            type="button"
            class="btn btn-outline-primary"
            className="tweet"
            onClick={() => {
              this.setState({
                showAllMap: !this.state.showAllMap
              })
            }}
          >
            <i className="bi bi-twitter  text-primary"></i>
            Latest tweets
            
          </button>
          <div className="box  cyan">
           
            <span className='coffee'>
               <i className='bi bi-geo-alt-fill  ' >  coffee shop </i><br></br>
            </span>
            <span className='coffee-pos'>
              <i className='bi bi-geo-alt-fill  ' >  recommended coffee shop</i>
            </span>
             </div>
            {/* <Slider
              title='Place'
              footer={
                <div style={{padding: '15px'}}>
                  <a onClick={() => this.handleShow(null)}>Close</a>
                </div>
              }
              isOpen={this.state.showPlace !== null? true : false}
              onOutsideClick={() => this.handleShow(null)}>
              <div style={{padding: '15px'}}>
              {this.state.showPlace !== null ? places[this.state.showPlace]?.name : null}
              </div>
            </Slider> */}
            

            <Slider
              title='Recommended Tweets'
              footer={
                <div style={{padding: '15px'}}>
                  <a onClick={() => this.handleShowShop(null)}>Close</a>
                </div>
              }
              isOpen={this.state.showShop !== null ? true : false}
              onOutsideClick={() => this.handleShowShop(null)}>
              <div style={{padding: '15px'}}>
               
                <TwitterTweetEmbed tweetId= {this.state.showShop !== null ? shops[this.state.showShop]?.status_id : null} />
              </div>
            </Slider>
            
         
        </div>
      </div>
    )
  }
}

export default Home


