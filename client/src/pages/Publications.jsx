import pubs from '../data/publications.json'

export default function Publications() {
  return (
    <section>
      <h1>Publications</h1>
      <ul>
        {pubs.map((p,i)=>(
          <li key={i}>
            <strong>{p.title}</strong> ({p.year})<br/>
            <small>{p.authors.join(', ')}</small>{' '}
            {p.link && <a href={p.link} target="_blank" rel="noreferrer">link</a>}
          </li>
        ))}
      </ul>
    </section>
  )
}
