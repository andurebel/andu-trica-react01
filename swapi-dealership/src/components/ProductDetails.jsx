export const ProductDetails = ({ product }) => {
const renderTableRows = () => {
  const entries = Object.entries(product);
  entries.map(([feature, value]) => {
    return (
      <tr>
        <td>{feature}</td>
        <td>{value}</td>
      </tr>
    );
  });
};

return (
  <table className="table table-dark">
    <tbody>{renderTableRows()}</tbody>
  </table>
);
};

export default ProductDetails;
