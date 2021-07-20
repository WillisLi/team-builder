import { v4 as uuid } from 'uuid'

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

export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: dummyData })
  },
  post(url, { name, email, role }) {
    const newMember = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newMember })
  }
}