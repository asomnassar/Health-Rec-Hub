import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { NavLinkTypes } from "../../types/components.types"

const NavLink=({title,link}:NavLinkTypes)=>{
  const {pathname} = useLocation()
  const {id} = useParams()
  const [same, setSame] = useState(false)

  useEffect(()=>{
    if(id){
      setSame(`${pathname}+${id}` === link)
    }else{
      setSame(pathname === link)
    }
  },[pathname,id,link])

  return (
    <Link to={link}>
      <Typography variant={"h6"} className={`${same && "text-primary font-[600]"}`}>{title}</Typography>
    </Link>
  )
}
export default NavLink
