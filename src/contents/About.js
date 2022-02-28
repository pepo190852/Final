import queryString from 'query-string';
import React from 'react';
import {
  useLocation
} from "react-router-dom";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import places from '../data/maps.json';


const About = () => {

  const { search } = useLocation()
  const values = queryString.parse(search)

  console.log(values.index)


  const renderWithIndex = (data) => {
    return (
      <>
      <div className="centerContent">
        <div className="selfCenter spaceBetween">
        <TwitterTweetEmbed
          onLoad={function noRefCheck(){}}
        tweetId="1083592734038929408"
        />
      </div>
      </div>

    </>
    )
  }
    if (values.index) {
      const data = places[values.index]
      return renderWithIndex(data)
    }

    return (
      <>
        <TwitterTweetEmbed
            onLoad={function noRefCheck(){}}
            tweetId="1482595886706597889"
            />
      </>
    );

}

export default About;
