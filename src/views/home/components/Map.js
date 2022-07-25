import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

const Map = ({cords}) => {

  const containerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '8px'
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAP_API_KEYS,
  })

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading Maps"

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={16}
      center={cords}
      mapContainerClassName="mapCtn"
    >
    </GoogleMap>
  )
}

export default Map

