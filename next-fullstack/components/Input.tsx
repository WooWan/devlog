import clsx from 'clsx'

const Input = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        'border-gray w-full rounded-3xl border-2 border-solid px-6 py-2 text-lg',
        className
      )}
      {...props}
    />
  )
}

export default Input
