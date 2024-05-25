import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import React, { useState } from "react"
import Button from "./Button"
import Edit from '../assets/edit.svg'
import DeleteSvg from '../assets/delete.svg'
import Modal from "./Modal"
import Form from "./Form"
import View from "./View"
import Delete from "./Delete"

interface NoteProps {
  title: string,
  id: string,
  text: string,
  deleteNote: (id: string) => void
  updateNote: ({
    id,
    text,
    title,
  }: {
    id: string,
    text: string,
    title: string
  }) => void
}

export default function Note({
  title,
  id,
  text,
  deleteNote,
  updateNote
}: NoteProps) {

  const [isEditing, setIsEditing] = useState(false)
  const [isDeleteting, setIsDeleteting] = useState(false)
  const [isViewing, setIsViewing] = useState(false)
  const [editForm, setEditForm] = useState({
    title,
    text
  })

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editForm.title !== '' && editForm.text !== '') {
      updateNote({
        id: id,
        title: editForm.title,
        text: editForm.text
      })
      setIsEditing(false)
    }
  }

  return (
    <div style={style} className="relative group w-full md:w-auto">
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="p-6 border-gray-light border-2 bg-gray rounded-xl h-[380px] relative overflow-hidden text-white w-full md:w-[280px]"
      >
        <div className="mb-6 h-full">
          <h2 className="font-bold text-[22px] md:truncate tracking-[1.7px]">
            {title}
          </h2>
          <hr className="w-full border-primary mt-2 pb-3" />
          <p className="mb-6 leading-[23px] h-[276px] overflow-hidden whitespace-pre-line">
            {text}
          </p>
        </div>
      </div>
      <article className="md:hidden group-hover:block absolute bottom-0 left-0 right-0 h-[77px] bg-gradient bg-no-repeat bg-cover rounded-b-xl overflow-hidden border-2 border-gray-light border-t-0 md:w-[280px]">
        <div className="w-full h-full bg-white/5 backdrop-blur-[40px] flex items-center justify-center gap-3 ">
          <Button
            text="Show More"
            height="h-10"
            width="max-w-[119px] w-full"
            rounded="rounded-[8px]"
            fontSize="text-[12px]"
            handleClick={() => setIsViewing(true)}
          />
          <Button
            isActionBtn
            icon={Edit}
            width="w-10"
            height="h-10"
            rounded="rounded-[8px]"
            handleClick={() => setIsEditing(true)}
          />
          <Button
            isActionBtn
            icon={DeleteSvg}
            width="w-10"
            height="h-10"
            rounded="rounded-[8px]"
            handleClick={() => setIsDeleteting(true)}
          />
        </div>
      </article>

      {isEditing && (
        <Modal setIsActive={setIsEditing}>
          <Form
            form={editForm}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            type="edit"
            setIsActive={setIsEditing}
          />
        </Modal>
      )}

      {isDeleteting && (
        <Modal setIsActive={setIsDeleteting} isDelete>
          <Delete
            handleDelete={deleteNote}
            id={id}
            setIsDeleteting={setIsDeleteting}
            title={title}
          />
        </Modal>
      )}

      {isViewing && (
        <Modal setIsActive={setIsViewing}>
          <View
            setIsDeleteting={setIsDeleteting}
            setIsEditing={setIsEditing}
            setIsViewing={setIsViewing}
            text={text}
            title={title}
          />
        </Modal>
      )}
    </div>
  )
}