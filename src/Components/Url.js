import axios from 'axios';
export default axios.create({baseURL:"https://api.github.com/search/"})



// handleSubmit = async e => {
//     e.preventDefault();

//     const response = await axios.get('https://api.github.com/search/users', {
//         params: {
//             q: this.state.query,
//         },
        
//     });
//    console.log(response)
// }
