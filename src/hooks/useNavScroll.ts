import { useEffect, useState } from "react";

export default function useNavScroll(){
    const [scroll, setScroll] = useState(0)

    useEffect(()=>{
      function updateScrollPosition(){
        setScroll(window.pageYOffset)
      }
      window.addEventListener("scroll", updateScrollPosition)
      updateScrollPosition()
      return ()=>window.removeEventListener("scroll", updateScrollPosition)
    },[]) 
    return {scroll} 
}