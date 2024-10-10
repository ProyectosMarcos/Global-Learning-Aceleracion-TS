/* 
### Gestor de tareas con prioridades

Pautas:
- Crea una clase `Task` con propiedades como título, descripción, fecha de vencimiento y prioridad.
- Implementa métodos para agregar, eliminar y ordenar tareas.
- Utiliza`sort` para ordenar las tareas por prioridad.

Datos iniciales:

```javascript
const initialTasks = [
  { id: 1, title: "Completar informe", description: "Finalizar informe trimestral", dueDate: "2024-03-15", priority: 2 },
  { id: 2, title: "Reunión con cliente", description: "Presentar propuesta de proyecto", dueDate: "2024-03-10", priority: 1 },
  { id: 3, title: "Actualizar software", description: "Instalar últimas actualizaciones", dueDate: "2024-03-20", priority: 3 }
];
```
 */


class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    agregarTarea(tarea) {
        this.tasks.push(tarea);
    }

    eliminarTarea(title) {
        this.tasks = this.tasks.filter((task) => task.title !== title);
    }

    ordenarPorPrioridad() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }

    mostrarTareas() {
        this.tasks.forEach((task) => {
            console.log(
                `${task.title} (Prioridad: ${task.priority}) - Fecha de vencimiento: ${task.dueDate}`
            );
        });
    }
}


const initialTasks = [
    {
        id: 1,
        title: 'Completar informe',
        description: 'Finalizar informe trimestral',
        dueDate: '2024-03-15',
        priority: 2,
    },
    {
        id: 2,
        title: 'Reunión con cliente',
        description: 'Presentar propuesta de proyecto',
        dueDate: '2024-03-10',
        priority: 1,
    },
    {
        id: 3,
        title: 'Actualizar software',
        description: 'Instalar últimas actualizaciones',
        dueDate: '2024-03-20',
        priority: 3,
    },
];

const gestor = new TaskManager();

initialTasks.forEach((task) => {
    const nuevaTarea = new Task(
        task.title,
        task.description,
        task.dueDate,
        task.priority
    );
    gestor.agregarTarea(nuevaTarea);
});

console.log('Tareas antes de ordenar:');
gestor.mostrarTareas();

gestor.ordenarPorPrioridad();

console.log('Tareas después de ordenar por prioridad:');
gestor.mostrarTareas();
