import Button from "../../components/Button/Button.component";
import Heading from "../../components/Heading/Heading.component";
import warningLogo from "./../../assets/warning.png";

function OwingPage(props) {
  return (
    <section>
      <Heading title="Apply for Clearance" />
      <div className="container bg-white rounded-4 p-4">
        <div className="d-flex bg-danger-subtle p-2 pl-3  rounded-2 txtPrimary">
          <div>
            <img src={warningLogo} alt="Warning logo" />
          </div>
          <p className="ms-3 align-self-center">
            You can not apply clearance because you have outstand arrears
          </p>
        </div>
        <ul className="bg-light custom-bullet-color rounded-2">
          <li className="p-2">
            <span className="txtPrimary">Account </span>- GHS {props.fees}{" "}
            outstanding fees
          </li>
        </ul>

        <div className="d-flex justify-content-center m-5">
          <Button
            name="Apply for Clearance"
            className="bg-light border-0"
            disabled={true}
          />
        </div>
        <hr />
        <p className="text-center text-muted">
          Please clear your outstanding balance to be eligible to apply
        </p>
      </div>
    </section>
  );
}

export default OwingPage;
