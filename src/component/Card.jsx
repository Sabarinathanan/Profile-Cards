import '../component/Card.css'
const userData=[
    {
          name:"Sabarinathan G",
          city:"Salem",
          field:"front-end developer",
          skills:["UI/UX","Front-end Delevoper","HTML","CSS","Js","React","Node"],
          online:false,
          profile:"https://source.unsplash.com/100x100/?man?1?"
    },
    {
          name:"Gladwin",
          city:"Salem",
          field:"Full-Stack Developer",
          skills:["Java","Tailwind","HTML","CSS","Js","React","Node"],
          online:true,
          profile:"https://source.unsplash.com/100x100/?man?2?"
    },
    {
          name:"Sabarinathan G",
          city:"Kovai",
          field:"Developer",
          skills:["UI/UX","Front-end Delevoper","CSS","Js","React"],
          online:true,
          profile:"https://source.unsplash.com/100x100/?man?3?"
    }
  ]
  function Card(props){
      return (
          <div className="Card-container">
          <span className={props.online? "pro online":"pro offline"}>{props.online?"Online":"Offline"}</span>
          {/* img  */}
          <img src={props.profile} alt="Men" />
          {/* details  */}
          <h3>{props.name}</h3>
          <h3>{props.city}</h3>
          <p>{props.field}</p>
          {/* button  */}
          <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
          </div>
          <div className="skills">
            {/* skils */}
            <h4>Skills</h4>
            <ul>{props.skills.map((skill,index)=>(
              <li key={index}>{skill}</li>
            ))}</ul>
          </div>
  
         </div>
      );
  }
  
  export default function Users(props){
    return(
      <>
      {userData.map((users, index)=>(
        <Card key={index} 
        name={users.name}
        city={users.city}
        field={users.field}
        online={users.online}
        profile={users.profile}
        skills={users.skills}
        />
      ))}
      </>
    )
  }