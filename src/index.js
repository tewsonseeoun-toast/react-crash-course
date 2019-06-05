const Header = () => <h1>GIF Gallery</h1>

const Gif = ({ gifUrl }) => <img src={gifUrl} />

const GifList = ({ gifUrls }) => (
  <div>
    <h2>All the GIFs!</h2>
    {gifUrls.map(gifUrl => <Gif gifUrl={gifUrl} />)}
  </div>
)

const Search = ({ onGifsFetched }) => {
  const searchGifs = (event) => {
    event.preventDefault()
    const keyword = event.target.keyword.value
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${keyword}&limit=25&offset=0&rating=G&lang=en`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const gifUrls = data.data.map(gif => gif.images.original.url)
        onGifsFetched(gifUrls)
      })
  }

  return (
    <form onSubmit={searchGifs}>
      Search: <input type='text' name='keyword' />
      <input type='submit' />
    </form>
  )
}

const gifUrls = [
  'https://media.giphy.com/media/3rgXBzEJUJdqoQ7P0I/giphy.gif',
  'https://media.giphy.com/media/3o6UBfUacnJGd2Esuc/giphy.gif',
  'https://media.giphy.com/media/3oKIPrFEZsMAvdVGOk/giphy.gif'
]

const logGifUrls = (gifUrls) => {
  console.log(gifUrls)
}

const App = () => (
  <div>
    <Header />
    <Search onGifsFetched={logGifUrls} />
    <GifList gifUrls={gifUrls} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
