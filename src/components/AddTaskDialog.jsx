import { createPortal } from 'react-dom'

import Button from './Button'
import Input from './Input'

function AddTaskDialog({ isOpen, handleClose }) {
  if (!isOpen) return null

  return createPortal(
    <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur">
      <div className="rounded-xl bg-white p-5 text-center shadow">
        <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
        <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
          Insira as informações abaixo
        </p>

        <div className="flex w-[336px] flex-col space-y-4">
          <Input
            id="title"
            label="Titulo"
            placeholder="Insira o titulo da tarefa"
          />
          <Input id="time" label="Horario" placeholder="Horário" />
          <Input
            id="description"
            label="Descrição"
            placeholder="Descreva a tarefa"
          />

          <div className="flex gap-3">
            <Button
              className="w-full"
              size="large"
              variant="secondary"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button className="w-full" size="large">
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default AddTaskDialog
