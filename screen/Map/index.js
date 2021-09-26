import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';

const Map = () => {
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [title, setTitle] = useState('title');
  const [description, setDescription] = useState('discription');

  return (
    <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: location.latitudeDelta,
        longitudeDelta: location.longitudeDelta,
      }}
      onRegionChange={region => {
        setLocation({
          latitude: region.latitude,
          longitude: region.longitude,
        });
      }}
      onRegionChangeComplete={region => {
        setLocation({
          latitude: region.latitude,
          longitude: region.longitude,
        });
      }}>
      <Marker
        coordinate={{latitude: 37.78825, longitude: -122.4324}}
        title={title}
        description={description}
      />
    </MapView>
  );
};

export default Map;
