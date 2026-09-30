"use client"

import { useState } from 'react'
import MyArea from "@/components/ui/MyArea/MyArea";
import MyButtonForm from "@/components/ui/MyButtonForm/MyButtonForm";
import MyInput from "@/components/ui/MyInput/MyInput";

export default function MyForm(props) {
    const [inputs, setInputs] = useState({
        name: '',
        number: '',
        message: '',
    })

    const [form, setForm] = useState('')



    const onSubmitForm = async (e) => {
        e.preventDefault()

        if (inputs.name && inputs.number && inputs.message) {
            setForm({ state: 'loading' })
            try {
                const res = await fetch(`api/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inputs),
                })
                setForm({
                    state: 'success',
                    message: 'Your message was sent successfully.',
                })
                setInputs({
                    name: '',
                    number: '',
                    message: '',
                })
            } catch (error) {
                setForm({
                    state: 'error',
                    message: 'Something went wrong',
                })
            }
        }
    }
    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
    }


    return (
            <form {...props} onSubmit={(e) => onSubmitForm(e)}>
                <p className={"text4 text-align-cen"}>
                    ЗАПОЛНИТЕ ФОРМУ
                </p>
                <MyInput
                    id='name'
                    type='text'
                    value={inputs.name}
                    onChange={handleChange}
                    placeholder='Ваше имя'
                    aria-label='Ваше имя'
                    className={"mt-25 inputField w-100"}
                    maxLength={40}
                    required
                />
                <MyInput
                    id='number'
                    type='text'
                    value={inputs.number}
                    onChange={handleChange}
                    placeholder='Ваш номер'
                    aria-label='Ваш телефон'
                    maxLength={40}
                    className={"inputField w-100"}
                    required
                />
                <MyArea
                    id='message'
                    type='text'
                    value={inputs.message}
                    onChange={handleChange}
                    placeholder='Ваш вопрос'
                    aria-label='Ваш вопрос'
                    maxLength={400}

                    required
                />
                <MyButtonForm type='submit' loading={form.state} >ОТПРАВИТЬ ЗАЯВКУ</MyButtonForm>

            </form>
    )
}