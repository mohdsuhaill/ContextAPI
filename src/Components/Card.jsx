import React, { useContext } from "react";
import { mycontext } from "../App";

const Card = () => {
  const [data, setdata] = useContext(mycontext);
  const totalprice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );
  const totalQuantity = data.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );
  const handleInc = (id, quantity) => {
    setdata((current) => {
      return current.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity + 1 || quantity + 1 };
        }
        return element;
      });
    });
  };
  const handleDec = (id, quantity) => {
    setdata((current) => {
      return current.map((element) => {
        if (element.id === id && quantity > 1) {
          return { ...element, quantity: element.quantity - 1 || quantity - 1 };
        }
        return element;
      });
    });
  };
  const handleRem = (id) => {
    setdata(data.filter((ele) => ele.id != id));
  };

  return (
    <div>
      <h1 className="text-center text-danger"> Added Cards</h1>
      <div className="d-flex flex-wrap justify-content-between p-3">
      <div><h3>Total Quantity={totalQuantity}</h3></div>
      <div><h3 >Total Price={totalprice}</h3></div>
      </div>

      {data.map((element, index) => {
        return (
          <div key={index}>
            <div className="card w-75 mx-auto mb-4 ">
              <div className="card-body ">
                <div className="img" >
                {element.images.map((ele, i) => {
                  return (
                    <div key={i}>
                      <img src={ele} alt="I phone img" />
                    </div>
                  );
                })}
                </div>
                <h5 className="card-title text-center">{element.title}</h5>
                 <small> <h5 className="card-title text-center muted-text"> {element.category}</h5></small>
                <h5 className="card-text text-center">{element.description}</h5>
                <hr />
                  <div className="d-flex justify-content-between   align-content-center  flex-wrap">
                    <h3 className="text-muted text-center">Shipping:</h3>
                    <h3>FREE</h3>
                  </div>
                  <div className="d-flex justify-content-between align-content-center flex-wrap">
                    <h3 className="text-muted">Sub-total: </h3>
                    <h3>
                      ${element.price * element.quantity || element.price}.00
                    </h3>
                  </div>
                <div className  ="btn-group justify-content-between align-content-center d-flex flex-wrap" role="group" aria-label="Third group">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleInc(element.id, element.quantity || 1)}
                  >
                    +
                  </button>
                  &nbsp;
                  <span className="btn"> {element.quantity || 1} </span>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleDec(element.id, element.quantity || 1)}
                  >
                    -
                  </button>
                  <br />
                  <button
                  className="btn btn-danger  " 
                  onClick={() => handleRem(element.id)}
                >
                  Remove
                </button>

                </div>


              </div>
            </div>

          </div>
          
        );
      })}

    </div>
  );
};

export default Card;
