import { useEffect, useState } from 'react'

const AllBooksPage = () => {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/books`)
      if (response.ok) {
        const booksData = await response.json()
        setBooks(booksData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <>
      <h1>All books</h1>
      <ul>
        {books.map(currentBook => (
          <li key={currentBook._id}>{currentBook.title}</li>
        ))}
      </ul>
    </>
  )
}

export default AllBooksPage
