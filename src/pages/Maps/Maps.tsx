import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Maps = () => {
  const count: number[] = Array.from(Array(9));

  return (
    <>
      <div className="px-4 py-3 overflow-x-auto shadow-md justify-self-center">
        <div className="flex max-w-5xl mx-auto">
          {count.map((e, i) => {
            return (
              <div className="ml-4 first:ml-0">
                <input
                  className="hidden peer"
                  type="radio"
                  name="date"
                  value={`day${i}`}
                  id={`day${i}`}
                />
                <label
                  className="block w-24 py-1 text-base text-center border-2 rounded-full shadow-md peer-checked:text-white peer-checked:border-white peer-checked:bg-primary"
                  htmlFor={`day${i}`}
                >
                  {`${i + 1}일차`}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <Map
        className="w-full h-[calc(100vh-141px)] md:h-[calc(100vh-124px)]"
        center={{ lat: 33.5563, lng: 126.79581 }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div className="text-black">Hello World!</div>
        </MapMarker>
      </Map>
    </>
  );
};

export default Maps;
