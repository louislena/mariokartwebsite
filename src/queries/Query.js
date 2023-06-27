import axios from "axios";

/**
 * Returns Tracks object from API
 * 
 * @param {int} amount Amount of tracks
 * @returns Object of tracks. See tracks.json
 */
export const Tracks = (amount = 6) => axios.get("http://localhost:5000/random-tracks?track_amount=" + amount).then(res => res.data);

/**
 * Returns Setup object from API
 * 
 * @param {int} amount Amount of player setups
 * @returns Object of player setups. See setups.json
 */
export const Setups = (amount = 4) => axios.get("http://localhost:5000/random-setup?setup_amount=" + amount).then(res => res.data);

/**
 * Returns list of items from API
 * 
 * @returns {List[string]} List of items
 */
export const Items = () => axios.get("http://localhost:5000/random-items").then(res => res.data);

//<Button onClick={() => Setups(2).then(b => setA(b))} variant='warning'>hello i am useless</Button>
