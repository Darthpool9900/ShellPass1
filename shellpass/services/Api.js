import axios from "axios";


const api = axios.create({
    baseURL: 'https://shellgsllocator.geoapp.me/api/v2/locations/nearest_to?lat=-23.555771&lng=-46.639557&limit=50&locale=pt_BR&format=json%27'
});

export default api;
{/*constructor(props){
      super(props);
      this.state = {
        postos: []
      }
    };


    async componentDidMount(){
      const response = await api.get('nearest_to?lat=-23.555771&lng=-46.639557&limit=50&locale=pt_BR&format=json%27')
      this.setState({
        postos: response.data
      });
    }; */}