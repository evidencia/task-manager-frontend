import './AddTaskDialog.css'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { v4 } from 'uuid'

import Button from './Button'
import Input from './Input'
import TimeSelect from './TimeSelect'

function AddTaskDialog({ isOpen, handleClose, handleSubmit }) {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('morning')
  const [description, setDescription] = useState('')

  const nodeRef = useRef()

  useEffect(() => {
    if (!isOpen) {
      setTitle('')
      setTime('')
      setDescription('')
    }
  }, [isOpen])

  const handleSaveClick = () => {
    handleSubmit({
      id: v4(),
      title,
      time,
      description,
      status: 'not_started',
    })

    handleClose()
  }

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-[#35383E]">
                Nova Tarefa
              </h2>
              <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
                Insira as informações abaixo
              </p>

              <div className="flex w-[336px] flex-col space-y-4">
                <Input
                  id="title"
                  label="Titulo"
                  placeholder="Insira o titulo da tarefa"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <TimeSelect
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  <Button
                    className="w-full"
                    size="large"
                    onClick={handleSaveClick}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  )
}

export default AddTaskDialog
