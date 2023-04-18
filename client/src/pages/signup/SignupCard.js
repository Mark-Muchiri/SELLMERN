import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupCard() {
   const [ username, setUsername ] = useState("");
   const [ fname, setFname ] = useState("");
   const [ lname, setLname ] = useState("");
   const [ email, setEmail ] = useState("");
   const [ phonenumber, setPhonenumber ] = useState("");
   const [ town, setTown ] = useState("");
   const [ street, setStreet ] = useState("");
   const [ estate, setEstate ] = useState("");
   const [ country, setCountry ] = useState("");
   const [ password, setPassword ] = useState("");

   const navigate = useNavigate();

   const onSubmit = async (event) => {
      event.preventDefault();

      try {
         await axios.post("http://localhost:3001/auth/register",
            {
               username,
               email,
               fname,
               lname,
               phonenumber,
               town,
               street,
               estate,
               country,
               password,
            }
         );
         alert("Registration completed! Now login.");
         navigate("/login");
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <>
         <div className="flex justify-center px-20 pt-20 pb-36">
            <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

               <form onSubmit={onSubmit}>
                  <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
                  <br></br>
                  <div className="relative z-0 w-full mb-6 group">
                     <input
                        type="email"
                        name="email"
                        id="floating_email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required />
                     <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 grid grid-cols-2 gap-4 place-content-around">
                        <div>Email address</div>
                        <div><sup className="text-blue-600 dark:text-blue-600">*required</sup></div>
                     </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                     <input
                        type="password"
                        name="password"
                        id="floating_password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required />
                     <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 grid grid-cols-2 gap-4 place-content-around">
                        <div>Password</div>
                        <div><sup className="text-blue-600 dark:text-blue-600">*required</sup></div>
                     </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                     <input
                        type="password"
                        name="password2"
                        id="floating_repeat_password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required />
                     <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 grid grid-cols-2 gap-4 place-content-around">
                        <div>Confirm password</div>
                        <div><sup className="text-blue-600 dark:text-blue-600">*required</sup></div>
                     </label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="text"
                           name="fname"
                           id="floating_first_name"
                           value={fname}
                           onChange={(event) => setFname(event.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "

                           required />
                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 grid grid-cols-2 gap-4 place-content-around">
                           <div>First name</div>
                           <div><sup className="text-blue-600 dark:text-blue-600">*required</sup></div>
                        </label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="text"
                           name="lname"
                           id="floating_last_name"
                           value={lname}
                           onChange={(event) => setLname(event.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                     </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="text"
                           name="username"
                           id="floating_user_name"
                           value={username}
                           onChange={(event) => setUsername(event.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           required />
                        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 grid grid-cols-2 gap-4 place-content-around">
                           <div>User name</div>
                           <div><sup className="text-blue-600 dark:text-blue-600">*required</sup></div>
                        </label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="tel"
                           name="phonenumber"
                           id="floating_phone_number"
                           value={phonenumber}
                           onChange={(event) => setPhonenumber(event.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (0790123123)</label>
                     </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="text"
                           name="town"
                           id="floating_town"
                           value={town}
                           onChange={(event) => setTown(event.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "

                           required />
                        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 grid grid-cols-2 gap-4 place-content-around">
                           <div>Town</div>
                           <div><sup className="text-blue-600 dark:text-blue-600">*required</sup></div>
                        </label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="text"
                           name="street"
                           id="floating_street"
                           value={street}
                           onChange={(event) => setStreet(event.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street</label>
                     </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="text"
                           name="estate"
                           id="floating_estate"
                           value={estate}
                           onChange={(event) => setEstate(event.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Estate</label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="text"
                           name="country"
                           id="floating_country"
                           value={country}
                           onChange={(event) => setCountry(event.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                     </div>
                  </div>
                  <div className="flex justify-center">
                     <button type="submit" className="w-2/5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                  </div>
               </form>

            </div>
         </div>
      </>
   );
}

export default SignupCard;
