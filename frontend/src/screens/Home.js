import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home = () => {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // New state for authentication

  // Check if user is authenticated (assuming JWT token is stored in localStorage)
  const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  // Fetch data from the API
  const loadData = useCallback(async () => {
    setLoading(true); // Set loading to true before starting the API call

    try {
      const response = await fetch("http://localhost:5000/api/v1/display/data", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          ...(isAuthenticated && { Authorization: `Bearer ${localStorage.getItem('token')}` }), // Pass token if authenticated
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setFoodItem(data[0]);  // Assuming the food items are in data[0]
      setFoodCat(data[1]);    // Assuming the categories are in data[1]
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error loading data:', error);
      setLoading(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    checkAuth();  // Check if user is authenticated when component mounts
    loadData();   // Fetch the data
  }, [isAuthenticated, loadData]); // Run useEffect again if 'isAuthenticated' or 'loadData' changes

  return (
    <>
      <Navbar />
      
      <div>
        {/* Carousel Section */}
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain" }}>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Carousel Images */}
            <div className="carousel-item active">
              <img src="https://storage.googleapis.com/a1aa/image/ebZeAfNvH6YdxIlgyxqeNVFan8scVxe5F1dpe4fKXc4U2WEzJA.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src="https://storage.googleapis.com/a1aa/image/SZ4QJfYsXVzEHKu39uUhQe3SDXlvFJTFi28hTeSl4BghXRMnA.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src="https://media.istockphoto.com/id/1293840244/photo/top-view-rich-plum-nuts-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=e6eaUb4ICfs35-JKaCT8xM8wC79knAuXqTf_Pqub9_o=" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Third slide" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Food Categories and Items */}
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : foodCat.length > 0 ? (
          foodCat.map((category) => (
            <div key={category._id} className="row mb-3">
              <div className="fs-3 m-3">{category.CategoryName}</div>
              <hr />
              {foodItem.length > 0 ? (
                foodItem
                  .filter((item) => item.CategoryName === category.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                  .map((filteredItem) => (
                    <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3">
                      <Card foodItem={filteredItem} />
                    </div>
                  ))
              ) : (
                <div>No items available in this category.</div>
              )}
            </div>
          ))
        ) : (
          <div>No categories available.</div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;
