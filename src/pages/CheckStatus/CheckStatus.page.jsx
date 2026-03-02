import Button from "../../components/Button/Button.component";
import ProgressBar from "../../components/ProgressBar/ProgressBar.component";
import Table from "../../components/Table/Table.component";

function CheckStatus() {
  return (
    <section className="p-5">
      <ProgressBar />
      <Table />
      <Button
        className="bg-success  text-white fw-bold m-auto py-2 px-4"
        name="Download Clearance Certificate"
      />
    </section>
  );
}

export default CheckStatus;
