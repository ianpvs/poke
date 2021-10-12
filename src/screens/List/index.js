import React from 'react';

import {
    Item,
    Name,
    Message
} from './styles';

function List({
    data = []
}) {

    return !!data.length
        ? data.map(
            name => (
                <Item>
                    <Name>{name}</Name>
                </Item>
            )
        )
        : <Message>No skills found</Message>;
}

export default List;