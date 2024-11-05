import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Исправлено здесь
import './App.css';
import Dashboard from './components/DashBoard';
import Registerparents from './components/RegisterParents';

export default function App() {
    return (
        <Router> {/* Добавлено оборачивание Routes в Router */}
            <div className="App">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/registerParent/:id" element={<Registerparents />} />
                </Routes>
            </div>
        </Router>
    );
}
