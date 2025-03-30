
import { Heart, Church, Gift } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="bg-charity-cream py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Partner with Bukal ng Buhay Foundation to provide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 card-shadow">
            <div className="mb-6 text-charity-green">
              <Heart size={40} strokeWidth={2} />
            </div>
            <h3 className="section-subtitle">Orphan Care</h3>
            <p className="text-gray-700 mb-6">
              You can provide holistic, Gospel-centered daily care, education, and discipleship to orphaned and vulnerable children throughout the Philippines, continuing to love and support them as they transition into adult living.
            </p>
            <a href="/programs" className="inline-block text-charity-green font-medium hover:underline">
              Learn more →
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 card-shadow">
            <div className="mb-6 text-charity-green">
              <Church size={40} strokeWidth={2} />
            </div>
            <h3 className="section-subtitle">Church Partnership</h3>
            <p className="text-gray-700 mb-6">
              You can create financial solutions for adoptive families by starting a no-cost, personalized adoption fund at your church. You can also engage in global orphan care projects through mission teams and sponsorship.
            </p>
            <a href="/partnerships" className="inline-block text-charity-green font-medium hover:underline">
              Learn more →
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 card-shadow">
            <div className="mb-6 text-charity-green">
              <Gift size={40} strokeWidth={2} />
            </div>
            <h3 className="section-subtitle">Donations & Sponsorships</h3>
            <p className="text-gray-700 mb-6">
              Financial contributions, food, clothes, school supplies, and other essentials are always needed. Individuals and businesses can also sponsor a child's education or daily needs. Your generosity makes a difference—100% of your donation goes toward helping orphans thrive.
            </p>
            <a href="/donate" className="inline-block text-charity-green font-medium hover:underline">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
