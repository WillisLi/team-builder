import React from 'react';

export default function Member(props) {
    const { info } = props;

  if (!info) {
    return <h3>Working fetching your member&apos;s details...</h3>
  }

  return (
    <div>
      <h2>{info.name}</h2>
      <p>Email: {info.email}</p>
      <p>Role: {info.role}</p>
    </div>
  )
}