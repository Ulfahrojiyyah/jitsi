import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Pages/Home';
import Signin from './components/Home/Pages/Signin/Signin';
import Signup from './components/Home/Pages/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import ListKuliah from "./components/Kuliah/ListKuliah/ListKuliah";
import Read from "./components/Kuliah/Read/Read";
import NotFound from "./components/Kuliah/NotFound/NotFound";
import Create from "./components/Kuliah/Create/Create";
import { UserProvider } from "./components/Kuliah/KuliahContext/KuliahContext";
import Delete from "./components/Kuliah/Delete/Delete";
import Edit from "./components/Kuliah/Edit/Edit";
import LihatKelas from './components/Kelas/LihatKelas/LihatKelas';
import Tambah from './components/Kelas/Tambah/Tambah';
import EditKelas from './components/Kelas/EditKelas/EditKelas';
import Hapus from './components/Kelas/Hapus/Hapus';
import {KelasProvider} from './components/Kelas/KelasContext/KelasContext';
import DashboardMhs from './components/DashboardMhs/DashboardMhs';
import ListKuliahMhs from './components/KuliahMhs/ListKuliah/ListKuliahMhs';
import LihatKelasMhs from './components/KelasMhs/LihatKelas/LihatKelasMhs';
import { KuliahMhsProvider } from './components/KuliahMhs/KuliahMhsContext/KuliahMhsContext';


function App() {
  return (<Router>
            <div className="App">
            <UserProvider> 
              <KelasProvider> 
                <KuliahMhsProvider>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path="/Signin" component={Signin} />
                    <Route path="/Signup" component={Signup} />
                    <Route exact path='/Dashboard' component={Dashboard} />
                    <Route exact path='/DashboardMhs' component={DashboardMhs} />
                    <Route path="/create" component={Create}/> 
                    <Route path="/read/:id" component={Read}/>
                    <Route path="/edit/:id" component={Edit}/>
                    <Route path="/delete/:id" component={Delete}/>
                    <Route path="/Listkuliah" component={ListKuliah}/>
                    <Route path="/editKelas/:id" component={EditKelas}/>
                    <Route path="/Tambah" component={Tambah}/> 
                    <Route path="/LihatKelas" component={LihatKelas}/>
                    <Route path="/Hapus" component={Hapus}/>
                    <Route path="/ListkuliahMhs" component={ListKuliahMhs}/>
                    <Route path="/LihatKelasMhs" component={LihatKelasMhs}/>
                    <Route path="*" component={NotFound}/>
                  </Switch>
                  </KuliahMhsProvider>
                </KelasProvider>
              </UserProvider>
            </div>
          </Router>
  
  );
}

export default App;
