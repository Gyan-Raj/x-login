import React from "react";

const Form = ({
  handleSubmit,
  userName,
  handleUsername,
  password,
  handlePassword,
}) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username:</label>
        <input
          required={true}
          type="text"
          placeholder="username"
          name="username"
          value={userName}
          onChange={handleUsername}
        />
        <br />
        <label htmlFor="">Password:</label>
        <input
          required={true}
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
