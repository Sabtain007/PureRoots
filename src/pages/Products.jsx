export default function Products() {
    const productList = [
        { name: "Organic Wheat", image: "/images/wheat.webp" },
            { name: "Fresh Mangoes", image: "/mango.jpg" },
                { name: "Basmati Rice", image: "/images/rice.jpg" },
                    { name: "Dairy Products", image: "/images/milk.jpg" },
                      ];

                        return (
                            <div className="p-10 text-center">
                                  <h1 className="text-3xl font-bold text-green-700">Our Products</h1>
                                        <p className="mt-4 text-gray-600">
                                                Organic wheat, mangoes, rice, dairy and more — grown with care.
                                                      </p>

                                                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                                                    {productList.map((product, index) => (
                                                                              <div key={index} className="bg-white shadow rounded-2xl p-4">
                                                                                          <img
                                                                                                        src={product.image}
                                                                                                                      alt={product.name}
                                                                                                                                    className="w-full h-40 object-cover rounded-xl"
                                                                                                                                                />
                                                                                                                                                            <h2 className="mt-4 text-lg font-semibold text-gray-800">
                                                                                                                                                                          {product.name}
                                                                                                                                                                                      </h2>
                                                                                                                                                                                                </div>
                                                                                                                                                                                                        ))}
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                    
}