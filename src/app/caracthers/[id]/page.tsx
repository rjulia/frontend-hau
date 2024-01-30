/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from "react";
import getLastNumberFromUrl from "@/lib/utils/getLastNumberFromUrl";
import BtnGoBack from "@/components/BtnGoBack";
import { ICharacter } from "@/types";
import { useGetCharacterbyIDMutation } from "@/lib/store/api";
import LoadingComponent from '../../../components/LoadingComponent';


export default function CaractherDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const [character, setCharacter] = useState<ICharacter | undefined>(undefined);
  console.log("🚀 ~ character:", character)
  const [getCharacterbyID, { isLoading }] = useGetCharacterbyIDMutation();


  useEffect(() => {
    getCharacterbyID(id).unwrap().then((res) => {
      console.log("🚀 ~ caractherReq ~ res:", res)
      setCharacter(res)
    })
  }, [id])

  if(isLoading && !character) return <LoadingComponent />

  return (
    <div className="detailPage">
      <div>
        <BtnGoBack />
      </div>
      <img src={character?.image} alt="Character Thumbnail" width={300} />
      <h2 className="name">{character?.name}</h2>
      <div className="detailPage__details">
        <div className="content">Status: <span>{character?.status}</span></div>
        <div className="content">Specie: <span>{character?.species}</span></div>
        <div className="content">Gender: <span>{character?.gender}</span></div>
        <div className="content">Origin: <span>{character?.origin.name}</span></div>
        <div className="content">Location: <span>{character?.location.name}</span></div>
      </div>
      <div className="detailPage__episode">
        <h2>Episodes</h2>
        <div className="detailPage__episode__body">
          {character?.episode?.map((episode:string) => (
            <div key={episode} className="episode">
              {getLastNumberFromUrl(episode)}
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
}