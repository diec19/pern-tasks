

export const Label = ({children, htmlForm}) => {
  return (
    <label
      className="block text-sm font-medium text-gray-400"
      htmlFor={htmlForm}
    >{children}
    
    </label>
  )
}

export default Label