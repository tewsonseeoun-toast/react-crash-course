const Header = () => <h1>GIF Gallery</h1>

const Gif = ({ gifUrl }) => <img src={gifUrl} />

const GifList = ({ gifUrls }) => (
  <div>
    <h2>All the GIFs!</h2>
    {gifUrls.map(gifUrl => <Gif gifUrl={gifUrl} />)}
  </div>
)

const gifUrls = [
  'https://media.giphy.com/media/3rgXBzEJUJdqoQ7P0I/giphy.gif',
  'https://media.giphy.com/media/3o6UBfUacnJGd2Esuc/giphy.gif',
  'https://media.giphy.com/media/3oKIPrFEZsMAvdVGOk/giphy.gif'
]

const App = () => (
  <div>
    <Header />
    <GifList gifUrls={gifUrls} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
