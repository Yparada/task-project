import Link from 'next/link'

function TaskCard({ task }: any) {
    return (
        <Link href={`/task/edit/${task.id}`}>
            <div className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer">
                <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
                <p>{task.description}</p>
                <p>{new Date(task.createAt).toLocaleDateString()}</p>
            </div>
        </Link>
    )
}

export default TaskCard