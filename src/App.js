import React from 'react';
import { useState } from 'react';
import './style.css';
import './file.css';
export default function App() {
  const [file, setFile] = useState('');
  console.log(file);
  return (
    <div className="imageContainer">
      <div className="image">
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'
          }
          alt=""
          className="fileImage"
        />
      </div>

      <input
        type="file"
        multiple
        id="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
    </div>
  );
}

{
}
