import Button from "./Button"

interface Props {
  id: string
  title: string
  handleDelete: (id: string) => void
  setIsDeleteting: (isDeleteting: boolean) => void
}

export default function Delete({
  handleDelete,
  id,
  setIsDeleteting,
  title
}: Props) {

  return (
    <article className="max-w-[330px]">
      <h2 className="text-[18px] font-bold tracking-[1.4px]">
        Delete Note
      </h2>
      <hr className="w-full max-w-[131px] border-primary pb-[15px]" />
      <p className="font-medium text-[13px] max-w-[257px]">
        Are you sure you want to delete {' '}
        <span className="italic">"{title}"</span>
      </p>
      <div className="mt-7 flex flex-col gap-2">
        <Button text="Confirm" handleClick={() => handleDelete(id)} />
        <Button
          text="Cansel"
          handleClick={() => setIsDeleteting(false)}
          color="border-red border-2 hover:bg-white/5"
        />
      </div>
    </article>
  )
}