const e = React.createElement

const Header = () => e('h1', null, 'GIF Gallery')

const Gif = ({ gifUrl }) => e('img', { src: gifUrl })

const GifList = ({ gifUrls }) => {
  return e('div', null, [
    e('h2', null, 'All the GIFs!'),
    gifUrls.map(gifUrl => Gif({ gifUrl }))
  ])
}

const gifUrls = [
  'https://media.giphy.com/media/3rgXBzEJUJdqoQ7P0I/giphy.gif',
  'https://media.giphy.com/media/3o6UBfUacnJGd2Esuc/giphy.gif',
  'https://media.giphy.com/media/3oKIPrFEZsMAvdVGOk/giphy.gif'
]

const App = () => e('div', null, [
  Header(),
  GifList({ gifUrls })
])

ReactDOM.render(App(), document.getElementById('app'))
