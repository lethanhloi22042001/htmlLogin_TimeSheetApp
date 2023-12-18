
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser, selectTodoList,selectFilters,getAllUser } from '../userAll/Alluser';

interface TodoListProps {}
interface NewUser {
  id: number;
  name: string;
  completed: boolean;
  priority: "Low" | "Medium" | "High" | undefined; // Định nghĩa kiểu cho priority
}
const AlluserTsx: React.FC<TodoListProps> = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);
  const filters = useSelector(selectFilters);
  // const selectFiltersAll = useSelector(selectFiltersAll);

  // const allTodoFilter = useSelector(allTodoFilter);
  const [newUserName, setNewUserName] = useState('');

  const handleAddUser = () => {
    // Tạo một người dùng mới và thêm vào danh sách
    const newUser:any = {
      id: 5,  
      name: newUserName,
      completed: false,
      priority: 'Low',
    };

    dispatch(addUser(newUser));
    dispatch(getAllUser());
  };
  
  const handleRemoveUser = (userId: number) => {
    // Xóa người dùng dựa trên id
    dispatch(removeUser(userId));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoList.map(user => (
          <li key={user.id}>
            {user.name} - {user.priority}
            <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter user name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default AlluserTsx;
