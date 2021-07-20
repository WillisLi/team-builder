import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form.js';
import Member from './Member.js';
import axios from './axios';

const dummyData = [
  {
    name: 'Frank',
    email: 'frank@gmail.com',
    role: 'Backend Engineer',
  },
  {
    name: 'hi',
    email: 'hi@gmail.com',
    role: 'Frontend Engineer',
  }
];

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState(dummyData);

  const [memberValues, setMemberValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setMemberValues({ ...memberValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newMember = {
      name: memberValues.name.trim(),
      email: memberValues.email.trim(),
      role: memberValues.role,
    }

    if (!newMember.name || !newMember.email || !newMember.role) return

    axios.post('fakeapi.com', newMember)
      .then(response => {
        const memberFromBackend = response.data
        setTeamMembers([memberFromBackend, ...teamMembers])
        setMemberValues(initialFormValues)
      })

  }

  useEffect(() => {
    axios.get('fakeapi.com').then(response => setTeamMembers(response.data))
  }, [])

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form values = {memberValues} update = {updateForm} submit = {submitForm}/>
      {
        teamMembers.map(teamMember => {
          return (
            <Member key = {teamMember.id} info = {teamMember} />
          )
        })
      }
    </div>
  );
}

export default App;
