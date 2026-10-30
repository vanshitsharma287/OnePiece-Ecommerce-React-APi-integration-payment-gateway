import { useState } from "react";
import "../css/ProductFilters.css";
const ProductFilters = (props) => {
    const [priceValue, setPriceValue] = useState(500);

    return (
        <section className={`product-filters-section ${props.show ? "filter-open" : ""
            }`}>
            <div className="product-overlay" onClick={() => props.setShowFilter(false)}></div>
            <div className="product-filters">

                <div className="filter-heading">
                    <h1>Filters</h1>
                    <i onClick={() => props.setShowFilter(false)} class="fa-solid fa-xmark"></i>
                </div>

                <form>

                    <div className="form-filters">
                        <div className="left-filters-section">
                            <div className="category-section">
                                <div className="category-heading">
                                    <h4>Category</h4>
                                    <i class="fa-solid fa-chevron-up"></i>
                                </div>

                                <div className="category-options">
                                    <div className="category">
                                        <input type="checkbox" id="allCategories"></input>
                                        <label htmlFor="allCategories">All Categories</label>

                                    </div>

                                    <div className="category">
                                        <input type="checkbox" id="women"></input>
                                        <label htmlFor="women">Women</label>

                                    </div>

                                    <div className="category">
                                        <input type="checkbox" id="men"></input>
                                        <label htmlFor="men">Men</label>

                                    </div>

                                    <div className="category">
                                        <input type="checkbox" id="accessories"></input>
                                        <label htmlFor="accessories">Accessories</label>

                                    </div>
                                    <div className="category">
                                        <input type="checkbox" id="shoes"></input>
                                        <label htmlFor="shoes">Shoes</label>

                                    </div>
                                    <div className="category">
                                        <input type="checkbox" id="bags"></input>
                                        <label htmlFor="bags">Bags</label>

                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="price-range">
                                <div className="price-range-heading">
                                    <h4>Price Range</h4>
                                    <i class="fa-solid fa-chevron-up"></i>
                                </div>

                                <div class="price-range-slider">
                                    <span id="price-value">{`₹ ${priceValue}`}</span>
                                    <input type="range" min="500" max="10000" value={priceValue} id="price-range" onChange={(e) => setPriceValue(e.target.value)} />
                                </div>
                            </div>

                            <hr />

                            <div className="brand-section">
                                <div className="brand-heading">
                                    <h4>Brand</h4>
                                    <i class="fa-solid fa-chevron-up"></i>
                                </div>

                                <div className="brand-options">
                                    <div className="brand">
                                        <input type="checkbox" id="ZARA"></input>
                                        <label htmlFor="ZARA">ZARA</label>

                                    </div>

                                    <div className="brand">
                                        <input type="checkbox" id="H&M"></input>
                                        <label htmlFor="H&M">H&M</label>

                                    </div>

                                    <div className="brand">
                                        <input type="checkbox" id="Nike"></input>
                                        <label htmlFor="Nike">Nike</label>

                                    </div>

                                    <div className="brand">
                                        <input type="checkbox" id="Adidas"></input>
                                        <label htmlFor="Adidas">Adidas</label>

                                    </div>
                                    <div className="brand">
                                        <input type="checkbox" id="Puma"></input>
                                        <label htmlFor="Puma">Puma</label>

                                    </div>
                                    <div className="brand">
                                        <input type="checkbox" id="Other"></input>
                                        <label htmlFor="Other">Other</label>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="right-filter-section">
                            <div className="size-section">
                                <div className="size-heading">
                                    <h4>Size</h4>
                                    <i class="fa-solid fa-chevron-up"></i>
                                </div>
                                <div className="size-options">
                                    <button type="button">XS</button>
                                    <button type="button">S</button>
                                    <button type="button">M</button>
                                    <button type="button">L</button>
                                    <button type="button">XL</button>
                                    <button type="button">XXL</button>
                                </div>
                            </div>

                            <hr />

                            <div class="color-section">
                                <div class="color-heading">
                                    <h4>Color</h4>
                                    <i class="fa-solid fa-chevron-up"></i>
                                </div>

                                <div class="color-options">
                                    <button type="button" className="color-dot selected" style={{ "--color": "#222222" }} aria-label="Black"></button>
                                    <button type="button" className="color-dot" style={{ "--color": "#FFFFFF" }} aria-label="White"></button>
                                    <button type="button" className="color-dot" style={{ "--color": "#B8B8B8" }} aria-label="Grey"></button>
                                    <button type="button" className="color-dot" style={{ "--color": "#B8A68D" }} aria-label="Beige"></button>
                                    <button type="button" className="color-dot" style={{ "--color": "#79502C" }} aria-label="Brown"></button>
                                    <button type="button" className="color-dot" style={{ "--color": "#1E3553" }} aria-label="Navy"></button>
                                    <button type="button" className="color-dot" style={{ "--color": "#315E32" }} aria-label="Green"></button>
                                    <button type="button" className="color-dot" style={{ "--color": "#C93432" }} aria-label="Red"></button>
                                    <button type="button" className="color-dot" style={{ "--color": "#E99AB5" }} aria-label="Pink"></button>
                                    <button type="button" className="color-dot" style={{ "--color": "#AD69BD" }} aria-label="Purple"></button>
                                    <button type="button" className="color-dot" style={{ "--color": "#F5D044" }} aria-label="Yellow"></button>
                                </div>
                            </div>

                            <hr />

                            <div class="sortBy-section">
                                <div class="sortBy-heading">
                                    <h4>Sort By</h4>
                                    <i class="fa-solid fa-chevron-up"></i>
                                </div>

                                <div className="sortBy-options">
                                    <div className="sortBy">
                                        <input type="radio" id="latestArrival" name="sortBy" value="latest"></input>
                                        <label htmlFor="latestArrival">Latest Arrival</label>

                                    </div>


                                    <div className="sortBy">
                                        <input type="radio" id="price-low" name="sortBy" value="lowToHigh"></input>
                                        <label htmlFor="price-low">Price: Low To High</label>

                                    </div>

                                    <div className="sortBy">
                                        <input type="radio" id="price-high" name="sortBy" value="highToLow"></input>
                                        <label htmlFor="price-high">Price: High To Low</label>

                                    </div>
                                    <div className="sortBy">
                                        <input type="radio" id="popularity" name="sortBy" value="popularity"></input>
                                        <label htmlFor="popularity">Popularity</label>

                                    </div>
                                    <div className="sortBy">
                                        <input type="radio" id="top-rated" name="sortBy" value="topRated"></input>
                                        <label htmlFor="top-rated">Top Rated</label>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="submit-reset-btn">
                        <button type="button" id="reset-btn">Reset Filters</button>
                        <button type="submit" id="submit-btn">Apply Filters</button>
                    </div>

                </form>


            </div>
        </section>
    )


}

export default ProductFilters;