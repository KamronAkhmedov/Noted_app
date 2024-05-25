import React from "react"

export default function Input({
  value,
  handleChange,
  name,
  isTextArea,
}: {
  value: string,
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void,
  name: string
  isTextArea?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="capitalize text-white text-[18px] tracking-[1.4px]"
      >
        {name}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          placeholder="Write a title..."
          className="min-h-[250px] text-white bg-dark-gray rounded-sm placeholder:text-gray-light py-3 px-4
          border-gray-light border-2 tracking-[1.2px] font-medium outline-none focus:border-primary"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          placeholder="Write something"
          className="text-white bg-dark-gray rounded-sm placeholder:text-gray-light py-3 px-4 border-gray-light border-2 tracing-[1.2px] font-medium outline-none focus:border-primary"
        />
      )}
    </div>
  )
}