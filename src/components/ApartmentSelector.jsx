import { Outlet, useParams, useNavigate } from "react-router-dom";
import { apartmentsByFloor } from "../data/mockData";
import { IoIosArrowRoundBack } from "react-icons/io";

const ApartmentSelector = () => {
  const { floorId } = useParams();
  const navigate = useNavigate();

  const floorNumber = floorId ? Number(floorId) : null;
  const apartments =
    floorNumber && apartmentsByFloor[floorNumber]
      ? apartmentsByFloor[floorNumber]
      : [];

  return (
    <div className="p-4 relative">
      <div className="flex items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-800 mr-2 cursor-pointer"
        >
          <IoIosArrowRoundBack className="h-6 w-6" />
        </button>
        <h2 className="text-xl font-medium">Apartment layouts</h2>
      </div>

      {floorNumber === null ? (
        <p>No floor selected.</p>
      ) : apartments.length === 0 ? (
        <p>No apartments found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {apartments.map((apt) => (
            <div
              key={apt.id}
              onClick={() => navigate(`apartment/${apt.id}`)}
              className="cursor-pointer bg-white shadow rounded overflow-hidden transition"
            >
              <div className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <img
                  src={apt.thumbnail}
                  alt={`${apt.type} thumbnail`}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 border-t border-gray-400">
                <h3 className="font-bold">{apt.type}</h3>
                <p>
                  {apt.area} • {apt.rooms} rooms
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* This renders modal if /apartment/:apartmentId is active */}
      <Outlet />
    </div>
  );
};

export default ApartmentSelector;
