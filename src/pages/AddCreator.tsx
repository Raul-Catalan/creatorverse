import { supabase } from '../client.js'

function AddCreator() {
  async function handleSubmit(event) {
    console.log("attempt")
  }
  return (
    <main>
      <h1>Hello Add</h1>
      <form id='addCreatorForm' onSubmit={handleSubmit}>
        <div>
          <h2>Enter Creator Name:</h2>
          <input type="text" name='name' id='name' required></input>
        </div>
        <div>
          <h2>Enter Creators URL:</h2>
          <input type='text' name='url' id='url' required></input>
        </div>
        <div>
          <h2>Enter Image URL of Creator: (Optional)</h2>
          <input type='text' name='imageURL' id='imageURL'></input>
        </div>
        <div>
          <h2>Enter Description of Creator:</h2>
          <textarea name='description' id='description' required></textarea>
        </div>
        <button type='submit'>Add</button>
      </form>
    </main >
  )
}

export default AddCreator