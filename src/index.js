import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/header-section/Header';
import NotesInput from './components/input-section/NotesInput';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render([<Header />, <NotesInput />]);
