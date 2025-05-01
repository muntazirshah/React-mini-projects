import { useState } from "react"

const usedisclose = () => {
    const [isopen, setopen] = useState(false);
  
    const onOpen = () => {
      setopen(true);
    };
    const Onclose = () => {
      setopen(false);
    };
  
    return {
      Onclose,
      isopen,
      onOpen,
    };
  };
  

export default usedisclose