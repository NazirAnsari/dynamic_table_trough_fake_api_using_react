import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Table({ apifetch, handleDelete }) {
    return (
        <div>
            <table border={1} cellPadding={5} style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        apifetch && apifetch.map((product, index) => (
                            <tr key={index}>
                                <td className='dummyIdColor'>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td className='deleteBtn'><DeleteForeverIcon onClick={() => handleDelete(index)} /></td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
