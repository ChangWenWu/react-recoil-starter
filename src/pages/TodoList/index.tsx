import { todoListState } from '@/constants';
import React from 'react';
import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';

const TodoList: React.FC = () => {
    const todoList = useRecoilValue(todoListState);
    return (
        <div>
            <TodoItemCreator />
            {todoList.map((todoItem: TodoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </div>
    );
};

export default TodoList;
