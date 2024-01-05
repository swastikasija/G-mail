import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import { mails } from "../data/mails";
const Mail = () => {
  const [m,setM] = useState<MailType>()
  const { mailId } = useParams();


  useEffect(()=>{
    const m1 = mails.find((m)=>m.id === mailId);
    setM(m1);
  },[mailId, mails])

  if(!m) {
    return <>Loading</>
  }

  return (
    <>
      <h1>{m.id}</h1>
    </>
  )
}

export default Mail