import React, { useState } from 'react';
import TodoList from '../../components/TodoList';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

ListPage.propTypes = {
    
};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'codee',
            status: 'completed',
        },
        {
            id: 3,
            title: 'sleep',
            status: 'new',
        }
    ]

    const location = useLocation();
    const[todoList, setTodoList] = useState(initTodoList);
    const[filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    const handleTodoClick = (todo, idx) => {
        console.log(todo, idx);
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === "new" ? "completed" : "new",
        };
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilterStatus("all");
    }
    const handleShowCompletedClick = () => {
        setFilterStatus("completed");
    }
    const handleShowNewClick = () => {
        setFilterStatus("new");
    }

    const filteredTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);

    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={filteredTodoList} onTodoClick={handleTodoClick} />
            <>
                <button onClick={handleShowAllClick}>Show all</button>
                <button onClick={handleShowCompletedClick}>Show completed</button>
                <button onClick={handleShowNewClick}>Show new</button>
            </>
        </div>
    );
}

export default ListPage;