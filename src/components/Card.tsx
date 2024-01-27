import Favorite from "./Favorite"
import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
export default function Card({
  id,
  name,
  description,
  image
}: Readonly<{
  id: number,
  name: string,
  description: string,
  image: string
}>) {
  return (
    <li className="card__container">
      <div className="card__row">
        <div className="card__image">
          <img
            src={`${image}`}
            alt={name}
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="card__body">
          <Link href={`/caracthers/${id}`}>
            <h3>{name}</h3>
          </Link>
          <p>{description}</p>
          <div className="card__favorite">
            <Favorite id={id}/>
          </div>
        </div>
      </div>
    </li>
  )
}
