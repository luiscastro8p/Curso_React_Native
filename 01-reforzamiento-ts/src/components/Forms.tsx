import { useState } from 'react';

export const Forms = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })


    const onChange = (value: string, prop: string) => {
        setFormData({
            ...formData,
            [prop]: value
        })
    }
    return (
        <div>
            <h3>Formularios</h3>
            <input
                type='text'
                className="form-control"
                placeholder="email"
                value={formData.email}
                onChange={(e) => onChange(e.target.value, 'email')}
            />
            <input
                type='password'
                className="form-control mt-2 mb-2"
                placeholder="password"
                value={formData.password}
                onChange={(e) => onChange(e.target.value, 'password')}
            />

            <code>
                <pre>{JSON.stringify(formData, null)}</pre>
            </code>
        </div>
    )
}
