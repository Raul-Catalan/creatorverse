import { supabase } from '../client.js'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

function EditCreator() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!slug) return;

      const { data, error } = await supabase.from('creators').select()
        .eq('slug', slug)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
      }

      if (data) {
        setName(data.name);
        setUrl(data.url);
        setDescription(data.description);
        setImageURL(data.imageURL);
        setId(data.id);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [slug])

  async function updateCreator(event) {
    event.preventDefault();

    const { error } = await supabase.from('creators')
      .update({
        name,
        url,
        imageURL,
        description
      }).eq('id', id);

    if (error) {
      console.error("Error updating creator:", error);
      alert("Error Updateing Creator");
    } else {
      alert("Update Successful");
    }
  }

  async function deleteCreator(event) {
    event.preventDefault();

    const { error } = await supabase.from('creators').delete().eq('id', id);

    if (error) {
      console.error("Error Deleting:", error);
      alert("Error deleting creator.");
    } else {
      alert("Creator deleted!");
      navigate('/');
    }
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <main>
      <h1>Edit {name}</h1>
      <form onSubmit={updateCreator}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label htmlFor="url">
          URL
          <input
            type="text"
            id="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>

        <label htmlFor="imageURL">
          Image URL (Optional)
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <div className='grid'>
          <button type='submit'>Update Creator</button>
          <button className='delete' onClick={deleteCreator}>Delete Creator</button>
        </div>
      </form>
    </main>
  )
}

export default EditCreator