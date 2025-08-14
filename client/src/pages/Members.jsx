import members from '../data/members.json'
export default function Members() {
  return (
    <section>
      <h1>Members</h1>
      <ul>
        {members.map(m=>(
          <li key={m.id}><strong>{m.name}</strong> · {m.role} · {m.email || ''}</li>
        ))}
      </ul>
    </section>
  )
}