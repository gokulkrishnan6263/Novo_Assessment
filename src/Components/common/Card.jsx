import React from "react";

const Card = ({
  title,
  image,
  alt,
  description,
  listItems,
  amount,
  transactions,
  buttonText,
  buttonClass
}) => {
  return (
    <div className="bg-white shadow-sm rounded p-3 h-100">
      {/* Title */}
      <h6 className="text-uppercase text-muted small">{title}</h6>

      {/* Amount */}
      {amount && <h5 className="fw-bold mb-3">{amount}</h5>}

      {/* Image + Content */}
      {image ? (
        <div className="d-flex align-items-center">
          <div className="me-3">
            <img
              src={image}
              alt={alt || "card-img"}
              className="img-fluid"
              style={{ maxHeight: "120px" }}
            />
          </div>

          <div>
            {description && <p className="mb-1">{description}</p>}

            {listItems && (
              <ul className="mb-2 small text-muted">
                {listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Description */}
          {description && <p className="mb-1">{description}</p>}

          {/* List Items */}
          {listItems && (
            <ul className="mb-2 small text-muted">
              {listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {/* Transactions */}
          {transactions && (
            <div className="small mb-2">
              {transactions.map((t, i) => (
                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>
                    <strong className="text-dark">{t.name}</strong>
                    <br />
                    <small className="text-muted">{t.date}</small>
                  </span>
                  <span className="fw-bold text-dark">{t.amount}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Button */}
      {buttonText && (
        <button
          className={`btn ${buttonClass || "btn-success"} btn-sm mx-auto d-block ${
            title === "" ? "w-25" : "w-50"
          }`}
          style={{ borderRadius: "8px", marginTop: "30px" }}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
