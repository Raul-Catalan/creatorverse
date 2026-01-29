import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { supabase } from "../client.js"
import type { Creator } from "../components/CreatorInterface.js";
import CreatorCard from "../components/CreatorCard.js";

function ViewCreator() {

  const slugParams = useParams()
  const loading: Creator = {
    id: -1,
    name: 'Loading',
    url: '',
    description: '',
    imageURL: 'https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=',
    slug: ''
  }
  const [creator, setCreator] = useState<Creator>(loading);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      if (!slugParams.slug) return;

      try {
        console.log(`This is slug ${slugParams.slug}`)
        const { data } = await supabase.from('creators').select().eq('slug', slugParams.slug)
        console.log(`This is the data: ${data}`)
        const { id, name, url, description, imageURL, slug } = data[0]
        const new_creator: Creator = { id, name, url, description, imageURL, slug }

        setCreator(new_creator)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData()
  }, [slugParams.slug])

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        < CreatorCard creator={creator} showViewDetailsButton={false} />
      )}
    </div>
  )
}

export default ViewCreator