import { Link } from "react-router-dom";

const initialList = [
  {
    id: "9876uy987yuio9876tyui",
    productName: "i phone",
    price: 100000,
    rating: 4.2,
    description: "Very Good",
  },
  {
    id: "poiuyu234543234oiuyty",
    productName: "samsung s23 ultra 5g",
    price: 125000,
    rating: 4.8,
    description: "Excellent",
  },
];
const Products = () => (
  <>
    <h1>Products Route</h1>

    <div>
      {initialList.map((eachItem) => (
        <Link to={`/products/${eachItem.id}`}>
          <ul>
            <li>{eachItem.productName}</li>
            <li>{eachItem.price}</li>
            <li>{eachItem.rating}</li>
            <li>{eachItem.description}</li>
          </ul>
        </Link>
      ))}
    </div>
  </>
);

export default Products;
