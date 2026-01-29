import type { Creator } from '../components/CreatorInterface'
import ContentCreatorCard from '../components/CreatorCard'
import { Link } from 'react-router'
import { supabase } from '../client.js'
import { useEffect, useState } from 'react'


function ShowCreators() {

  const [creators, setCreators] = useState<Creator[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await supabase.from('creators').select()
        const new_creators: Creator[] = []
        for (const d in data) {
          const { id, name, url, description, imageURL, slug } = data[d]
          new_creators.push({ id, name, url, description, imageURL, slug })
        }
        setCreators(new_creators)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <header>

      </header>
      <main className="container-fluid">
        <h1>Creatorverse</h1>
        {creators && creators.length > 0 ? (
          creators.map((creator, index) => (
            <ContentCreatorCard key={index} creator={creator} />
          ))
        ) : (
          <p>No Creators to Display</p>
        )}
        <Link to={`/add`}>
          <button>Add Creator</button>
        </Link>
      </main>
    </>
  )
}

export default ShowCreators