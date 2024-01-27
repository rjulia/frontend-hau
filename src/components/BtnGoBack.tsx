'use client'
import { useRouter } from 'next/navigation'
import { MdArrowBackIos } from "react-icons/md";


function BtnGoBack() {
  const router = useRouter()

  const handleClick = (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    router.back()
  }
  return (
    <button className='btn--goback' type="button" onClick={handleClick}>
      <MdArrowBackIos />
      go back
    </button>
  )
}

export default  BtnGoBack