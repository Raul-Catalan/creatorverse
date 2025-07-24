import React, { useState } from "react";

export const AddCreator = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleImageURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    console.log(name);
    console.log(description);
    console.log(imageURL);
    console.log(url);
    /* Console is void, we would get some return from API call.then(() => {}) */
  };

  return (
    <div id="form_container">
      <label>Name:</label>
      <input type="text" value={name} onChange={handleNameChange} />
      <label>URL:</label>
      <input type="text" value={url} onChange={handleUrlChange} />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
      />
      <label>Image URL:</label>
      <input type="text" value={imageURL} onChange={handleImageURLChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddCreator;
