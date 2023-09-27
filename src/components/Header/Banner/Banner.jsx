// import "./assets/custom.css";
import React from 'react';

const Banner = () => {
    return (
        <div className="custom-bg-image h-[80vh] w-full">
            <h4 className='text-4xl font-bold text-center pt-[20vh] mb-[5vh]'>I Grow By Helping People In Need</h4>
            <form className="mx-auto text-center">
                <input type="text" name="searchBar" placeholder="Search here" className="input lg:w-[calc(30rem)] px-5 max-w-xs rounded-l-md shadow-lg py-2 lg:py-3" />
                <input type="submit" className="bg-[#FF444A] text-white py-2 lg:py-3 px-4 rounded-r-md" value="Search" />
            </form>
        </div>
    );
};

export default Banner;