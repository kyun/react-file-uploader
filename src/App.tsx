import React from 'react';
import Uploader from './Uploader';

function App() {
  const handleSuccess = (files: FileList | null) => {
    console.log(files?.[0]);
  };
  return (
    <div className='App'>
      <Uploader onSuccess={handleSuccess}>
        <button>Upload!</button>
      </Uploader>
    </div>
  );
}

export default App;
