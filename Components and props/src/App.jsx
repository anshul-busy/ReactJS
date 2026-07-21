import { useState } from 'react'
import { CardTemplate } from './components/CardTemplate'
import { Information } from './components/Information'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [cards, setCards] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.phone) return

    setCards((prev) => [...prev, { ...formData, id: Date.now() }])
    setFormData({ name: '', email: '', phone: '' })
  }

  return (
    <>
      <h1>Enter your details to generate your card</h1>
      <Information
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className="cards">
        {cards.length > 0 ? (
          cards.map((card) => (
            <CardTemplate
              key={card.id}
              name={card.name}
              email={card.email}
              phone={card.phone}
            />
          ))
        ) : (
          <p>No cards generated yet.</p>
        )}
      </div>
    </>
  )
}

export default App
