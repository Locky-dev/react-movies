

export default function GenreFilterBtn(props) {
  const name = props.genre.name;
  const id = props.genre.id;
  const handleChecked = props.handleChecked;
  return (
    <li>
      <input onChange={handleChecked} type="checkbox" value={id}></input>
      <label htmlFor={name}>{name}</label>
    </li>
  )
}