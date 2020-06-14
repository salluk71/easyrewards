import React from 'react'

export default function Members(props) {
   // console.log(props.team)
    return (
        <section className="members">
            <div className="container">
                <h2>Members </h2>             
             <div className="member_list">
                 <ul>
                     {
                        props.team.map((val , i) => 
                            <li key={i}>
                                <div className="userInfo">
                                <div className="profileImage">
                                    <img src={`https://joeschmoe.io/api/v1/${val.name}  `} alt={val.name}  />
                                </div>
                                <span className="memberName">
                                    {val.name}
                                </span>
                                <span className="designation">
                                    {val.company_name}  
                                </span>
                                </div>
                                <div className="country">
                                {val.country}  
                                </div>
                                <div className="action">
                                    <div className="remove" onClick={()=> remove(i)}>
                                    <i className="fa fa-minus-circle"></i> remove
                                    </div>
                                </div>
                             </li>
                           
                        )
                     }
                    
                 </ul>
             </div>
             </span>
        </section>
    )
}
