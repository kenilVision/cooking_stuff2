import Home from '../Page/Home';
import AllCourse from '../Page/AllCourse'
import ContactUs from '../Page/ContactUs'
import Posts from '../Page/Posts'
import SignUp from '../Page/SignUp';
import ProductPage from '../Page/ProductPage';


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
        path: '/CourseDetail', 
        element: <ProductPage />
    }

];
