"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/task/${params.id}`)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      console.log('updating');
      const res = await fetch(`/api/task/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await res.json();
      console.log(data);
    }
    else {
      const res = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-1/4" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Tasks
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />

        <label htmlFor="description" className="font-bold text-sm">
          Description
        </label>
        <textarea
          rows="3"
          id="description"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe your task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
