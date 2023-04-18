import { useEffect, useState } from "react";
import { Button, Flowbite, Label, Select } from 'flowbite-react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useGetUserID } from "../../hooks/useGetUserID.js";

function CartContent() {
    const [ savedProducts, setSavedProducts ] = useState([]);
    const userID = useGetUserID();

    useEffect(() => {
        const fetchSavedProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/products/savedProducts/${userID}`);
                setSavedProducts(response.data.savedProducts);
                // console.log(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchSavedProduct();
    }, []);

    return (
        <div>
            <Flowbite
                theme={{
                    theme: {
                        alert: {
                            color: {
                                primary: 'bg-primary'
                            }
                        }
                    }
                }}
            >


                {/* <div class="container mx-auto mt-10"> */}
                <div class="">
                    <div class="flex my-10">
                        <div class="relative w-3/4 px-20 py-">
                            {/* <div class="flex justify-between border-b pb-8"> */}
                            <div class="flex justify-between border-b pb-8">
                                <h1 class="font-semibold text-2xl dark:text-white">Shopping Cart</h1>
                                <h2 class="font-semibold text-2xl dark:text-white">3 Items</h2>
                            </div>
                            <div class="flex mt-10 mb-5">
                                <h3 class="font-semibold text-gray-600 dark:text-gray-400 text-xs uppercase w-2/5">Product Details</h3>
                                <h3 class="font-semibold text-center text-gray-600 dark:text-gray-400 text-xs uppercase w-1/5 ">Quantity</h3>
                                <h3 class="font-semibold text-center text-gray-600 dark:text-gray-400 text-xs uppercase w-1/5 ">Price</h3>
                                <h3 class="font-semibold text-center text-gray-600 dark:text-gray-400 text-xs uppercase w-1/5 ">Total</h3>
                            </div>




                            <div className="grid grid-rows-4 gap-y-5">

                                {/* =================== CARD ONE =================== */}
                                {savedProducts.map((product) => (

                                    <div key={product._id} class="flex items-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-slate-300 hover:dark:bg-slate-800 hover:scale-105 hover:transition hover:ease-in hover:duration-150 -mx-8 px-6 py-5">
                                        <div class="flex w-2/5">
                                            {/*<!-- product --> */}
                                            <div class="w-20">
                                                <img class="h-24" src={product.imageUrl} alt="product loading" />
                                            </div>
                                            <div class="flex flex-col justify-between ml-4 flex-grow">
                                                <span class="font-bold text-base dark:text-white">{product.name}</span>
                                                <a href="/" class="font-semibold hover:text-red-500 text-gray-500 text-xs dark:text-gray-400">Remove</a>
                                            </div>
                                        </div>
                                        <div class="flex justify-center w-1/5">
                                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>

                                            <input class="mx-2 border text-center w-8 dark:bg-slate-500" type="text" value="1" />

                                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </div>
                                        <span class="text-center w-1/5 font-semibold text-base dark:text-white">{product.prize} KES</span>
                                        <span class="text-center w-1/5 font-semibold text-base dark:text-white">{product.prize} KES</span>
                                    </div>

                                ))}







                            </div>


                        </div>


                        <div id="summary" class="w-1/4 px-8 pt-">
                            <h1 class="font-semibold text-2xl border-b pb-8 dark:text-white">Order Summary</h1>
                            <div class="flex justify-between mt-10 mb-5">
                                <span class="font-semibold text-base uppercase dark:text-white">Items 3</span>
                                <span class="font-semibold text-base dark:text-white">590$</span>
                            </div>
                            <div>
                                {/* <label class="font-medium inline-block mb-3 text-base uppercase">Shipping</label>
                                <select class="block p-2 text-gray-600 w-full text-base">
                                    <option>Standard shipping - $10.00</option>
                                </select> */}
                                <div id="select">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="countries"
                                            value="Shipping"
                                        />
                                    </div>
                                    <Select
                                        id="countries"
                                        required={true}
                                    >
                                        <option>
                                            Standard shipping - $10.00
                                        </option>
                                    </Select>
                                </div>
                            </div>
                            <div class="py-10">
                                {/* <label for="promo" class="font-semibold inline-block mb-3 text-base uppercase">Promo Code</label>
                                <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-base w-full" /> */}
                                <div className="dark:text-gray-300">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="username3"
                                            color="green"
                                        // value="Your name"
                                        />
                                    </div>
                                    {/* <div className="">
                                    <TextInput
                                        id="username"
                                        placeholder="Bonnie Green"
                                        required={true}
                                        color="green"
                                        helperText={<React.Fragment><span className="font-medium">Alright!</span>{' '}Username available!</React.Fragment>}
                                    />
                                    </div> */}
                                    <div class="-mb-2">
                                        <label for="password" class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">PROMRCODE</label>
                                        <input type="password" id="password" placeholder="Enter your code" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                </div>
                            </div>
                            <Button>Apply</Button>
                            <div class="border-t mt-8">
                                <div class="flex font-semibold justify-between py-6 text-base uppercase dark:text-white">
                                    <span>Total cost</span>
                                    <span>$600</span>
                                </div>
                                {/* <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-base text-white uppercase w-full">Checkout</button> */}
                                <Link to="/checkout" type="submit" className="mt-0 w-full bg-blue-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-offset-1 focus:ring-blue-800">Checkout</Link>
                                <div class="grid grid-cols-1">
                                    <Link to="/" type="button" class="place-self-center mt-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Continue Shopping</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </Flowbite>
        </div >
    );
}

export default CartContent;
