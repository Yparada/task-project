"use client"
import { useRouter } from 'next/navigation'

function NewPage() {

  const router = useRouter();

  const onSubmit = async (e) => {

    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    await fetch('/api/task', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    router.push('/');
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-1/4" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-sm">Tasks</label>
        <input type="text" id="title" className="border border-gray-400 p-2 mb-4 w-full text-black" placeholder="Title" />

        <label htmlFor="description" className="font-bold text-sm">Description</label>
        <textarea rows="3" id="description" className="border border-gray-400 p-2 mb-4 w-full text-black" placeholder="Describe your task"></textarea>
        <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear</button>
      </form>
    </div>
  )
}

export default NewPage