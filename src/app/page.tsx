import TaskCard from '@/components/TaskCard'
import { prisma } from '@/libs/prisma';

async function loasTasks() {
  // const timestamp = new Date().getTime();
  // const resp = await fetch(`http://localhost:3000/api/task?timestamp=${timestamp}`);
  // return await resp.json();
  return await prisma.task.findMany()
}

export const dynamic = 'force-dynamic';

async function HomePage() {
  const tasks = await loasTasks();

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task: any) => (
          <TaskCard key={task.id} task={task} />

        ))}
      </div>
    </section>
  )
}

export default HomePage