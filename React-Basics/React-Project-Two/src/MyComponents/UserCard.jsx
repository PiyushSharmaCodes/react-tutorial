import './UserCard.css';
import PropTypes from 'prop-types';
const Card = (props) => {
    return (
                <div className="card">
                    <div className="image-container"><img src={props.image} alt="" /></div>
                    <div className="tag">{props.tag1}</div>
                    <div className="tag">{props.tag2}</div>
                    <div className="content">
                        <h1>{props.h1}</h1>
                        <p>{props.p}</p>
                    </div>
                    <button>Read More</button>
                </div>
    );
}
Card.propTypes = {
    image: PropTypes.string.isRequired,
    tag1: PropTypes.string.isRequired,
    tag2: PropTypes.string.isRequired,
    h1: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
};

export default Card;