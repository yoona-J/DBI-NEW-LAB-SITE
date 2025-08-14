import courses from '../data/courses.json'
export default function Courses() {
  return (
    <section>
      <h1>Courses</h1>
      <ul>
        {courses.map(c=>(
          <li key={c.id}><strong>{c.name}</strong> · {c.term} · {c.link && <a href={c.link} target="_blank" rel="noreferrer">syllabus</a>}</li>
        ))}
      </ul>
    </section>
  )
}