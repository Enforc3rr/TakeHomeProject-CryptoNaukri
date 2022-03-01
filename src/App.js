import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

let globalID = 0;
function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const onAdd = () => {
    const data = {
      title,
      description,
      startDate,
      id: globalID++,
    };
    setTasks((prevData) => {
      return [...prevData, data];
    });
  };
  const onDelete = (id) => {
    setTasks((prevData) => {
      return prevData.filter((value) => {
        return value.id !== id;
      });
    });
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "100vh", backgroundColor: "#E8F3FE" }}
    >
      <div className="row containerCard mt-5">
        <div
          className="col-lg-12 col-sm-12 d-flex justify-content-center flex-column align-items-center shadow-lg"
          style={{
            borderRadius: "20px",
            backgroundColor: "white",
          }}
        >
          <h4
            className="display-4"
            style={{
              textAlign: "center",
              color: "#003979",
              fontWeight: "bold ",
            }}
          >
            Add Task
          </h4>
          <input
            className="form-control"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "70%", margin: "0.5em" }}
          />
          <textarea
            className="form-control"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: "70%",
              margin: "1em",
              height: "15vh",
            }}
          />
          <div
            className="d-flex justify-content-center"
            style={{ margin: "1em" }}
          >
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <button className="btn btn-outline-primary m-4" onClick={onAdd}>
            Add
          </button>
        </div>
        <div className="col-sm-12 col-lg-12 mt-5">
          <h4
            className="display-4"
            style={{
              textAlign: "center",
              color: "#003979",
              fontWeight: "bold ",
            }}
          >
            Your tasks
          </h4>
        </div>
        {tasks.map((value, index) => {
          return (
            <div
              className="col-sm-12 col-lg-12 m-3 shadow"
              style={{ background: "white" }}
            >
              <div className="row">
                <div className="col-sm-6 col-lg-6 d-flex flex-row justify-content-start align-items-center p-2">
                  <h4 style={{ fontWeight: "bold", color: "#003979" }}>
                    {`${index + 1}. ${value.title}`}
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
                  >
                    Completed
                  </button>
                  <button
                    className="btn btn-sm text-white"
                    style={{
                      background: "#D60707",
                      width: "45%",
                    }}
                    onClick={() => onDelete(value.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
