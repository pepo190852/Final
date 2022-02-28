import Tippy from '@tippy.js/react'
import React from 'react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import ImgMarker from '../img/location.png'
import ImgNegMarker from '../img/neg.png'
import ImgPosMarker from '../img/pos.png'
import Slide from '../contents/Slide'

// InfoWindow component
export const InfoWindow = (props) => {
  const { place } = props

  return (
    <div>
      <div className="infoWindowStyle">
        <div className="info-name">{place.name}</div>
        <div className="info-detail">
          <p>{place.website}</p>
          <p>{place.opening_hours}</p>
        </div>
      </div>

    </div>
  )
}

export const MarkerComponent = (props) => {
  return (
    <div onClick={() => props.handleShow(props.index) }>
      <div className="tippy">
        <Tippy content={props.place.name}>
          <img src={ImgMarker} width="25px" height="25px" />
        </Tippy>
      </div>
      {props.showPlace === props.index && <InfoWindow place={props.place} />}
     
    </div>
   
  )
}

export const Marker = (props) => {
  return (
    <div onClick={() => props.handleShow(props.index)}>
      
      {props.place.tag > 0 &&
      <div className="tippy-tooltip">
        <div className="tippy-content">
        <Tippy theme={'green'} content={props.place.name} >
          <img src={ImgPosMarker} width="50px" height="50px" />
        </Tippy>
        </div>
      </div>
      }
      {props.place.tag < 0 &&
      <div className="tippy-tooltip">
      <div className="tippy-content">
        <Tippy theme={'yellow'} content={props.place.name} >
          <img src={ImgNegMarker} width="50px" height="50px" />
        </Tippy>
      </div>
      </div>
      }
      {props.showPlace === props.index && <InfoWindow place={props.place} /> }
            
    </div>
  )
}


