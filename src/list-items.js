import React from 'react';
import classes from './list-items.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

const ListItems = (props) => {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className={classes.list} key={item.key}>
            <div>
                <input type="text" id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }} />
                
                <span>
                    <FontAwesomeIcon  onClick={() => {
                        props.deleteItem(item.key)
                    }} icon="trash" />
                </span>

            </div>

        </div>
    })
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
            {listItems}
        </FlipMove>

    </div>;
}

export default ListItems;