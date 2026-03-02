import Button from "../../components/Button/Button.component";
import Checkbox from "../../components/checkbox/Checkbox.component";
import Heading from "../../components/Heading/Heading.component";
import warningLogo from "./../../assets/correct.png";

function NotOwingPage() {
  return (
    <section>
      <Heading title="Apply for Clearance" />
      <div className="container bg-white rounded-4 p-4">
        <div className="d-flex bg-success-subtle p-2 pl-3  rounded-2 txtPrimary">
          <div>
            <img src={warningLogo} alt="Warning logo" />
          </div>
          <div className="ms-4 align-self-center">
            <h4 className="h4 txtSecondary">You have no outstanding balance</h4>
            <p className="text-success">You can now apply for clearance</p>
          </div>
        </div>
        <h5 className="my-3">Complete the following clearance requirement</h5>
        <form>
          <section className="bg-light custom-bullet-color rounded-2 border">
            <Checkbox name="Accounts" />
            <Checkbox name="Library" />
            <Checkbox name="Hostel" />
          </section>
          <div className="d-flex justify-content-center mt-4">
            <Button name="Submit Clearance Request" className="bgPrimary" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default NotOwingPage;
