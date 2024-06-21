
const UserCard = ({image , fullName, age, gender, email, nationality}) => {
    return(
        <div>
            <img src={image} alt={`${fullName} profile`}/>
            <h3>{fullName}</h3>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{email}</p>
            <p>{nationality}</p>
        </div>
    )
}

export default UserCard;