import Home from '../Page/Home';
import AllCourse from '../Page/AllCourse'
import ContactUs from '../Page/ContactUs'
import Posts from '../Page/Posts'
import SignUp from '../Page/SignUp';
import ProductPage from '../Page/ProductPage';
import Signin from '../Page/Signin';


export const roots = [    
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/AllCourse',
        element: <AllCourse />
    },
    {
        path: '/ContactUs',
        element: <ContactUs />
    },
    { 
        path: '/Posts', 
        element: <Posts />
    }
    ,
    { 
        path: '/SignUp', 
        element: <SignUp />
    },
    { 
        path: '/Signin', 
        element: <Signin />
    },
    { 
        path: '/CourseDetail', 
        element: <ProductPage />
    }

];
