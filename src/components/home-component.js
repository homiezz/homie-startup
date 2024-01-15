import "bootstrap/dist/css/bootstrap.min.css";
import FiltersComponent from "./filters-component";

export default function Home() {
  return (
    <div className="homeBackground">
      <div className="overlayStyle">
        <div className="filters">
          <FiltersComponent />
        </div>

        <div className="subtitleStyles">
          Platformă de recenzii pentru proprietari și chiriași <br />
          Încrederea se câștigă prin transparență
        </div>
      </div>
    </div>
  );
}
