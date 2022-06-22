import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import crashlytics from '@react-native-firebase/crashlytics';

const App = () => {
  const [crashlyticsEnable, setCrashlyticsEnable] = useState(
    crashlytics().isCrashlyticsCollectionEnabled,
  );

  useEffect(() => {
    console.log(crashlyticsEnable);
  }, [crashlyticsEnable]);

  const buttonStyle = {
    backgroundColor: '#252526',
    padding: 16,
    marginBottom: 16,
  };

  return (
    <View>
      <Text>App</Text>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => crashlytics().crash()}>
        <Text>Force Crash</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          setCrashlyticsEnable(!crashlyticsEnable);
          crashlytics().setCrashlyticsCollectionEnabled(!crashlyticsEnable);
        }}>
        <Text>Crashlytics est : {JSON.stringify(crashlyticsEnable)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
