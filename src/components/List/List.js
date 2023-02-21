import React from 'react';

const List = ({list}) => {
    return (
                <li>
                    <span>{list.id}</span>
                    <br/>
                    <span>{list.task}</span>
                </li>

    );
};

export default List;