import React from "react";
import TableEntry from "./TableEntry";
import Total from "./Total";
const ReviewTable = () => {
  return (
    <div className="review-table-container">
      <table className="review-table">
        <thead>
          <tr>
            <th className="text-left">Qty</th>
            <th className="text-left">Description</th>
            <th className="text-end w-40">Price</th>
            <th className="text-end w-40">Amount</th>
          </tr>
        </thead>
        <tbody>
          <TableEntry />
          <tr className="h-14">
            <td className="w-28"></td>
            <td></td>
            <td className="w-40 text-end"></td>
            <td className="w-40 text-end"></td>
          </tr>
          <Total title="Subtotal" amount={6} /> 
          <Total title="Total" amount={1} />
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
