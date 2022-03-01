import { useEffect, useState } from "react";

function Tasks(props) {
  const [isCompleted, setIsCompleted] = useState(false);
  const onComplete = () => {
    setIsCompleted(true);
  };

  return (
    <div
      className="col-sm-12 col-lg-12 m-3 shadow"
      style={{ background: "white" }}
    >
      <div className="row">
        <div className="col-sm-6 col-lg-6 d-flex flex-row justify-content-start align-items-center p-2">
          <h4 style={{ fontWeight: "bold", color: "#003979" }}>
            {`${props.data.index + 1}. ${props.data.value.title}`}
          </h4>
        </div>
        <div
          className="col-sm-6 col-lg-6 d-flex flex-row justify-content-end align-items-center p-2"
          style={{ height: "50%" }}
        >
          <button
            className="btn text-white btn-sm"
            style={{
              background: "#003979",
              width: "45%",
            }}
            onClick={onComplete}
          >
            Completed
          </button>
          {!isCompleted ? (
            <button
              className="btn btn-sm text-white"
              style={{
                background: "#D60707",
                width: "45%",
              }}
              onClick={() => props.delFunc.onDelete(props.data.value.id)}
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
