import { useState } from 'react';
import axios from "axios";
import { useGetUserID } from "../../hooks/useGetUserID.js";
import { useNavigate } from "react-router-dom";

function ProductFormCard() {
   const userID = useGetUserID();

   const [ product, setProduct ] = useState({
      userOwner: userID,
      name: "",
      imageUrl: "",
      description: {
         summary: "",
         description: "",
      },
      size: "",
      color: "",
      prize: "",
      quantity: "",
   });

   const navigate = useNavigate();

   const handleChange = (event) => {
      const { name, value } = event.target;
      setProduct({ ...product, [ name ]: value });
   };

   const onSubmit = async (event) => {
      event.preventDefault();
      try {
         await axios.post("http://localhost:3001/products", product);
         alert("Product Created!");
         navigate("/");
         navigate(0);
      } catch (err) {
         console.error(err);
      }
   };


   return (
      <>
         <div className="flex justify-center px-20 pt-20 pb-36">
            <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

               <form onSubmit={onSubmit}>
                  <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add your product</h5>
                  <br></br>
                  <div className="relative z-0 w-full mb-6 group">
                     <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="floating_email"
                        // value={email}
                        // onChange={(event) => setEmail(event.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required />
                     <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 grid grid-cols-2 gap-4 place-content-around">
                        <div>Product name</div>
                        <div><sup className="text-blue-600 dark:text-blue-600">*required</sup></div>
                     </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                     <input
                        onChange={handleChange}
                        type="text"
                        name="imageUrl"
                        id="floating_email"
                        // value={email}
                        // onChange={(event) => setEmail(event.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required />
                     <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 grid grid-cols-2 gap-4 place-content-around">
                        <div>Insert your image link here</div>
                        <div><sup className="text-blue-600 dark:text-blue-600">*required</sup></div>
                     </label>
                  </div>
                  {/* Image file input */}
                  {/* <div className="relative z-0 w-full mb-6 group">
                     <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Upload multiple product pictures</label>
                     <input
                        name="imageUrl"
                        onChange={handleChange}
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="multiple_files"
                        type="file" multiple />
                  </div> */}
                  <div className="grid md:grid-cols-2 md:gap-6">
                     <div className="relative z-0 w-full mb-6 group">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write a precise short summary of your product</label>
                        <div><sup className="text-blue-600 dark:text-blue-600">*required</sup></div>
                        <textarea
                           name="description.summary"
                           onChange={handleChange}
                           id="message"
                           rows="4"
                           class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Write your summary here...">
                        </textarea>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write the physical description of your product</label>
                        <div><sup className="text-blue-600 dark:text-blue-600">*required</sup></div>
                        <textarea
                           name="description.description"
                           onChange={handleChange}
                           id="message"
                           rows="4"
                           class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Write your description here...">
                        </textarea>
                     </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           onChange={handleChange}
                           type="text"
                           name="size"
                           id="floating_town"
                           // value={town}
                           // onChange={(event) => setTown(event.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 grid grid-cols-2 gap-4 place-content-around">
                           <div>Size</div>
                        </label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           onChange={handleChange}
                           type="text"
                           name="color"
                           id="floating_street"
                           // value={street}
                           // onChange={(event) => setStreet(event.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Color</label>
                     </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           onChange={handleChange}
                           type="text"
                           name="prize"
                           id="floating_estate"
                           // value={estate}
                           // onChange={(event) => setEstate(event.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prize</label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           onChange={handleChange}
                           type="text"
                           name="quantity"
                           id="floating_country"
                           // value={country}
                           // onChange={(event) => setCountry(event.target.value)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                     </div>
                  </div>
                  <div className="flex justify-center">
                     <button type="submit" className="w-2/5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
                  </div>
               </form>

            </div>
         </div >
      </>
   );
}


export default ProductFormCard;