import Home from '../Page/Home';
import AllCourse from '../Page/AllCourse'
import ContactUs from '../Page/ContactUs'
import Posts from '../Page/Posts'
import SignUp from '../Page/SignUp';
import ProductPage from '../Page/ProductPage';
import Signin from '../Page/Signin';
import Protected from '../ProtectedWrapper/Protected';

export const roots = [    
    {
        path: '/',
        element: (
            <Protected>
                <Home />
            </Protected>
        )
    },
    {
        path: '/AllCourse',
        element: ( 
        <Protected>
            <AllCourse />
        </Protected>

        )
    },
    {
        path: '/ContactUs',
        element:( 
            <Protected>
                <ContactUs />
            </Protected>
    
            ) 
    },
    { 
        path: '/Posts', 
        element: ( 
            <Protected>
                <Posts />
            </Protected>
    
            )  
    },
    { 
        path: '/CourseDetail', 
        element: ( 
            <Protected>
               <ProductPage />
            </Protected>
    
            )  
    }

];


export const publicRoute = [
    { 
        path: '/SignUp',
         element: <SignUp />
        },
    { 
        path: '/Signin', 
        element: <Signin />
    }
];
