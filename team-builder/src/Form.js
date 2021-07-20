import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = event => {
        const { name, value } = event.target;
        update(name, value);

    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form onSubmit = {onSubmit}>
            <div>
                <label htmlFor = 'name'>Name
                    <input
                        id = 'name'
                        type = 'text'
                        name = 'name'
                        onChange = {onChange}
                        value = {values.name}
                    />
                </label>

                <label htmlFor = 'email'>Email
                    <input
                        id = 'email'
                        type = 'email'
                        name = 'email'
                        onChange = {onChange}
                        value = {values.email}
                    />
                </label>

                <label htmlFor = 'role'>Role
                    <select id = 'role' name = 'role' onChange = {onChange} value = {values.role}>
                        <option value = ''>-- Select a Role --</option>
                        <option value = 'Backend Engineer'>Backend Engineer</option>
                        <option value = 'Frontend Engineer'>Frontend Engineer</option>
                        <option value = 'Designer'>Designer</option>
                        <option value = 'Data Analyst'>Data Analyst</option>
                    </select>
                </label>

                <div className = 'submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
}