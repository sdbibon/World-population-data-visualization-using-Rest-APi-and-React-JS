
import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";

class WordMap extends Component {

  render() {
    return (
          <ComposableMap
            projectionConfig={{
              scale: 205,
            }}
            width={980}
            height = { 551 }
            style={this.props.selectCity ? { width: "100%", height: '350px',} :{ width: "100%", height: "450px",}}
          >
            <ZoomableGroup center={this.props.center} zoom={this.props.zoom}>
              <Geographies geography="/static/world-50m.json">
                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                  <Geography
                    onClick={this.props.handleCountrySelection}
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#607D8B",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                ))}
              </Geographies>
              <Markers>
                {
                  this.props.cities.map((city, i) => (
                    <Marker key={i} marker={city}>
                      <circle
                        cx={0}
                        cy={0}
                        r={6}
                        fill="#FF5722"
                        stroke="#DF3702"
                      />
                    </Marker>
                  ))
                }
              </Markers>
            </ZoomableGroup>
          </ComposableMap>
    )
  }
}

export default WordMap;
