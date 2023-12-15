import React,{Component} from "react";
import Menuitems from './menuitems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import styles from'./navbar.module.css';
class Navbar extends Component {
   state = { clicked:false}
   handleClick = () => {
   this.setState({clicked: !this.state.clicked})
   }
   render() {
      return (
         <nav className={styles.NavbarItems}>
            <h1 className={styles.navbar_logo}><FontAwesomeIcon icon={faUserSecret} /></h1>
          
            <div className={styles.menu_icon} onClick={this.handleClick}>
           
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                  {Menuitems.map((item , index) =>{
                     return (
                        <li key={index}>
                        <a className={item.cName} href={item.url}>{item.title}</a>
                     </li>
                     )

                  })}
               </ul>
            </div>
         </nav>
      )
   }
}
export default Navbar;