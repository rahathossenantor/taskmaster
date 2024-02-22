import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
    const { userSpecificTasks } = useSelector((state) => state.tasksSlice);
    const task = userSpecificTasks.find(tsk => tsk.id === id);

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div>
                <h3 className="text-xl">{task?.title}</h3>
                <p className="mt-1 text-base">
                    {task?.description}
                </p>
            </div>
        </Modal>
    );
};

export default TaskDetailsModal;
