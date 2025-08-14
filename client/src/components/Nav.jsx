import { NavLink } from 'react-router-dom'

const cls = ({isActive}) => isActive ? 'active' : undefined

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" end className={cls}>Home</NavLink>
      <NavLink to="/research" className={cls}>Research</NavLink>
      <NavLink to="/publications" className={cls}>Publications</NavLink>
      <NavLink to="/members" className={cls}>Members</NavLink>
      <NavLink to="/projects" className={cls}>Projects</NavLink>
      <NavLink to="/courses" className={cls}>Courses</NavLink>
      <NavLink to="/news" className={cls}>News</NavLink>
    </nav>
  )
}