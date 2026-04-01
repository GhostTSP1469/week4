import React, { Component, createRef } from "react";
import axios from "axios";

const api = "http://37.27.29.18:8001/api/to-dos";
const imgUrl = "http://37.27.29.18:8001/images/";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      open: false,
      edit: null,
      info: null,
    };

    this.fileRef = createRef();
    this.editFileRef = createRef();
  }

  getData = async () => {
    try {
      const res = await axios.get(api);
      this.setState({ data: res.data.data || [] });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.getData();
  }

  handleAdd = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Name", e.target.name.value);
    formData.append("Description", e.target.desc.value);

    const files = this.fileRef.current.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("Images", files[i]);
    }

    await axios.post(api, formData);
    this.setState({ open: false });
    this.getData();
  };

  deleteData = async (id) => {
    if (!confirm("Delete?")) return;
    await axios.delete(`${api}?id=${id}`);
    this.getData();
  };

  handleEdit = async (e) => {
    e.preventDefault();

    const { edit } = this.state;

    const formData = new FormData();
    formData.append("Id", edit.id);
    formData.append("Name", e.target.name.value);
    formData.append("Description", e.target.desc.value);
    formData.append("IsCompleted", edit.isCompleted);

    const files = this.editFileRef.current.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("Images", files[i]);
    }

    await axios.put(api, formData);

    this.setState({ edit: null });
    this.getData();
  };


  toggle = async (item) => {
    this.setState((prev) => ({
      data: prev.data.map((el) =>
        el.id === item.id
          ? { ...el, isCompleted: !el.isCompleted }
          : el
      ),
    }));

    try {
      await axios.put(api, {
        id: item.id,
        name: item.name,
        description: item.description,
        isCompleted: !item.isCompleted,
      });
    } catch {
      
      this.setState((prev) => ({
        data: prev.data.map((el) =>
          el.id === item.id
            ? { ...el, isCompleted: item.isCompleted }
            : el
        ),
      }));
    }
  };

  render() {
    const { data, open, edit, info } = this.state;

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#111827] to-black text-white p-8">

       
        <div className="flex justify-between items-center mb-8">
         

          <button
            onClick={() => this.setState({ open: true })}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-110 transition shadow-lg"
          >
            + Add
          </button>
        </div>

       
        <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
          <table className="w-full text-center">
            <thead className="bg-white/10">
              <tr>
                <th className="p-4">Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-t border-white/10 hover:bg-white/5 transition">

                  <td className="p-3">
                    <img
                      src={imgUrl + item.images?.[0]?.imageName}
                      className="w-14 h-14 object-cover rounded-xl mx-auto"
                    />
                  </td>

                  <td className="font-semibold">{item.name}</td>
                  <td className="text-gray-300">{item.description}</td>

                  
                  <td>
                    <div className="flex items-center justify-center gap-3">

                      <button
                        onClick={() => this.toggle(item)}
                        className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                          item.isCompleted ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        <div
                          className={`bg-white w-5 h-5 rounded-full shadow-md transition-all duration-300 ${
                            item.isCompleted ? "ml-auto" : "ml-0"
                          }`}
                        />
                      </button>

                      <span
                        className={`text-sm font-semibold ${
                          item.isCompleted ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {item.isCompleted ? "Active" : "Inactive"}
                      </span>

                    </div>
                  </td>

                  <td className="flex justify-center gap-2 p-3">
                    <button
                      onClick={() => this.setState({ info: item })}
                      className="px-3 py-1 rounded-lg bg-purple-600 hover:scale-105 transition"
                    >
                      Info
                    </button>

                    <button
                      onClick={() => this.setState({ edit: item })}
                      className="px-3 py-1 rounded-lg bg-blue-500 hover:scale-105 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => this.deleteData(item.id)}
                      className="px-3 py-1 rounded-lg bg-red-500 hover:scale-105 transition"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        {(open || edit || info) && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center">

       
            {open && (
              <form onSubmit={this.handleAdd} className="bg-[#111827] p-6 rounded-2xl flex flex-col gap-4 w-[320px]">
                <h2 className="text-xl font-bold text-center">Add Task</h2>
                <input name="name" placeholder="Name" className="p-2 rounded bg-black/40" />
                <input name="desc" placeholder="Description" className="p-2 rounded bg-black/40" />
                <input type="file" multiple ref={this.fileRef} />
                <button className="bg-green-500 p-2 rounded">Save</button>
                <button onClick={() => this.setState({ open: false })}>Close</button>
              </form>
            )}

            
            {edit && (
              <form onSubmit={this.handleEdit} className="bg-[#111827] p-6 rounded-2xl flex flex-col gap-4 w-[320px]">
                <h2 className="text-xl font-bold text-center">Edit Task</h2>
                <input name="name" defaultValue={edit.name} className="p-2 rounded bg-black/40" />
                <input name="desc" defaultValue={edit.description} className="p-2 rounded bg-black/40" />
                <input type="file" multiple ref={this.editFileRef} />
                <button className="bg-blue-500 p-2 rounded">Update</button>
                <button onClick={() => this.setState({ edit: null })}>Close</button>
              </form>
            )}

           
            {info && (
              <div className="bg-[#111827] p-6 rounded-2xl w-[320px] text-center">
                <img
                  src={imgUrl + info.images?.[0]?.imageName}
                  className="w-24 h-24 mx-auto rounded-xl mb-3"
                />
                <h2 className="text-xl font-bold">{info.name}</h2>
                <p className="text-gray-400">{info.description}</p>

                <p className="mt-2">
                  Status:{" "}
                  <span className={info.isCompleted ? "text-green-400" : "text-red-400"}>
                    {info.isCompleted ? "Active" : "Inactive"}
                  </span>
                </p>

                <button
                  onClick={() => this.setState({ info: null })}
                  className="mt-4 bg-purple-600 px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    );
  }
}