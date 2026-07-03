function ProductList() {
  const products = [
    { id: 1, name: "Rice (5kg)",   price: 320  },
    { id: 2, name: "Smartphone",      price: 15000 },
    { id: 3, name: "Dal (1kg)",   price: 120  },
    { id: 4, name: "headphone",         price: 850  },
    { id: 5, name: "Shirt",           price: 650  },
    { id: 6, name: "Sugar (1kg)",  price: 80   },
  ];
  const expensiveProducts = products.filter((product) => product.price>500);
  return(
    <div>
        {products.map((product) => (
        <div key={product.id} style={{ margin: "5px", padding: "8px", background: "#f5f5f5", borderRadius: "6px" }}>
          <span>{product.name}</span>
          <span style={{ float: "right" }}>💰 {product.price} tk</span>
        </div>
        ))}
    
  {expensiveProducts.length === 0 ? (
        <p>No products available 😔</p>
      ) : (
        expensiveProducts.map((product) => (
          <div
            key={product.id}
            style={{ margin: "5px", padding: "8px", background: "#fff3cd", borderRadius: "6px" }}
          >
            <span>⭐ {product.name}</span>
            <span style={{ float: "right" }}>💰 {product.price} tk</span>
          </div>
        ))
      )}
      </div>
  );
}
export default ProductList;