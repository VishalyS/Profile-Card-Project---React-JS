import PropTypes from "prop-types";

//Rendering array of data
const userData = [{
    name: "Roshana",
    city: "New York",
    description: "Designer",
    skills: ["UI/UX", "Front End Development", "HTML", "CSS", "JavaScript", "React", "Node"],
    online: true,
    profile: "images/1.jpg"
},
{
    name: "James",
    city: "California",
    description: "Full Stack Web Developer",
    skills: ["Vlogging", "Web Development", "HTML", "CSS", "JavaScript", "React", "Angular"],
    online: false,
    profile: "images/2.jpg"
},
{
    name: "Nancy",
    city: "San Francisco",
    description: "Senior Software Developer",
    skills: ["C", "C++", "Java Programming", "Python", "C#.Net", "MySQL", "MongoDB"],
    online: true,
    profile: "images/3.jpg"
},

]

//User props

function User(props) {
    return (
    //Building component using custom CSS
    <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>  {/*Conditional Rendering*/}
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>{props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li> // Using map function
            ))}
            </ul>
        </div>
    </div>
    );
}
export const UserCard = () => {
  return (
        // <User name="Roshana" city="New York"  description="Designer" skills={["UI/UX", "Front End Development", "HTML", "CSS", "JavaScript", "React", "Node"]} online={true} profile="images/1.jpg" />
        <>
        {/* Rendering multiple components using map function */}
        {
            userData.map((user,index)=>(
                <User key={index}
                name={user.name}
                 city={user.city}
                 description={user.description}
                 online={user.online}
                 profile={user.profile}
                 skills={user.skills}/>
            ))
        }</>
  );
  };

// Usage of prop types
User.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
};