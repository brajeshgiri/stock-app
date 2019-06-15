import React from 'react';
import { timeSince } from '../utilities/utils';

export default ({ name, price, date, color }) => (
    <tr key={name} >
        <td>{name}</td>
        <td style={{ backgroundColor: color }}>{price.toFixed(2)}</td>
        <td>{timeSince(date)}</td>
    </tr>
);