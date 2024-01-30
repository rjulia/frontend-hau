'use client';
import Card from "@/components/Card"
import type { ICharacter } from "@/types"
import { Suspense, useEffect, useState } from "react"
import Loading from "./loading"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store/store";
import { useGetCharactersMutation } from "@/lib/store/api";
// import { fetchGetCharacters } from "@/lib/store/slices/charactersSlice";


export default function CaractherPage() {

  const [characters, setCharacters] = useState<ICharacter[]>([] as ICharacter[]);
 
  const [getCharacters, { isLoading }] = useGetCharactersMutation();
 
  useEffect(() => {
    getCharacters().unwrap().then((res) => {
      console.log("🚀 ~ caractherReq ~ res:", res)
      setCharacters(res.results)
    })
  }, [])

  return (
    <div className="layout">
        <div className="layout__header">
          <h2>Characters</h2>
        </div>
        <div className="layout__main">
          <div className="col-12">
          <Suspense fallback={<Loading/>}>
            <ul className="list">
              {characters?.map((item:ICharacter) => (
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