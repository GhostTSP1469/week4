import { useReducer, useEffect, useRef, useState } from "react";

const initialData = [
  {
    id: 1,
    name: "Learn React",
    description: "Hooks + Reducer",
    isCompleted: false,
    images: [
      {
        imageName:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      },
    ],
  },
];

const initialState = {
  data: [],
  open: false,
  edit: null,
  info: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return { ...state, data: action.payload };

    case "ADD":
      return { ...state, data: [...state.data, action.payload] };

    case "DELETE":
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.payload),
      };

    case "TOGGLE":
      return {
        ...state,
        data: state.data.map((el) =>
          el.id === action.payload
            ? { ...el, isCompleted: !el.isCompleted }
            : el
        ),
      };

    case "EDIT":
      return {
        ...state,
        data: state.data.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };

    case "OPEN":
      return { ...state, open: true };

    case "CLOSE":
      return { ...state, open: false };

    case "SET_EDIT":
      return { ...state, edit: action.payload };

    case "CLEAR_EDIT":
      return { ...state, edit: null };

    case "SET_INFO":
      return { ...state, info: action.payload };

    case "CLEAR_INFO":
      return { ...state, info: null };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [preview, setPreview] = useState(null);

  
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      dispatch({ type: "INIT", payload: JSON.parse(saved) });
    } else {
      dispatch({ type: "INIT", payload: initialData });
    }
  }, []);

  
  useEffect(() => {
    if (state.data.length > 0) {
      localStorage.setItem("todos", JSON.stringify(state.data));
    }
  }, [state.data]);

  function handleFile(file) {
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  }

  
  function handleAdd(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name: e.target.name.value,
      description: e.target.desc.value,
      isCompleted: false,
      images: [
        {
          imageName:
            preview ||
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        },
      ],
    };

    dispatch({ type: "ADD", payload: newItem });
    dispatch({ type: "CLOSE" });
    setPreview(null);
  }

  
  function deleteData(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  
  function handleEdit(e) {
    e.preventDefault();

    const updated = {
      ...state.edit,
      name: e.target.name.value,
      description: e.target.desc.value,
      images: [
        {
          imageName:
            preview || state.edit.images?.[0]?.imageName,
        },
      ],
    };

    dispatch({ type: "EDIT", payload: updated });
    dispatch({ type: "CLEAR_EDIT" });
    setPreview(null);
  }

 
  function toggle(item) {
    dispatch({ type: "TOGGLE", payload: item.id });
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <button
        onClick={() => dispatch({ type: "OPEN" })}
        className="mb-6 bg-green-500 px-4 py-2 rounded"
      >
        Add
      </button>

      <table className="w-full text-center border">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {state.data.map((item) => (
            <tr key={item.id} className="border-t">

              <td>
                <img
                  src={item.images?.[0]?.imageName}
                  className="w-12 h-12 mx-auto object-cover"
                />
              </td>

              <td>{item.name}</td>
              <td>{item.description}</td>

              <td>
                <button
                  onClick={() => toggle(item)}
                  className={`px-3 py-1 rounded ${
                    item.isCompleted ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {item.isCompleted ? "Active" : "Inactive"}
                </button>
              </td>

              <td className="flex gap-2 justify-center">
                <button onClick={() => dispatch({ type: "SET_INFO", payload: item })}>
                  Info
                </button>

                <button onClick={() => dispatch({ type: "SET_EDIT", payload: item })}>
                  Edit
                </button>

                <button onClick={() => deleteData(item.id)}>
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {(state.open || state.edit || state.info) && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

         
          {state.open && (
            <form onSubmit={handleAdd} className="bg-white text-black p-4 flex flex-col gap-2">
              <input name="name" placeholder="Name" />
              <input name="desc" placeholder="Description" />

              <input
                type="file"
                onChange={(e) => handleFile(e.target.files[0])}
              />

              {preview && <img src={preview} className="w-20" />}

              <button type="submit">Save</button>
              <button type="button" onClick={() => dispatch({ type: "CLOSE" })}>
                Close
              </button>
            </form>
          )}

      
          {state.edit && (
            <form onSubmit={handleEdit} className="bg-white text-black p-4 flex flex-col gap-2">
              <input name="name" defaultValue={state.edit.name} />
              <input name="desc" defaultValue={state.edit.description} />

              <input
                type="file"
                onChange={(e) => handleFile(e.target.files[0])}
              />

              <img
                src={
                  preview || state.edit.images?.[0]?.imageName
                }
                className="w-20"
              />

              <button type="submit">Update</button>
              <button type="button" onClick={() => dispatch({ type: "CLEAR_EDIT" })}>
                Close
              </button>
            </form>
          )}

         
          {state.info && (
            <div className="bg-white text-black p-4 text-center">
              <img
                src={state.info.images?.[0]?.imageName}
                className="w-20 mx-auto"
              />
              <h2>{state.info.name}</h2>
              <p>{state.info.description}</p>
              <button onClick={() => dispatch({ type: "CLEAR_INFO" })}>
                Close
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
}