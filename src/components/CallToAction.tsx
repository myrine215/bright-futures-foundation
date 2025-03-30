
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-charity-cream">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Serve Children, Change Lives</h2>
          <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
            Your generosity can provide a loving home, quality education, and a hopeful future for orphaned children in the Philippines. Join us in this life-changing mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <button className="btn-secondary">
                Donate Now
              </button>
            </Link>
            <Link to="/volunteer">
              <button className="btn-outline">
                Volunteer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
