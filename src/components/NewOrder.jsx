import { useSelector, useDispatch } from "react-redux";
import { addData } from "../Redux/actions";
import { useEffect, useState, useRef } from "react";
import { store } from "../Redux/store";

export const NewOrder = () => {

  const userorders = useSelector((store) => store.orders);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await fetch("http://localhost:8080/orders");
    data = await data.json();
    dispatch(addData(data));
  }

  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit">submit</button>
      </div>

      <div className="pastOrders">
     
        <button className="filter">
        
          {toggle ? "showUnfinished" : "Only unfinished"}
        </button>

       
        <div className="past-orders">
          {userorders.map((el) => {
            if (el.owner_name == user.username) return;
            else
              return (
                <div>
                  <span className="id">{el.id}</span>.{" "}
                  <span className="problem">{el.problem}</span>{" "}
                  <span className="cost">
                    {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
                    {el.status == "Accepted" ? null : el.cost}
                  </span>
                  <p className="status">Status: {el.status} </p>
                  <hr />
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};
