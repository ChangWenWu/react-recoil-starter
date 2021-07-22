import { todoListState } from '@/constants';
import React from 'react';
import { useRecoilState } from 'recoil';

interface TodoItem {
    id: number;
    text: string;
    isComplete: boolean;
}

interface TodoItemProps {
    item: TodoItem;
}

const replaceItemAtIndex = (arr: any, index: any, newValue: any) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: any, index: any) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const TodoItem: React.FC<TodoItemProps> = ({ item }: TodoItemProps) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = (target: any) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: target.value,
        });

        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
            <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
            <button type="button" onClick={deleteItem}>
                X
            </button>
        </div>
    );
};

export default TodoItem;
