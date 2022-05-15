import React from 'react'
import Header from '../../Components/Header/index.js'

import { renderRoutes } from "react-router-config";
import {Redirect} from 'react-router'
 function Home ({route}){
  return(
    <div>
      <Header />
      <Redirect to="/MainPage" />
      {renderRoutes(route.routes)}
    </div>
    
  )
}

export default React.memo(Home)