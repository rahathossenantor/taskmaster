import { useEffect, useState } from 'react';
import { CheckIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { assignTaskToUser, updateStatus } from '../../redux/features/tasks/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import TaskDetailsModal from './TaskDetailsModal';

const MyTasks = () => {
  // getting data from redux store
  const { tasks, userSpecificTasks } = useSelector((state) => state.tasksSlice);
  const { name } = useSelector((state) => state.usersSlice);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);

  const handleModal = (id) => {
    setTaskId(id);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(assignTaskToUser(name));
  }, [name, dispatch, tasks]);

  return (
    <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {
          userSpecificTasks.map((task) =>
            <div key={task.id} className="bg-secondary/10 rounded-md p-3 flex justify-between">
              <h1>{task.title}</h1>
              <div className="flex gap-3">
                <button onClick={() => handleModal(task.id)} className="grid place-content-center" title="Details">
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button onClick={() => dispatch(updateStatus({ id: task.id, status: "done" }))} className="grid place-content-center" title="Done">
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default MyTasks;
