import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { MapView } from 'expo';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1
  },
  button: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 10,
    left: 10,
    zIndex: 10
  }
});

class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Home page',
  };

  state = {
    points: null
  };

  componentDidMount() {
    return fetch('https://2rpz3k1w60.execute-api.us-east-1.amazonaws.com/Development/locations').then(result => result.json()).then(response => {
      let points = JSON.parse(response.body);
      let result = points.map(point => {
        return {
          latitude: parseFloat(point.lat),
          longitude: parseFloat(point.lon),
          weight: point.weight
        };
      });
      this.setState({
        points: result
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    console.log(this.props);

    let points = this.state.points;
    if (!points) {
      return (
        <View style={styles.container}>
          {/*<Button title={'Signout'} style={styles.button} onPress={this.signOut} />*/}
          <MapView
            // provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 40.780942,
              longitude: -73.980966,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
          >
          </MapView>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {/*<Button title={'Signout'} style={styles.button} onPress={this.signOut} />*/}
        <MapView
          // provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 40.780942,
            longitude: -73.980966,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        >
          {/*<MapView.Heatmap*/}
          {/*points={points}*/}
          {/*opacity={1}*/}
          {/*radius={20}*/}
          {/*maxIntensity={100}*/}
          {/*gradientSmoothing={10}*/}
          {/*heatmapMode={"POINTS_DENSITY"}*/}
          {/*/>*/}
        </MapView>

      </View>
    );
  }
}

export default HomePage;
