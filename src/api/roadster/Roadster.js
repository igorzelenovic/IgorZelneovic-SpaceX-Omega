import axios from "axios";

axios
  .get("https://api.spacexdata.com/v3/roadster")
  .then((response) => {
    // Uspesno povuceni podaci
    console.log(response.data);
  })
  .catch((error) => {
    // Greska prilikom povlacenja podataka
    console.error(error);
  });

export default Roadster;
