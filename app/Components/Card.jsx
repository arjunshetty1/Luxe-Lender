const Card = ({ item }) => {
  return (
    <>
      <div className="card w-72  bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Product Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.productName}</h2>

          <div className="card-actions flex justify-between items-center">
            <h2 className="font-medium">{item.price}/Per Day</h2>
            <button
              className="btn"
              onClick={() => document.getElementById(item.id).showModal()}
            >
              Rent Now
            </button>

            <dialog key={item.id} id={item.id} className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">{item.productName}</h3>
                <p className="py-4">{item.id}</p>
                <p>{item.price}</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
