import { useNavigate, useParams } from "react-router-dom";
import { floorsByTower } from "../data/mockData";
import { IoIosArrowRoundBack } from "react-icons/io";

const FloorSelector = () => {
  const { towerId } = useParams();
  const navigate = useNavigate();

  const floors = floorsByTower[towerId];
  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-800 mr-2 cursor-pointer"
        >
          <IoIosArrowRoundBack className="h-6 w-6" />
        </button>
        <h2 className="text-xl font-medium">Select a Floor</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {floors.map((floor) => (
          <div
            key={floor.id}
            onClick={() => navigate(`floor/${floor.id}`)}
            className="bg-blue-100 p-4 rounded hover:bg-blue-200 cursor-pointer text-center"
          >
            {floor.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorSelector;
