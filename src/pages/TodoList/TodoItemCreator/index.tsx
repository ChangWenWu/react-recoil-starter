import { todoListState } from '@/constants';
import _ from 'lodash';
import React, { ChangeEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import TodoItem from '../TodoItem';

// utility for creating unique Id
let id = 0;
const getId = () => {
    return id++;
};

const TodoItemCreator: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList: TodoItem[]) => {
            return [
                ...oldTodoList,
                {
                    id: getId(),
                    text: inputValue,
                    isComplete: false,
                },
            ];
        });
        setInputValue('');
    };

    const onChange = (event: ChangeEvent) => {
        setInputValue(_.get(event, 'target.value'));
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <div className="red-font" onClick={addItem} aria-hidden="true">
                Add
            </div>
        </div>
    );
};

export default TodoItemCreator;
