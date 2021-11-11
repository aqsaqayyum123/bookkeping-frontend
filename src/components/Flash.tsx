const flash = ({ message, status }) => {
    return (
      <>
        <div className={`alert alert-${status} alert-dismissible fade show`} role="alert">
          <strong>{message}</strong>
        </div>
      </>
    );
  };
  export default flash;
