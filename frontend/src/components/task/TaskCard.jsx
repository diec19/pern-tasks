import {Card,Button} from "../ui";
import { useTasks } from "../../context/TaskContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { PiPencilLight } from "react-icons/pi";

export const TaskCard = ({task}) => {

  const {deleteTask} = useTasks()
  const {user}=useAuth()
  const navigate = useNavigate()
  
  return (
    <Card key={task.id} className="px-7 py-4 flex flex-col justify-center">
      <div>  
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p>{task.description}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button
          className="bg-green-500 hover:bg-green-600"
          onClick={()=>{
             navigate(`/tasks/${task.id}/edit`)
          }}
        >
          <PiPencilLight />
          Editar</Button>
        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={async()=>{
            if (window.confirm("Estas seguro de eliminar esta tarea?")){
                deleteTask(task.id)
            }
          }}
          
        >
        <GoTrash className="text-white"/>
        Eliminar</Button>

       
      </div>
    </Card>
  );
};

export default TaskCard;
 