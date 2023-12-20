import Container from 'react-bootstrap/Container'
import React from 'react'

const Contacts = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }
    return (
      <div className="container mt-5">
        <h2 className="mb-3">Свяжитесь с нами</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Имя
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Почта
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Сообщение
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
        <p></p>
        <p className="mb-3">Адрес: ул. Панфилова д. 20 стр. 1</p>
        <p className="mb-3">Телефон: +7 (903) 577 64 42</p>
        <p className="mb-3">Почта: alexpyslar03@gmail.com</p>
      </div>
    )
}

export default Contacts