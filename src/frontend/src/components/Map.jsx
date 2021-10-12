import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import { Linking, Text } from 'react-native'
import './map.css'

const location = {
  address: 'Arizona State University - SDFC Intramural Fields',
  lat: 33.416950681920014,
  lng: -111.93081845323901
}

const LocationPin = () => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{'ASU SDFC'}</p>
  </div>
)

const Map = () => (
  <div className="map">
    <h2 className="map-h2">See you there!</h2>

    <div  class="container">
        <h3>Arizona State University</h3>
        <p>Sun Devil Fitness Center, Intramural Fields, Tempe, Arizona, USA 85281 | 
        <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL('https://www.google.com/maps/place/SDFC+Intramural+Fields,+Tempe,+AZ+85281/@33.4134533,-111.9316523,16z/data=!4m5!3m4!1s0x872b08c32da21aa1:0xa7915b0175012d33!8m2!3d33.4167213!4d-111.9310096')}> Google Maps
        </Text>
        </p>
    </div>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCtj9HxGzzdWIrY1fo2THYNfUPX1zuSQZs' }}
        defaultCenter={location}
        defaultZoom={16}
        >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>

    <div  class="container">
        <h3>Important Points</h3>
        <p>NO Pets allowed. Fields are visible from Apache Boulevard. ENTER ONLY at the MAIN entrance and EXIT ONLY through SDFC. 
            <li>Speed limit is 5 MPH! Please watch for our children. </li>
            <li>Please print a copy of the field maps for ease of finding your field. Please do NOT park in handicap spaces unless you have a person that actually needs to use that space.</li> 
            <li>The Main entrance drive is Two-Way on the east/north/south of the complex with the west drive ONLY ONE-Way going south to the west side of the site exit.</li>
            <li>The SDFC has ample parking with a lot of overflow parking around the circle drive.</li>
            <li>Police Cadets are available to help maintain traffic control.</li>
            <li>Please NO PETS allowed at the SDFC Complex.</li>
         </p>
    </div>

    <section id="boxes">
            <div class="center">
            <img src="images/soccerfieldmap.png" alt={"images/4.jpg"}  width="550" height="550"/>
            <h3>All soccer matches will be played across 11 fields in the ASU SDFC Intramural Sports Complex</h3>
            </div>
      </section>

  </div>
)

export default Map