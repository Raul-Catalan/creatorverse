import React, { useState } from 'react'
import { supabase } from '../client.js'

function AddCreator() {

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(event) {
    // Need this in order to stop the page reload
    event.preventDefault();
    console.log("attempt to submit")

    const slug = name.toLowerCase().replace(/ /g, '-')

    const { data, error } = await supabase.from('creators').insert([
      {
        name: name,
        url: url,
        imageURL: imageURL,
        description: description,
        slug: slug
      }
    ]);

    if (error) {
      console.error("Error inserting data:", error);
      alert("Error adding creator.");
    } else {
      alert("Creator added successfully!");
    }
  }
  return (
    <main>
      <h1>Add Creator</h1>
      <form id='addCreatorForm' onSubmit={handleSubmit}>
        <div>
          <h2>Enter Creator Name:</h2>
          <input
            type="text"
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <h2>Enter Creators URL:</h2>
          <input type='text'
            name='url'
            id='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <h2>Enter Image URL of Creator: (Optional)</h2>
          <input type='text'
            name='imageURL'
            id='imageURL'
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Enter Description of Creator:</h2>
          <textarea
            name='description'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type='submit'>Add</button>
      </form>
    </main >
  )
}

export default AddCreator