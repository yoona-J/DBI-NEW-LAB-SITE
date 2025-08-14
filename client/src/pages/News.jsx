import news from '../data/news.json'
export default function News() {
  return (
    <section>
      <h1>News</h1>
      <ul>
        {news.map(n=>(
          <li key={n.id}><strong>{n.title}</strong> · {n.date} · {n.link && <a href={n.link} target="_blank" rel="noreferrer">detail</a>}</li>
        ))}
      </ul>
    </section>
  )
}