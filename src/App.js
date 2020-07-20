import React from 'react';
import Home from './pages/Home'
import { BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import NavBar from './components/navbar'


import UserRegister from './components/Auth/userRegister'
import AdminRegister from './components/Auth/aminRegister'
import Login from './components/Auth/Login'
import MealPlans from './components/mealPlans'
import Customize from './components/customize'
import CustomizeEdit from './components/customizeEdit'
import Review from './components/review'
import ItemForm from './components/Item/form'
import  SelectType from './components/selectType'
import { connect } from 'react-redux'

import Menu from './components/Item/list'
import NewItem from './components/Item/new'

function App(props) {

  return (
    <BrowserRouter>
      <div>
        <NavBar />  
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/select-plan" component={SelectType} />

          <Route path="/meal-plans" component={MealPlans}  exact={true} />
          <Route path="/meal-plans/customize/:id" component={Customize} />
          
          <Route path="/meal-plans/review" component={Review} exact={true}/>
          
          
          <Route path="/menu" component={Menu} exact={true} />
          <Route path="/users/register" component={UserRegister} />
          <Route path ="/admin/register" component={AdminRegister} />
          <Route path="/login" component={Login} />
          <Route path="/menu/new" component={NewItem} />
        </Switch>
        
     
      </div>
    </BrowserRouter>
   
  );
}

const mapStateToProps = (state) => {
  
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(App)
