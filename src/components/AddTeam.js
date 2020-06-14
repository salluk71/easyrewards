import React, { Component } from 'react'
//import Members from './Members'

export default class AddTeam extends Component {
  
   state = {
        teams : [{
            name: 'Adam Whitemans',            
            company_name:'CEO & Founder',
            country:'Italy',    
            admin:true        
        }]
   }
    add_team = (e) =>{      
        e.preventDefault(); 
        let  pushteams =  this.state.teams
        let data = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            company_name:this.refs.company_name.value,
            country:this.refs.country.value,
            new_pass: this.refs.new_pass.value,
            conf_pass: this.refs.conf_pass.value,
            admin: false
        }         
        if(data.name && data.email && data.country && data.company_name&& data.new_pass&& data.conf_pass){
            if(data.new_pass != data.conf_pass ){
                alert('New Password should be matched with Repeat Password');
                return false
            }
            pushteams.push(data);            
            this.refs.form.reset(); 
        }else{
            if(!data.name ){
                alert('name is required');
                return false
            }            
            if(!data.email ){
                alert('email is required');
                return false
            }
            if(!data.company_name ){
                alert('Company Name is required');
                return false
            }            
            if(!data.country ){
                alert('Country is required');
                return false
            }
            if(!data.new_pass ){
                alert('New Password is required');
                return false
            }            
            if(!data.conf_pass ){
                alert('Repeat Password is required');
                return false
            }
           
            
        }              
        this.setState({
            teams:pushteams
        })                          
    }

    componentDidMount(){
        this.refs.name.focus()
    }

    removeItem = (i)=>{
        if(i ==0){
            alert('You can not remove Admin');
        }else{
            let datas = this.state.teams
            datas.splice(i ,1)
            this.setState({
                teams:datas
            })
        }
        
    }
    
    render() {
        return (
            <>
            <section className="team-from">
                <div className="container">
                    <h1><i className="fa fa-user"></i> New Team</h1> 
                    <form ref="form" className="form-wrapper">
                        <div className="from-group">
                            <label>Team Name</label>
                            <input type="text" ref="name" className="from-control" />
                        </div>
                        <div className="from-group">
                            <label>Primary Email</label>
                            <input type="email" ref="email" className="from-control" />
                        </div>
                        <div className="from-group">
                            <label>Company Name</label>
                            <input type="text" ref="company_name" className="from-control" />
                        </div>
                        <div className="from-group">
                            <label>Country</label>
                            <select ref="country" className="from-control">
                                <option value="" hidden>Select Country</option>                                
                                <option>Italy</option>
                                <option>United States</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div className="from-group">
                            <label>Password</label>
                            <input type="password" ref="new_pass" className="from-control" />
                        </div>
                        <div className="from-group">
                            <label>Repeat Password</label>
                            <input type="password" ref="conf_pass" className="from-control" />
                        </div>
                        <button className="add-team-btn" onClick={this.add_team}><i className="fa fa-plus"></i> Add</button>
                    </form>
                    
                </div>            
            </section>
            <section className="members">
            <div className="container">
            <h2>Members {this.state.teams.length?<span className="badge round">{this.state.teams.length}</span> : ''}</h2>             
             <div className="member_list">
                 <ul>
                     {
                        this.state.teams.map((val , i) => 
                            <li key={i}>
                                <div className="userInfo">
                                    <div className="profileImage">
                                        <img src={`https://joeschmoe.io/api/v1/${val.name}  `} alt={val.name}  />
                                    </div>
                                    <span className="memberName">
                                        {val.name}
                                    </span>
                                    <span className="designation">
                                        {val.company_name}  {val.admin? <span className="admin-badge">Admin</span>: ''}
                                    </span>
                                </div>
                                <div className="country-action">
                                    <div className="country">
                                        {val.country}  
                                    </div>
                                    {!val.admin?<div className="action">
                                        <span className="remove" onClick={()=> this.removeItem(i)}>
                                        <i className="fa fa-minus-circle"></i> remove
                                        </span>
                                    </div>:
                                    <div className="action">
                                        <span className="remove" onClick={()=> this.removeItem(i)}>
                                        <i className="fa fa-minus-circle"></i> remove
                                        </span>
                                        </div>
                                    }
                                    </div>
                             </li>
                           
                        )
                     }
                    
                 </ul>
             </div>
                 <button className="save-btn">Save</button>                 
             </div>
        </section>
        <footer>
            <div className="container">
                <p>Have questions? <a href="#">Contact Us</a></p>
            </div>
        </footer>
        </>
        )
    }
}
