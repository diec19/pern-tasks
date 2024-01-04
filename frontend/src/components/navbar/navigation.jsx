import { RiAddCircleFill } from "react-icons/ri";
import { MdAssignmentAdd } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { IoPersonSharp } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";




export const privateRoutes =[
    
  
   
    {
        name: 'Tasks',
        path: '/tasks',
        icon: <MdAssignmentAdd className="w-5 h-5"/>
    },
    {
        name: 'Add',
        path: '/tasks/new',
        icon: <RiAddCircleFill className="w-5 h-5"/>,
    },
    
    {
        name: 'Profile',
        path: '/profile',
        icon: <IoMdContact className="w-5 h-5"/>
    }

]

export const publicRoutes =[
    
    {
        name: 'About',
        path: '/about',
        icon: <FcAbout className="w-5 h-5"/>,

    },
    {
        name: 'Login',
        path: '/login',
        icon:<IoPersonSharp className="w-5 h-5"/>
    },
    {
        name: 'Register',
        path: '/register',
        icon:<FaSignInAlt className="w-5 h-5"/>
    }

]
