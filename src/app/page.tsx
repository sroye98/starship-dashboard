import LocationResponses from '@/components/search/locationResponses'
import LocationSearch from '@/components/search/locationSearch'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <header>
        <h1>Starship Dashboard</h1>
        <LocationSearch />
        <LocationResponses />
      </header>
    </main>
  )
}
