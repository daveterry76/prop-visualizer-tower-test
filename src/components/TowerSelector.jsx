import { useNavigate } from "react-router-dom";
import { towers } from "../data/mockData";

const TowerSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 p-4">
      <h3 className="text-2xl font-semibold">Tower Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {towers.map((t) => (
          <div
            key={t.id}
            onClick={() => navigate(`/tower/${t.id}`)}
            className="bg-gray-100 p-8 h-40 rounded-lg shadow hover:bg-gray-200 cursor-pointer flex flex-col justify-center items-center"
          >
            <h2 className="text-2xl font-bold">{t.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TowerSelector;
