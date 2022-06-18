import { useCallback, useEffect, useState } from "react";
import { fatchData } from "../utilits";

export const useFetchJSON = (filename: string) => {
  const [data, setData] = useState<any>({});

  const getData = useCallback(async () => {
    setData(await fatchData(`/static/${filename}.json`));
  }, [filename]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data };
};
