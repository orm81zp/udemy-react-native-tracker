import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <React.Fragment>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter name"
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        {recording
          ? <Button title="Stop" onPress={stopRecording} />
          : <Button title="Start recording" onPress={startRecording} />
        }
      </Spacer>
      {
        !recording && locations.length
          ? <Spacer>
            <Button title="Save Recording" onPress={saveTrack} />
        </Spacer>
        : null
      }
    </React.Fragment>
  );
};

export default TrackForm;

