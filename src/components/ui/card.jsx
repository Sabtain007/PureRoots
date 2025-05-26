import React from "react";

const Card = ({ title, description, image }) => { return ( <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-sm"> {image && <img src={image} alt={title} className="w-full h-48 object-cover" />} <div className="p-4"> <h3 className="text-xl font-semibold mb-2">{title}</h3> <p className="text-gray-600 text-base">{description}</p> </div> </div> ); };

export default Card;

