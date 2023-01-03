
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';
import Aihh from './Aihh';
import {motion , AnimatePresence} from "framer-motion";
import { useLocation } from 'react-router-dom';

function App() {
    
    return(
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch >
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetail />
                        </Route>
                        <Route path="/aihh">
                            <Aihh />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
export default App;