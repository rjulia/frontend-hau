import Card from "@/components/Card"
import type { Character } from "@/types"
import { Suspense } from "react"
import Loading from "./loading"
async function getData() {
  const res = await fetch(`${process.env.DB_HOST}/api/characters/`, { cache: 'force-cache' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function CaractherPage() {
  const data = await getData()
  return (
    <div className="layout">
        <div className="layout__header">
          <h2>Characters</h2>
        </div>
        <div className="layout__main">
          <div className="col-12">
          <Suspense fallback={<Loading/>}>
            <ul className="list">
              {data?.results.map((item:Character) => (
                <Card 
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  description={item.gender}
                  image={item.image}         
                />
              ))}
            </ul>
          </Suspense>
          </div>
        </div>
    </div>
  )
}