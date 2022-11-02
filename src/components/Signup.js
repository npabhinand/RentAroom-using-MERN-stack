import React ,{ useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios"; 


const Signup = () => {
	const [data, setData] = useState({
		email: "",
		// name: "",
		// phone: "",
    // place:"",
    password: "",
    // gender:"",
    // usertype:"",
    
	});
  const [type, setType] = useState()
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  
  return (
    <>
    <form>
    <input type="text" className="form-control" id="floatingInput" onChange={handleChange}  placeholder="name"/>
  <input type="password" className="form-control" id="floatingPassword" onChange={handleChange} placeholder=" New password"/>
  <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
    </form>
    </>
  )
}
  export default Signup;

 