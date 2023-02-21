import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from './todolist.module.css';
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List";
const TodoList = () => {
    const [ isShow, setIsShow ] = useState(false);
    const [ newTask, setNewTask ] = useState('Пусто');
    const [arr, setArr] = useState([])
    const [input, setInput] = useState('')


    function inputAdd(e) {
        setInput(e.target.value)
        setNewTask(e.target.value)
    }



    const list = [
            {
                id:1 , 
                task: 'coding'
            },
            {
                id:2,
                task: 'eat'
            },
            {
                id:3,
                task: 'sleep'
            }
        ]

    const handleClick = () => {
        setArr(list)
    }

    console.log(input)

    
    const handleShow = () => {
        setIsShow(!isShow)
        setInput('')
    };
    const handleChangeText = (text) => {
        setNewTask(text);
        console.log(newTask, 'new text')
    }
    return (
        <div className={classes.wrapper}>
            <Button handleShow={handleShow}>
                Добавить
            </Button>
            <Input input={input} inputAdd={inputAdd}/>
            { isShow && <Modal handleShow={handleShow}>
                <p>{newTask} </p>
                <input type="text" onChange={(event) =>  handleChangeText(event.target.value) }  />
            <Button>
                Добавить
            </Button>
            <button onClick={handleShow}>Close</button>
            </Modal> }
            <Button classN={'.addButton'} handleShow={handleClick}>Click</Button>

            {
                arr.map(i => <ul><List list={i} key={i.id}/></ul> )
            }
            
        </div>
    )
}


export default TodoList;