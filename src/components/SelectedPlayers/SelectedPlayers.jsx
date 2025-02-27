import PropTypes from 'prop-types';
import { toast } from "react-toastify";
const SelectedPlayers = ({ selectedPlayers, handleBtnActiveState, setSelectedPlayers }) => {
  
  const handleDelete = (player)=>{
   setSelectedPlayers(abc=>abc.filter(xyz=>xyz.id !==player.id))
   toast('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
    });
  }
  
  
  
  return (
    
    <div className="mb-96">
      <ul className="mt-8 mb-12 space-y-6">
        {selectedPlayers.map(player => (
          <li key={player.id} className="p-6 border rounded-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center gap-6">
                <figure>
                  <img
                    className="rounded-xl w-20 h-20 object-cover"
                    src={player.image}
                    alt={player.name}
                  />
                </figure>

                <div className="space-y-2">
                  <h2 className="font-semibold text-lg">{player.name}</h2>
                  <p className="text-gray-500">{player.battingBowlingType}</p>
                  <p className="text-gray-500">Price: ${player.biddingPrice}</p>
                </div>
              </div>

              <div>
                <button onClick={()=>handleDelete(player)}>
                  <i className="fa-solid fa-trash-can w-5 h-5 text-red-400"></i>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="text-center sm:text-left">
        <button
          onClick={() => handleBtnActiveState("available")}
          className="btn font-bold bg-[#E7FE29] text-black px-5 py-3 rounded-xl"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
  handleBtnActiveState: PropTypes.func.isRequired,
  setSelectedPlayers:PropTypes.array.isRequired,
};

export default SelectedPlayers;
