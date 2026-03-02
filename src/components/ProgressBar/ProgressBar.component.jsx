function ProgressBar() {
  return (
    <div className="bg-white p-4 rounded-3">
      <p className="fw-bold txtPrimary text-center">
        Clearance Progess: 4 of 6 Departments Cleared
      </p>
      <div className="progress w-75 m-auto">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-success"
          aria-valuenow="70"
          aria-valuemax="100"
          aria-valuemin="0"
          style={{ width: "70%" }}
          role="progressbar"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
