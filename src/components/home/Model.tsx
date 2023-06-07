import { ReactElement } from "react";
import B3SA3 from "./B3SA3.json";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Model(): ReactElement {
  const { height, width } = useWindowDimensions();
  const data = B3SA3.results[0].historicalDataPrice;
  const dataLenght = Object.entries(data).length;

  return (
    <>
      {Object.entries(data).map(
        ([index, value]) => {
          return (
            <mesh key={index} position={[parseInt(index) * (width/dataLenght), value.open, 0]}>
              <boxGeometry
                args={[dataLenght, (value.close - value.open), 3]}
              />
            </mesh>
          );
        }
      )}
    </>
  );
}