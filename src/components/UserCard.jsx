function UserCard({ user, deleteUser }) {

  const { id, name, email, phone, company } = user;

  return (
    <div className="card">

      <button
        className="delete-btn"
        onClick={() => deleteUser(id)}
      >
        ×
      </button>

      <div className="profile">
        {name.charAt(0)}
      </div>

      <h2>{name}</h2>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Phone:</strong> {phone}
      </p>

      <p>
        <strong>Company:</strong> {company.name}
      </p>

    </div>
  );
}

export default UserCard;