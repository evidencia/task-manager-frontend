import { HomeIcon, TasksIcon } from '../assets/icons/index'
import SidebarButton from './SidebarButton'
function Sidebar() {
  return (
    <div className="h-screen w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADb5]">Task Manager</h1>
        <p>
          Um simples{' '}
          <span className="text-[#00ADb5]">organizador de tarefas</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant="unselected">
          <HomeIcon />
          Inicio
        </SidebarButton>
        <SidebarButton variant="selected">
          <TasksIcon />
          Minhas Tarefas{' '}
        </SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar
