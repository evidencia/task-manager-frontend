import Button from './Button'
import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from '../assets/icons'
import TasksSeparator from './TasksSeparator'

function Tasks() {
  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefas
            <TrashIcon />
          </Button>

          <Button>
            Nova tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#F4F4F4] pb-1">
            <TasksSeparator title="Morning" icon={<SunIcon />} />
          </div>
        </div>

        <div className="my-6 space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#F4F4F4] pb-1">
            <TasksSeparator title="Afternoon" icon={<CloudSunIcon />} />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#F4F4F4] pb-1">
            <TasksSeparator title="Night" icon={<MoonIcon />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks
