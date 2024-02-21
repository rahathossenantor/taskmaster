import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addTask(data));
        handleCancel();
    };

    const handleCancel = () => {
        reset();
        setIsOpen(false);
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <label className="text-lg" htmlFor="title">Task Name</label>
                    <input className="rounded-xl" type="text" id="title" {...register("title")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-lg" htmlFor="description">Description</label>
                    <textarea className="rounded-xl" id="description" rows="4" {...register("description")}></textarea>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-lg" htmlFor="deadline">Deadline</label>
                    <input className="rounded-xl" type="date" id="deadline" {...register("deadline")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-lg" htmlFor="assigned-to">Assigned to</label>
                    <select className="rounded-xl" {...register("assigned-to")} id="assigned-to">
                        <option hidden >Select</option>
                        <option value="Rahat Hossen">Rahat Hossen</option>
                        <option value="Imteaj Alam">Imteaj Alam</option>
                        <option value="Rajen Ehsan">Rajen Ehsan</option>
                        <option value="Siyam Ahmed">Siyam Ahmed</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-lg" htmlFor="priority">Priority</label>
                    <select className="rounded-xl" {...register("priority")} id="priority">
                        <option hidden >Select</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="flex gap-3 justify-end">
                    <button className="btn bg-red-600 text-white" type="button" onClick={handleCancel}>Cancel</button>
                    <button className="btn bg-blue-600 text-white" type="submit">Submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;
