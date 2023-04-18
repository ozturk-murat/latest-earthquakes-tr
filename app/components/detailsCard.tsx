"use client";
import { Earthquake } from "../api/earthquakeList";
import MapPin from "./mapPin";

interface Props {
  data: Earthquake;
  onClose: () => void;
}

const Card: React.FC<Props> = ({ data, onClose }) => {

  function formatDate(timestamp: number) {
    const date = new Date(timestamp);
    const year = date.getUTCFullYear();
    const month = (`0${date.getUTCMonth() + 1}`).slice(-2);
    const day = (`0${date.getUTCDate()}`).slice(-2);
    const hours = (`0${date.getUTCHours()}`).slice(-2);
    const minutes = (`0${date.getUTCMinutes()}`).slice(-2);
    const seconds = (`0${date.getUTCSeconds()}`).slice(-2);
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
    <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 h-2/3 sm:h-3/4 bg-white rounded-lg p-6 flex flex-col justify-between z-50">
      <div className="w-full h-2/10 pb-0 mb-0 overflow-hidden justify-end flex items-end">
        <button
          onClick={onClose}
          className="top-2 right-2 p-2 text-gray-700 rounded-full hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 
                  1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 1 0 1.414-1.414L11.414 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="w-full h-4/10 sm:h-3/10 overflow-hidden">
        <MapPin data={data}/>
      </div>
      <div className="w-full h-4/10 sm:h-7/10 flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-2">Deprem Detayları</h3>
        <ul>
          <li className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Tarih:</span>{" "}
            <span>{formatDate(data.properties.time).slice(0, 10)}</span>
          </li>
          <li className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Saat:</span> <span>{formatDate(data.properties.time).slice(-8)}</span>
          </li>
          <li className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Büyüklük:</span>{" "}
            <span>{data.properties.mag}</span>
          </li>
          <li className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Derinlik:</span> <span>{data.properties.place.slice(0, 5)}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Lokasyon:</span> <span>{data.properties.place}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  );
};

export default Card;
