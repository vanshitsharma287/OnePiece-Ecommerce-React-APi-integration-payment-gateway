import "../css/ProductSpecs.css";

const ProductSpecs = ({ product }) => {
    return (
        <div className="product-specs">
        
            <table>
                <thead>
                    <tr>
                        <th colSpan="2" id="table-header">
                            Product Specification
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Brand</td>
                        <td>{product.brand}</td>
                    </tr>

                    <tr>
                        <td>Model Name</td>
                        <td>{product.sku}</td>
                    </tr>

                    <tr>
                        <td>Type</td>
                        <td>{product.category}</td>
                    </tr>

                    <tr>
                        <td>Weight</td>
                        <td>{product.weight} lbs</td>
                    </tr>
                    <tr>
                        <td>Dimensions</td>
                        <td>width: {product.dimensions.width} cm,
                            height: {product.dimensions.height} cm,
                            depth: {product.dimensions.depth} cm </td>
                    </tr>
                    <tr>
                        <td>Tags</td>
                        <td>{product.tags[0]}, {product.tags[1]} </td>
                    </tr>
                    <tr>
                        <td>Warranty</td>
                        <td>{product.warrantyInformation} </td>
                    </tr>

                    <tr>
                        <td>Color</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>Country of Origin</td>
                        <td>India</td>
                    </tr>
                </tbody>
            </table>

            <div className="key-features">
                <h2>Key Features</h2>
                <div className="icon">
                <p><i class="fa-solid fa-circle-check"></i> Volumizing & Lengthening Formula</p>
                <p><i class="fa-solid fa-circle-check"></i> Innovative Brush Design</p>
                <p><i class="fa-solid fa-circle-check"></i> Long-Lasting Wear</p>
                <p><i class="fa-solid fa-circle-check"></i> Cruelty Free</p>
                </div>
            </div>

        </div>

        
        
      
    );
};

export default ProductSpecs;