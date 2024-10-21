/*
Cola de Tareas Genérica con Tipos Personalizados

Enunciado:
Implementa una cola de tareas genérica que permita manejar diferentes tipos de tareas.
Cada tarea debe tener un id, un type, y un data asociados. Asegúrate de que la cola pueda agregar
y procesar tareas de forma eficiente, respetando el tipo de datos especifico de cada tarea.

Requisitos adicionales:
    *Implementa una función para procesar todas las tareas en la cola, una por una.
    *Debe ser posible cancelar una tarea antes de procesarla.
    *El sistema debe poder manejar tareas de diferentes tipos, como emails, notificaciones y generación de reportes

    Codigo base:

    interface Task<T> {
    id:number;
    type:string;
    data:T;
    }

    class TaskQueue<T> {
    // Implementar los metodos de agregar y procesar tareas
    }

    //Ejemplo de tarea (para la resolución generar otros tipos de tareas)
    interface EmailTask {
    recipient: string;
    subject: string;
    body:string;
    }
*/

export enum TaskType {
    EMAIL = 'email',
    TODO = 'todo',
    NOTIFICATION = 'notification',
    REPORT = 'report'
}

 export interface Task<T> {
    id:number;
    type:string;
    data:T;
    }

  
  export  interface EmailTask {
    recipient: string;
    subject: string;
    body:string;
    }


   export interface TodoTask {
        title:string;
        description:string;
        priority:number;
    }

   export interface NotificationTask {
        title:string;
        description:string;
        date:Date;
    }

   export interface ReportTask{
        title:string;
        description:string;
    }

   export type Processor<T> = Record<string,(task:Task<T>)=>void>;