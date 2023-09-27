import React from "react";
import swal from "sweetalert";

const PhoneCard = ({ phone }) => {
  const { id, phone_name, brand_name, rating, price, image } = phone || {};
  debugger
  const sa = image?.replace('./', '/');

  const handleAddToFavorites = () => {
    const addedFavoritesArray = [];

    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    //jokhon kisu nai tokhon e if vitor dhukba
    if (!favoriteItems) {
      addedFavoritesArray.push(phone);
      localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
      swal("Good job!", "Products added successfully!", "success");
    } 
    
    else {
      const isExits = favoriteItems.find((phone) => phone.id === id);
      
      if (!isExits) {

        addedFavoritesArray.push(...favoriteItems, phone);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
        swal("Good job!", "Products added successfully!", "success");
       
      } else {
        swal("Error!", "No duplicate !", "error");
      }

    }



    // localStorage.setItem('test',JSON.stringify([{name:"hasib"},{name:"ph"}]))
  };

  return (
    <div>
            <div>
              <img src={sa} alt="image" className="h-full w-full object-cover" />
            </div>
            <div className="relative">
                <div className="absolute z-20 w-full mt-[-100px] h-[100px] opacity-50 bg-black"></div>
                <button type="button" className="absolute z-30 ml-10 mt-[-70px] bg-red-500 text-white px-6 py-2 rounded-md font-semibold" onClick={handleAddToFavorites}> <span>Donate ${price}</span> </button>

                {/* <a className="inline-block" href="#">
                  <button
                    onClick={handleAddToFavorites}
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Add To favorites
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a> */}
            </div>
            <h3 className="text-3xl font-bold mt-5">{brand_name}</h3>
            <p className="text-md mt-2 mb-5">Dress smart and stylish for your educational journey. Explore trendy clothing options for students. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential. </p>
            <div>
                <h3 className="text-xl font-bold">Here are some of the benefits of a good education:</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Empowers students with access to quality education resources.</li>
                  <li>Supports educational programs for underserved communities.</li>
                  <li>Helps students focus on learning by providing appropriate clothing.</li>
                </ul>
            </div>
          </div>
  );
};

export default PhoneCard;
