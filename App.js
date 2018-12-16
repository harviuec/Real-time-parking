import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import aws_exports from './aws-exports';
import HomePage from './src/Components/HomePage';
import SignOut from './src/Components/SignOut';

Amplify.configure(aws_exports);


// class App extends React.Component {
//   state = {
//     points: null
//   };
//
//   componentDidMount() {
//     return fetch('https://2rpz3k1w60.execute-api.us-east-1.amazonaws.com/Development/locations').then(result => result.json()).then(response => {
//       let points = JSON.parse(response.body);
//       let result = points.map(point => {
//         return {
//           latitude: parseFloat(point.lat),
//           longitude: parseFloat(point.lon),
//           weight: point.weight
//         };
//       });
//       this.setState({
//         points: result
//       });
//     }).catch(err => {
//       console.log(err);
//     });
//   }
//
//   signOut = () => {
//     Auth.signOut()
//       .then(data => console.log(data))
//       .catch(err => console.log(err));
//   };
//
//   render() {
//     let points = this.state.points;
//     if (!points) {
//       return (
//         <View style={styles.container}>
//           <Button title={'Signout'} style={styles.button} onPress={this.signOut}/>
//           <MapView
//             // provider={PROVIDER_GOOGLE}
//             style={styles.map}
//             region={{
//               latitude: 40.780942,
//               longitude: -73.980966,
//               latitudeDelta: 0.1,
//               longitudeDelta: 0.1
//             }}
//           >
//           </MapView>
//         </View>
//       );
//     }
//
//     return (
//       <View style={styles.container}>
//         <Button title={'Signout'} style={styles.button} onPress={this.signOut}/>
//         <MapView
//           // provider={PROVIDER_GOOGLE}
//           style={styles.map}
//           region={{
//             latitude: 40.780942,
//             longitude: -73.980966,
//             latitudeDelta: 0.1,
//             longitudeDelta: 0.1
//           }}
//         >
//           {/*<MapView.Heatmap*/}
//           {/*points={points}*/}
//           {/*opacity={1}*/}
//           {/*radius={20}*/}
//           {/*maxIntensity={100}*/}
//           {/*gradientSmoothing={10}*/}
//           {/*heatmapMode={"POINTS_DENSITY"}*/}
//           {/*/>*/}
//         </MapView>
//
//       </View>
//     );
//   }
// }
//
// export default withAuthenticator(App);


const App = createDrawerNavigator({
  Home: {
    screen: HomePage
  },
  SignOut: {
    screen: (props) => {
      console.log('392850834-235', props);
      return <SignOut {...props}/>
    }
  }
}, {initialRouteName: 'Home'});

const AppContainer = createAppContainer(App);

export default withAuthenticator(AppContainer);