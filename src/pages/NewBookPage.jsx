import { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../contexts/SessionContext'

const NewBookPage = () => {
  const { withToken } = useContext(SessionContext)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [pages, setPages] = useState(0)

  const handleSubmit = async event => {
    event.preventDefault()
    const payload = { title, author, pages }

    withToken('/books', 'POST', payload)
  }

  useEffect(() => {
    withToken('/books')
  }, [])

  return (
    <>
      <h1>New Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input value={title} onChange={event => setTitle(event.target.value)} required />
        </label>
        <label>
          Author
          <input value={author} onChange={event => setAuthor(event.target.value)} required />
        </label>
        <label>
          Pages
          <input
            value={pages}
            onChange={event => setPages(event.target.value)}
            required
            type='number'
          />
        </label>
        <button type='submit'>Create book</button>
      </form>
    </>
  )
}

export default NewBookPage
