import { Product } from "./Product";
import "./productsGrid.css";




export function ProductsGrid({products, loadCart}) {
  return (
    <div className="products-grid">
      {products.map(product => {

        return (
          <Product key={product.id} product={product} loadCart={loadCart} />
          );
      })}
    </div>
  );
}