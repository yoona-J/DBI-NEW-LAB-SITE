import projects from '../data/projects.json'
export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {projects.map(p=>(
          <li key={p.id}><strong>{p.title}</strong> · {p.period} · {p.sponsor || ''}</li>
        ))}
      </ul>
    </section>
  )
}