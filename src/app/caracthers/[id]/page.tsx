import React from "react";
import getLastNumberFromUrl from "@/lib/utils/getLastNumberFromUrl";
import BtnGoBack from "@/components/BtnGoBack";

async function getDetail(id:string) {
  const res = await fetch(`http://localhost:8000/api/characters/${id}`, { cache: 'force-cache' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function CaractherDetail({
  params,
}: {
  params: { id: string };
}) {
  const {
    id,
    name,
    image,
    species,
    status,
    gender,
    origin,
    location,
    episode,

  } = await getDetail(params.id)
  return (
    <div className="detailPage">
      <div>
        <BtnGoBack />
      </div>
      <img src={image} alt="Character Thumbnail" width={300} />
      <h2 className="name">{name}</h2>
      <div className="detailPage__details">
        <div className="content">Status: <span>{status}</span></div>
        <div className="content">Specie: <span>{species}</span></div>
        <div className="content">Gender: <span>{gender}</span></div>
        <div className="content">Origin: <span>{origin.name}</span></div>
        <div className="content">Location: <span>{location.name}</span></div>
      </div>
      <div className="detailPage__episode">
        <h2>Episodes</h2>
        <div className="detailPage__episode__body">
          {episode?.map((episode:string) => (
            <div key={episode} className="episode">
              {getLastNumberFromUrl(episode)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}