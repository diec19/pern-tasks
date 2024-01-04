import { Card, Input, Textarea, Label, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
 
  const navigate = useNavigate();
  const { createTask,updateTask, loadTask, errors: tasksErrors } = useTasks();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
let task

   if(!params.id){
   task=await createTask(data);
   navigate("/tasks");
    
   }else{
    task = await updateTask(params.id, data)
     navigate("/tasks");
   }
   
  });

  useEffect(() => {
    if (params.id) {
      loadTask(params.id).then(task=>{
        setValue('title',task.title)
        setValue('description',task.description)
      })
    }
  });

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {tasksErrors.map((error, i) => (
          <p className="text-red-500" key={i}>
            {error}
          </p>
        ))}
        <h2 className="text-3xl font-bold my-4">
          {params.id ? "Editar Tarea" : "Crear Tarea"}
        </h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="title">titulo</Label>
          <Input
            type="text"
            placeholder="Titulo"
            autoFocus
            {...register("title", {
              required: true,
            })}
          />
          {errors.title && (
            <span className="text-red-500">Titulo es requerido</span>
          )}

          <Label htmlFor="description">Descripcion</Label>
          <Textarea
            placeholder="Descripcion"
            rows={3}
            {...register("description")}
          ></Textarea>

          <Button>{params.id ? "Editar Tarea" : "Crear Tarea"}</Button>
        </form>
      </Card>
    </div>
  );
};

export default TaskFormPage;
