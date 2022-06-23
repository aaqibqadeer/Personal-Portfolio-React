import { fatchData } from "@utility/utilits";
import { useCallback, useEffect, useState } from "react";

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
