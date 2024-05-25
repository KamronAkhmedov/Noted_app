import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core"
import Navbar from "./Navbar"
import Modal from "./Modal"
import Form from "./Form"
import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { arrayMove, SortableContext } from '@dnd-kit/sortable'
import Note from "./Note"

interface NoteProps {
  title: string,
  text: string,
  id: string
}

const Home = () => {
  const [notes, setNotes] = useState<NoteProps[] | []>([])
  const [isCreating, setIsCreating] = useState<boolean>(false)
  const [form, setForm] = useState({
    title: '',
    text: ''
  })

  let noteArray: string | null

  if (typeof window !== 'undefined') {
    // Perform localstorage action
    noteArray = localStorage.getItem('notes')
  }

  useEffect(() => {
    if (noteArray) {
      setNotes(JSON.parse(noteArray))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.text !== '' && form.title !== '') {
      createNote(form.title, form.text)
      setForm({
        title: '',
        text: ''
      })
      setIsCreating(false)
    }
  }

  function createNote(title: string, text: string) {
    setNotes((prev) => [
      {
        title: title,
        text: text,
        id: nanoid()
      },
      ...prev
    ])
  }

  function deleteNode(id: string) {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  function updateNote({
    id,
    text,
    title,
  }: {
    id: string,
    text: string,
    title: string
  }) {
    deleteNode(id)

    setNotes((prev) => [
      {
        title,
        text,
        id
      },
      ...prev
    ])

    localStorage.setItem('notes', JSON.stringify(notes))
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      setNotes((items) => {
        const activeIndex = items.map((e) => e.id).indexOf(active.id as string)
        const overIndex = items.map((e) => e.id).indexOf(over!.id as string)

        return arrayMove(items, activeIndex, overIndex)
      })
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Navbar setIsCreating={setIsCreating} />
      <section className="flex gap-9 flex-wrap">
        {notes.length !== 0 ? (
          <SortableContext items={notes}>
            {notes.map((note) => (
              <Note
                title={note.title}
                text={note.text}
                key={note.id}
                id={note.id}
                deleteNote={deleteNode}
                updateNote={updateNote}
              />
            ))}
          </SortableContext>
        ) : (
          <p className="text-center text-2xl text-gray-400 w-full pt-20">
            No notes yet. Click the plus button to cretate one
          </p>
        )}
      </section>
      {isCreating && <Modal setIsActive={setIsCreating} >
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          form={form}
          type="create"
          setIsActive={setIsCreating}
        />
      </Modal>}
    </DndContext>
  )
}

export default Home