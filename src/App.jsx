import { useEffect, useState, useRef } from "react";
import axios from "axios";

const api = "http://37.27.29.18:8001/api/to-dos";
const imgUrl = "http://37.27.29.18:8001/images/";

export default function App() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);

  const fileRef = useRef();
  const editFileRef = useRef();

  
  async function getData() {
    try {
      const res = await axios.get(api);
      setData(res.data.data || []);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  
  async function handleAdd(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Name", e.target.name.value);
    formData.append("Description", e.target.desc.value);

    const files = fileRef.current.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("Images", files[i]);
    }

    await axios.post(api, formData);

    setOpen(false);
    getData();
  }

  async function deleteData(id) {
    if (!confirm("Delete?")) return;

    await axios.delete(`${api}?id=${id}`);
    getData();
  }

  
  async function handleEdit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Id", edit.id);
    formData.append("Name", e.target.name.value);
    formData.append("Description", e.target.desc.value);
    formData.append("IsCompleted", edit.isCompleted);

    const files = editFileRef.current.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("Images", files[i]);
    }

    await axios.put(api, formData);

    setEdit(null);
    getData();
  }

  
  async function toggle(item) {
    setData((prev) =>
      prev.map((el) =>
        el.id === item.id
          ? { ...el, isCompleted: !el.isCompleted }
          : el
      )
    );

    try {
      await axios.put(api, {
        id: item.id,
        name: item.name,
        description: item.description,
        isCompleted: !item.isCompleted,
      });
    } catch (error) {
      console.log(error);

     
      setData((prev) =>
        prev.map((el) =>
          el.id === item.id
            ? { ...el, isCompleted: item.isCompleted }
            : el
        )
      );
    }
  }

  return (
    <div className="p-6 bg-black min-h-screen text-white">

      <button
        onClick={() => setOpen(true)}
        className="bg-green-600 px-4 py-2 rounded mb-4 hover:bg-green-700 transition"
      >
        Add
      </button>

      <table className="w-full border border-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-2">Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t border-gray-700">

              <td className="p-2">
                <img
                  src={imgUrl + item.images?.[0]?.imageName}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>

              <td>{item.name}</td>
              <td>{item.description}</td>

          
              <td>
                <div className="flex items-center gap-3">

                  
                  <button
                    onClick={() => toggle(item)}
                    className={`relative w-14 h-7 flex items-center rounded-full p-1 transition ${
                      item.isCompleted ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    <div
                      className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                        item.isCompleted ? "translate-x-7" : "translate-x-0"
                      }`}
                    />
                  </button>

                 
                  <span
                    className={`font-semibold ${
                      item.isCompleted ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {item.isCompleted ? "Active" : "Inactive"}
                  </span>

                </div>
              </td>

              <td className="flex gap-2 p-2">
                <button
                  onClick={() => setEdit(item)}
                  className="bg-blue-500 px-2 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteData(item.id)}
                  className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <form
            onSubmit={handleAdd}
            className="bg-white text-black p-6 rounded flex flex-col gap-3"
          >
            <input name="name" placeholder="Name" />
            <input name="desc" placeholder="Description" />
            <input type="file" multiple ref={fileRef} />

            <button className="bg-green-500 text-white p-2">
              Save
            </button>

            <button type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </form>
        </div>
      )}

      
      {edit && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <form
            onSubmit={handleEdit}
            className="bg-white text-black p-6 rounded flex flex-col gap-3"
          >
            <input name="name" defaultValue={edit.name} />
            <input name="desc" defaultValue={edit.description} />

            <input type="file" multiple ref={editFileRef} />

            <button className="bg-blue-500 text-white p-2">
              Update
            </button>

            <button type="button" onClick={() => setEdit(null)}>
              Close
            </button>
          </form>
        </div>
      )}

    </div>
  );
}