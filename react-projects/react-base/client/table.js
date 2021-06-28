import React from 'react';
import {hot} from 'react-hot-loader';

function Table(props) {
    /**
     * table rows must have unique keys, it's not adviced to use map index as keys
     * because it can lead to problems after entries are added or removed
     * for production purposes, use a UUID generator
     */

    let data = props.data;
    return (
        <table className="ml-6">
            <thead>
                <tr>
                    {Object.keys(data[0]).map(
                        el => <th className="border px-8 text-sm text-gray-900" key={el}>{el}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {
                    (() => {
                        let row = [];
                        data.forEach((el, n) => {
                            row.push(<tr key={n} className={(n % 2 == 0) ? "bg-blue-100" : ""}>{
                                Object.values(el).map(
                                    (t, n) => <td className="border px-2 text-sm font-light text-gray-800" key={n}>{t}</td>
                                )
                            }</tr>)
                        })
                        return row;
                    })()
                }
            </tbody>
        </table>
    )
}

export default hot(module)(Table);