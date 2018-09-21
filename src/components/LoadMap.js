import React, { Component } from 'react'
import Loadable from 'react-loadable'
import {
  Map as NaverMap,
  withNavermaps,
  loadNavermapsScript,
} from 'react-naver-maps'

class MapLog extends Component {
  constructor (props) {
    super(props);

    const { navermaps } = props;

    this.state = {
      zoom: 12,
      center: new navermaps.LatLng(37.3595704, 127.105399)
    }
  }

  render () {
    const { center, zoom } = this.state;

    return (
      <div style={{ width: "400px", height: "500px" }}>
        <h1>Zoom, Center State example</h1>
        <p>zoom: {zoom}</p>
        <p>center: {center.toString()}</p>
        <NaverMap
          style={{ width: "100%", height: "100%" }}
          zoom={zoom}
          center={center}
        />
      </div>
    )
  }
}

const CLIENT_ID = 'xdh6Wg4KGl5EOgWN2mEB';

class LoadMap extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loaded: false,
    }
  }

  componentDidMount () {
    loadNavermapsScript({ clientId: CLIENT_ID })
      .then((navermaps) => {
        this.navermaps = navermaps;
        this.setState({ loaded: true })
      })
  }

  render () {
    const { loaded } = this.state;

    if (!loaded) {
      return <div>Loading</div>
    }

    return (
      <MapLog {...this.props} navermaps={this.navermaps} />
    );
  }
}

export default LoadMap;
