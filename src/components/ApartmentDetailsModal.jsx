import { useParams, useNavigate } from "react-router-dom";
import { apartmentDetails } from "../data/mockData";

const ApartmentDetailsModal = () => {
  const { apartmentId } = useParams();
  const navigate = useNavigate();

  const apartment = apartmentDetails[apartmentId];

  if (!apartment) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={() => navigate(-1)} // closes modal on background click
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-3 text-2xl text-gray-500 hover:text-black cursor-pointer"
          onClick={() => navigate(-1)}
        >
          ×
        </button>
        <div className="flex justify-center items-center mt-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <img
            src={apartment.image}
            alt={`Layout for ${apartment.type}`}
            className="h-80 rounded transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 border-t">
          <h2 className="text-xl font-bold">{apartment.type}</h2>
          <p className="text-gray-700">
            {apartment.area} • {apartment.rooms} rooms
          </p>
          <p className="mt-2 text-gray-600">{apartment.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetailsModal;
