import { useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";

export function useInterval(callback, delay) {
  //const onTick = useEffectEvent(callback);

  useEffect(() => {
    console.log("✅ Configurar un intervalo con retraso ", delay);
    set;
    const id = setInterval(callback, delay);
    return () => {
      console.log("❌ Borrar un intervalo con retraso ", delay);
      clearInterval(id);
    };
  }, [delay]);
}
