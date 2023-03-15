import './Link.css';

function Link(props) {
    return (
        <a className='link' href={props.link}>{props.nome}</a>
    )
}

export default Link;
