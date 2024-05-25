import Button from "./Button"
import Edit from '../assets/edit.svg'
import Delete from '../assets/delete.svg'

interface Props {
  title: string
  text: string
  setIsDeleteting: (isDeleteting: boolean) => void
  setIsEditing: (isEditing: boolean) => void
  setIsViewing: (isViewing: boolean) => void
}

export default function View({
  setIsDeleteting,
  setIsEditing,
  setIsViewing,
  text,
  title
}: Props) {

  function handleEdit() {
    setIsEditing(true)
    setIsViewing(false)
  }

  function handleDelete() {
    setIsDeleteting(true)
    setIsViewing(false)
  }

  return (
    <article>
      <div className="flex items-center  justify-between gap-4 flex-wrap">
        <div className="w-full">
          <h2 className="text-[36px] font-bold tracing-[2.8px] md:truncate">
            {title}
          </h2>
          <hr className="w-full max-w-[188px] border-primary mt-2" />
        </div>

        <div className="flex gap-2 pb-4">
          <Button
            text="Edit"
            icon={Edit}
            width="w-20"
            height="h-10"
            rounded="rounded-[8px]"
            handleClick={handleEdit}
          />
          <Button
            text="Delete"
            icon={Delete}
            width="w-[100px]"
            height="h-10"
            rounded="rounded-[8px]"
            handleClick={handleDelete}
          />
        </div>
      </div>
      <p className="max-h-[412px] overflow-y-scroll pr-2">
        {text}
      </p>
    </article>
  )

}