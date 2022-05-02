import { useEffect, useState } from "react";
import "./Table.css";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../Redux/actions";

export const Orders = () => {
  // const [orders, setOrders] = useState([]);
  const orders = useSelector((store) => store.orders);
  const dispatch = useDispatch();
  //  Get all data when admin logs in and populate it
  // store it in redux
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await fetch("http://localhost:8080/orders");
    data = await data.json();
    console.log(data);
    // setOrders(data);
    dispatch(addData(data));
  }
  return (
    <div>
      <div>
        <div>
          <select className="controls" name="progress" id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((el) => {
              return (
                <tr className="orders-row" key={el.id}>
                  <td className="id">{el.id}</td>
                  <td className="problem">{el.problem}</td>
                  <td className="owner">{el.owner_name}</td>
                  <td className="status">{el.status}</td>
                  <td className="cost">{el.status}</td>
                  <td className="change-status">
                    {/* Show select dropdown only if status is Not Accepted */}
                    {el.status != "Not Accepted" ? (
                      <select className="changeStatus" name="changeStatus">
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                        <option value="Not Accepted">Not Accepted</option>
                      </select>
                    ) : null}
                  </td>
                  <td className="accept">
                    {/* Show this button only if status is Not Accepted */}
                    {/* on change make request to update it in db, and show changed status in table */}
                    {el.status == "Not Accepted" ? (
                      <button>Accept</button>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
