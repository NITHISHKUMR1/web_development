const userData = [
  {
    card:"card1",
    name: "arun",
    city: "chennai",
    description: "Web Developer",
    skills: ["HTML","CSS","JavaScript","React","Node.js","MongoDB","Git"],
    online: true,
    profile: "images/image1.png",
  },
  {
    card:"card2",
    name: "meena",
    city: "bangalore",
    description: "Mobile App Developer",
    skills: ["Flutter","Dart","Kotlin","React Native","Firebase","UI Design"],
    online: false,
    profile: "images/image2.png",
  },
  {
    card:"card3",
    name: "rahul",
    city: "hyderabad",
    description: "AI / ML Engineer",
    skills: ["Python","Machine Learning","TensorFlow","Pandas","NumPy","Deep Learning"],
    online: true,
    profile: "images/image1.png",
  },
  {
    card:"card4",
    name: "sneha",
    city: "mumbai",
    description: "Data Scientist",
    skills: ["Python","R","SQL","Statistics","Data Visualization","Power BI"],
    online: false,
    profile: "images/image2.png",
  },
  {
    card:"card5",
    name: "vikram",
    city: "delhi",
    description: "Cybersecurity Specialist",
    skills: ["Ethical Hacking","Networking","Linux","Cryptography","Wireshark","Metasploit"],
    online: true,
    profile: "images/image1.png",
  },
  {
    card:"card6",
    name: "karthik",
    city: "coimbatore",
    description: "Cloud Engineer",
    skills: ["AWS","Azure","Docker","Kubernetes","CI/CD","Linux"],
    online: false,
    profile: "images/image2.png",
  },
  {
    card:"card7",
    name: "divya",
    city: "pune",
    description: "DevOps Engineer",
    skills: ["Jenkins","Docker","Kubernetes","Git","Bash","Monitoring Tools"],
    online: true,
    profile: "images/image1.png",
  },
  {
    card:"card8",
    name: "ajay",
    city: "kolkata",
    description: "Game Developer",
    skills: ["Unity","C#","Unreal Engine","Game Design","Animation","Physics"],
    online: false,
    profile: "images/image2.png",
  },
  {
    card:"card9",
    name: "priya",
    city: "chennai",
    description: "UI/UX Designer",
    skills: ["Figma","Adobe XD","Wireframing","User Research","Prototyping","Design Thinking"],
    online: true,
    profile: "images/image1.png",
  },
  {
    card:"card10",
    name: "rohit",
    city: "noida",
    description: "Software Developer",
    skills: ["Java","Python","C++","DSA","OOP","Debugging"],
    online: false,
    profile: "images/image2.png",
  }
];


const User = (props) => {
    return (
        <div className="container">
            <h1>{props.card}</h1>
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "online" : "offline"}</span>
            <img src={props.profile} className="img" alt="" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>

            <div className="button-container">
                <button className="primary">following</button>
                <button className="primar-out">message</button>
            </div>

            <div className="skills">
                <h6>skills</h6>

                <ul>
                    {props.skills.map((skill, indexs) => (
                        <li key={indexs}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
const Card = () => {
    return (
        <>
            {userData.map((user,index)=>(
                <User  key={index} card={user.card}name={user.name} city={user.city}
                 description={user.description} skills={user.skills} online={user.online} profile={user.profile} />
            ))}
        </>
    )
}

export default Card

