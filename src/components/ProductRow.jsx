import React from "react";

function ProductRow({ product }) {
    const textColor = product.inStock ? "black" : "red";
  
    return (
        <tr>
        <td style={{ color: textColor }}>{product.name}</td>
        <td style={{ color: textColor }}>{product.price}</td>
      </tr>
    );
  }

export default ProductRow;



