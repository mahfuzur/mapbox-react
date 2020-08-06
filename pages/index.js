import React from 'react'
import GeojsonLayer from "../components/Map/GeojsonLayer";

const Home = ({geojson}) => {
  return (
    <div style={{height: '500px'}} >
      <GeojsonLayer  geojson={geojson}/>
      <h2 className="text-center"><b>Map:</b> the geojson polygons for all of the US states</h2>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson')
  const geojson = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      geojson,
    },
  }
}

export default Home
