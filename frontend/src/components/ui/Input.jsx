import { forwardRef } from "react";

export const Input = forwardRef((props, ref)=>{

  return (
    <input
      type="text"
      autoComplete="off"
      className="bg-zinc-800 px-4 py-2 block my-2 w-full rounded-md"
      ref={ref}
      {...props}
    />
  );
})





export default Input;
